import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.title} · ${siteConfig.specialty}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link-preview card shown on LinkedIn, WhatsApp, X, Slack, etc.
// Card version 2 (Oct 2026): editing this file gives the image a new URL, so social sites drop their cached copy.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #12110F 0%, #1C1A17 60%, #2a1a12 100%)",
          color: "#F5F1EA",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#A39C90" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#5FA8A0" }} />
          <div style={{ display: "flex" }}>{siteConfig.locationLine}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{siteConfig.name}</div>
          <div style={{ display: "flex", fontSize: 44, color: "#E8734A" }}>
            {`${siteConfig.title} · ${siteConfig.specialty}`}
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 26, color: "#A39C90" }}>
          {["Web Apps", "Backend & APIs", "Mobile", "AI Agents", "Automation"].map((t) => (
            <div key={t} style={{ border: "1px solid #3a352e", borderRadius: 999, padding: "8px 22px" }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
