"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Sparkles, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { serviceCategories } from "@/content/services";

// Messages are sent through /api/contact (Resend). See CONTACT_FORM_SETUP.md.

const budgets = ["Under $250", "$250 – $500", "$500 – $1,000", "$1,000 – $3,000", "$3,000+", "Not sure yet"];

const field =
  "w-full bg-[#252220] border border-[rgba(245,241,234,0.08)] rounded-lg px-4 py-2.5 text-sm text-[#F5F1EA] placeholder-[#A39C90] focus:outline-none focus:border-[#E8734A] transition-colors";

type Status = "idle" | "sending" | "sent" | "error" | "limited";

export default function ContactForm() {
  const params = useSearchParams();
  const [service, setService] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const s = params.get("service");
    if (s && serviceCategories.some((c) => c.id === s)) setService(s);
  }, [params]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const serviceTitle =
      serviceCategories.find((c) => c.id === data.get("service"))?.title ??
      (data.get("service") === "job" ? "Job / full-time opportunity" : "Other");

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      service: serviceTitle,
      budget: data.get("budget"),
      message: data.get("message"),
      botcheck: data.get("botcheck") === "on",
    };

    // Fallback if the email service isn't configured yet: open the visitor's email app, pre-filled.
    const openMailApp = () => {
      const body = `Name: ${payload.name}\nEmail: ${payload.email}\nService: ${serviceTitle}\nBudget: ${payload.budget}\n\n${payload.message}`;
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        `Project inquiry — ${serviceTitle}`
      )}&body=${encodeURIComponent(body)}`;
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.status === 503) {
        setStatus("idle");
        openMailApp();
        return;
      }
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
        setService("");
      } else {
        setStatus(res.status === 429 ? "limited" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center text-center py-10 gap-3">
        <CheckCircle2 size={40} strokeWidth={1.5} className="text-[#5FA8A0]" />
        <h3 className="text-lg font-semibold text-[#F5F1EA]">Message sent — thank you!</h3>
        <p className="text-sm text-[#A39C90] max-w-sm">
          I&apos;ll reply within 24 hours. For anything urgent, message me on WhatsApp.
        </p>
        <button onClick={() => setStatus("idle")} className="text-sm text-[#E8734A] hover:underline mt-2">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* honeypot against spam bots */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#F5F1EA] mb-2">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#F5F1EA] mb-2">Email</label>
          <input type="email" id="email" name="email" placeholder="your@email.com" required autoComplete="email" className={field} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-[#F5F1EA] mb-2">What do you need?</label>
          <select id="service" name="service" required value={service} onChange={(e) => setService(e.target.value)} className={field}>
            <option value="" disabled>Select a service</option>
            {serviceCategories.map((c) => (
              <option key={c.id} value={c.id}>{c.title}</option>
            ))}
            <option value="job">Job / full-time opportunity</option>
            <option value="other">Something else</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-[#F5F1EA] mb-2">Budget (USD)</label>
          <select id="budget" name="budget" defaultValue="" required className={field}>
            <option value="" disabled>Select a range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#F5F1EA] mb-2">Project details</label>
        <textarea id="message" name="message" placeholder="What are you building, and when do you need it?" required rows={5} className={`${field} resize-none`} />
      </div>

      {status === "limited" && (
        <p className="flex items-center gap-2 text-sm text-[#E8734A]">
          <AlertCircle size={16} /> Too many messages in a short time. Please wait a few minutes, or email me at {siteConfig.email}.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-[#E8734A]">
          <AlertCircle size={16} /> The message couldn&apos;t be sent. Please email me directly at {siteConfig.email}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 bg-[#E8734A] hover:bg-[#E8734A]/90 disabled:opacity-60 text-[#12110F] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
      >
        {status === "sending" ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} strokeWidth={1.5} />}
        <span>{status === "sending" ? "Sending…" : "Send Message"}</span>
      </button>
    </form>
  );
}
