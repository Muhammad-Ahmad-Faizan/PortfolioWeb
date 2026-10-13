"use client";

import { useState } from "react";
import SmartImage from "@/components/ui/smart-image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, BadgeCheck, ShieldCheck } from "lucide-react";
import { certifications, certCategories } from "@/content/certifications";

export default function CertificationsView() {
  const [active, setActive] = useState<string>("All");
  const tabs = ["All", ...certCategories.filter((c) => certifications.some((x) => x.category === c))];
  const list = active === "All" ? certifications : certifications.filter((c) => c.category === active);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="section-container">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <div className="flex items-center gap-2 text-[#5FA8A0] font-mono text-xs uppercase tracking-wider mb-3">
            <Award size={14} strokeWidth={1.5} />
            <span>Certifications</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#F5F1EA] mb-4">
            Licenses, Certifications &amp; Badges
          </h1>
          <p className="text-[#A39C90] text-base md:text-lg leading-relaxed">
            Courses, credentials and competitions that back up the work in my portfolio.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-3 py-1.5 rounded-full text-sm font-mono transition-all duration-200 ${
                active === t
                  ? "bg-[#E8734A] text-[#12110F]"
                  : "bg-[#1C1A17] text-[#A39C90] hover:text-[#F5F1EA] border border-[rgba(245,241,234,0.08)]"
              }`}
            >
              {t}
              <span className="ml-1.5 opacity-60">
                {t === "All" ? certifications.length : certifications.filter((c) => c.category === t).length}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {list.map((c) => (
              <div
                key={c.title}
                className="flex flex-col bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-xl overflow-hidden hover:border-[rgba(232,115,74,0.35)] transition-colors"
              >
                {c.image ? (
                  <SmartImage
                    src={c.image}
                    alt={`${c.title} — ${c.issuer}`}
                    label={c.title}
                    className="aspect-[16/10]"
                    imgClassName="!object-contain p-4 bg-[#201D18]"
                  />
                ) : (
                  <div className="relative aspect-[16/10] bg-[#201D18] flex items-center justify-center">
                    <BadgeCheck size={48} strokeWidth={1} className="text-[#E8734A]/60" />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#5FA8A0] mb-2">{c.category}</span>
                  <h2 className="text-base font-semibold text-[#F5F1EA] leading-snug mb-1">{c.title}</h2>
                  <p className="text-sm text-[#A39C90] mb-3">
                    {c.issuer}
                    {c.date && <> &middot; {c.date}</>}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.skills.map((s) => (
                      <span key={s} className="text-xs font-mono text-[#5FA8A0] bg-[#252220] rounded-full px-2 py-0.5">
                        {s}
                      </span>
                    ))}
                  </div>
                  {(c.credentialUrl || c.badgeUrl) && (
                    <div className="mt-auto flex flex-wrap gap-2">
                      {c.credentialUrl && (
                        <a
                          href={c.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-[#E8734A]/10 border border-[#E8734A]/30 hover:bg-[#E8734A] hover:text-[#12110F] text-[#F5F1EA] px-3 py-1.5 text-xs font-medium transition-colors"
                        >
                          <ShieldCheck size={13} /> Verify
                        </a>
                      )}
                      {c.badgeUrl && (
                        <a
                          href={c.badgeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(245,241,234,0.15)] hover:border-[#5FA8A0] text-[#A39C90] hover:text-[#F5F1EA] px-3 py-1.5 text-xs font-medium transition-colors"
                        >
                          <ExternalLink size={12} /> Credly badge
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
