import { Factory } from "lucide-react";
import Flag, { type CountryCode } from "@/components/ui/flag";

// Client names are intentionally withheld; only industry and country are shown.
const clients: { code?: CountryCode; country: string; type: string }[] = [
  { code: "AE", country: "UAE", type: "Visa & Residency Consultancy" },
  { code: "FR", country: "France", type: "Online Tyre Retailer" },
  { country: "International", type: "Steel Fabrication Company" },
  { code: "US", country: "USA", type: "Shopify Store Owner" },
  { code: "PK", country: "Pakistan", type: "FastAPI Backend Maintenance" },
];

export default function ClientsStrip() {
  return (
    <section className="py-6 md:py-8 border-y border-[rgba(245,241,234,0.06)] bg-[#17150F]/40">
      <div className="section-container">
        <p className="text-center text-sm text-[#A39C90] mb-4">Delivered for clients across 4 countries</p>
        <div className="marquee-mask overflow-hidden">
          <ul className="flex w-max animate-marquee">
            {[...clients, ...clients].map((c, i) => (
              <li key={i} aria-hidden={i >= clients.length} className="flex items-center gap-2 pr-12 text-sm text-[#A39C90] whitespace-nowrap">
                {c.code ? (
                  <Flag code={c.code} />
                ) : (
                  <Factory size={15} strokeWidth={1.5} className="text-[#E8734A]" aria-hidden />
                )}
                <span className="text-[#F5F1EA]">{c.type}</span>
                <span className="text-xs font-mono text-[#5FA8A0]">{c.country}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
