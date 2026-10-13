import { NextResponse } from "next/server";
import { siteConfig } from "@/content/site-config";

/**
 * Contact form → Resend (https://resend.com)
 *
 * Environment variables (.env.local locally, Vercel → Settings → Environment Variables in production):
 *   RESEND_API_KEY   required  — from resend.com/api-keys
 *   CONTACT_TO       optional  — where inquiries are delivered (defaults to siteConfig.email)
 *   CONTACT_FROM     optional  — sender, e.g. "Ahmad Faizan <hello@yourdomain.com>" (needs a verified domain).
 *                                Defaults to Resend's test sender, which can only deliver to your own Resend account email.
 *   CONTACT_AUTOREPLY optional — "true" to send the visitor a confirmation email (requires a verified domain in CONTACT_FROM)
 */

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  service?: string;
  budget?: string;
  message?: string;
  botcheck?: boolean | string;
};

// Best-effort rate limit per IP (resets when the serverless instance restarts)
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function sendEmail(apiKey: string, body: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: bots tick hidden checkboxes. Pretend success.
  if (data.botcheck) return NextResponse.json({ ok: true });

  const name = (data.name ?? "").trim().slice(0, 100);
  const email = (data.email ?? "").trim().slice(0, 200);
  const service = (data.service ?? "Other").trim().slice(0, 100);
  const budget = (data.budget ?? "Not specified").trim().slice(0, 50);
  const message = (data.message ?? "").trim().slice(0, 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  const to = process.env.CONTACT_TO || siteConfig.email;
  const from = process.env.CONTACT_FROM || "Portfolio Contact <onboarding@resend.dev>";

  try {
    // 1) Inquiry to you — "Reply" goes straight to the visitor
    await sendEmail(apiKey, {
      from,
      to: [to],
      reply_to: email,
      subject: `New inquiry — ${service} — ${name}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111">
          <h2 style="margin:0 0 12px">New project inquiry</h2>
          <table style="border-collapse:collapse">
            <tr><td style="padding:4px 12px 4px 0;color:#666">Name</td><td>${esc(name)}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#666">Email</td><td>${esc(email)}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#666">Service</td><td>${esc(service)}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#666">Budget</td><td>${esc(budget)}</td></tr>
          </table>
          <p style="white-space:pre-wrap;margin-top:16px;padding:12px;background:#f5f5f5;border-radius:8px">${esc(message)}</p>
        </div>`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget}\n\n${message}`,
    });

    // 2) Optional confirmation to the visitor (needs a verified sending domain)
    if (process.env.CONTACT_AUTOREPLY === "true") {
      await sendEmail(apiKey, {
        from,
        to: [email],
        reply_to: to,
        subject: "Thanks — I've received your message",
        html: `
          <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111">
            <p>Hi ${esc(name.split(" ")[0])},</p>
            <p>Thanks for reaching out about <strong>${esc(service)}</strong>. I've received your message and will reply within 24 hours.</p>
            <p>If it's urgent, you can message me on WhatsApp: <a href="https://wa.me/${siteConfig.whatsapp}">wa.me/${siteConfig.whatsapp}</a></p>
            <p>— ${esc(siteConfig.name)}<br/><span style="color:#666">${esc(siteConfig.title)} · ${esc(siteConfig.locationLine)}</span></p>
          </div>`,
      }).catch((e) => console.error("Auto-reply failed:", e)); // never fail the request because of the auto-reply
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact form send failed:", e);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
