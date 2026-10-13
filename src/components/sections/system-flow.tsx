"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageSquareText, ShieldCheck, Lightbulb, Database, SearchX, FileCheck2 } from "lucide-react";

// Animated walkthrough of a real system: the rca-agent root-cause investigation pipeline.
const steps = [
  { icon: MessageSquareText, title: "Question", detail: "“Why did revenue fall last week?”", tag: "input" },
  { icon: ShieldCheck, title: "Verify", detail: "Baseline + significance test — is the change real?", tag: "python" },
  { icon: Lightbulb, title: "Hypotheses", detail: "LLM proposes falsifiable explanations", tag: "llm" },
  { icon: Database, title: "Test with data", detail: "Read-only, allow-listed SQL tools only", tag: "sql" },
  { icon: SearchX, title: "Counter-evidence", detail: "Actively tries to disprove each claim", tag: "python" },
  { icon: FileCheck2, title: "Cited report", detail: "Every number checked against the evidence ledger", tag: "output" },
];

export default function SystemFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-120px" });
  const [active, setActive] = useState(-1);

  useEffect(() => {
    if (!inView) return;
    setActive(0);
    const id = setInterval(() => setActive((a) => (a + 1) % (steps.length + 2)), 1100);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section className="py-10 md:py-14">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
          <div>
            <span className="inline-block text-xs font-mono text-[#5FA8A0] uppercase tracking-wider mb-3">
              System in motion
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F5F1EA]">
              How one of my systems thinks
            </h2>
            <p className="mt-3 text-[#A39C90] text-base max-w-2xl leading-relaxed">
              A root-cause investigation agent: code does the math, the LLM does the reasoning, and every
              claim must cite evidence.
            </p>
          </div>
          <Link
            href="/projects/rca-root-cause-agent"
            className="inline-flex items-center gap-1.5 text-sm text-[#E8734A] hover:underline shrink-0"
          >
            Read the case study <ArrowRight size={14} />
          </Link>
        </div>

        <div ref={ref} className="relative">
          {/* connector line (desktop) */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-px bg-[rgba(245,241,234,0.1)]">
            <motion.div
              className="h-px bg-[#E8734A]"
              animate={{ width: `${Math.min(Math.max(active, 0), steps.length - 1) / (steps.length - 1) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const on = i <= active;
              return (
                <li key={step.title} className="relative flex lg:flex-col items-start lg:items-center gap-3 lg:text-center">
                  <motion.div
                    animate={{
                      backgroundColor: on ? "rgba(232,115,74,0.15)" : "rgba(37,34,32,1)",
                      borderColor: on ? "rgba(232,115,74,0.6)" : "rgba(245,241,234,0.08)",
                      scale: i === active ? 1.08 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 shrink-0 w-14 h-14 rounded-xl border flex items-center justify-center bg-[#252220]"
                  >
                    <Icon size={22} strokeWidth={1.5} className={on ? "text-[#E8734A]" : "text-[#A39C90]"} />
                  </motion.div>
                  <div>
                    <div className="flex lg:justify-center items-center gap-2 mb-1">
                      <h3 className={`text-sm font-semibold transition-colors ${on ? "text-[#F5F1EA]" : "text-[#A39C90]"}`}>
                        {step.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[#5FA8A0] bg-[#252220] rounded px-1.5">{step.tag}</span>
                    </div>
                    <p className="text-xs text-[#A39C90] leading-relaxed">{step.detail}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
