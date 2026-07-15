"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { useCountUp } from "@/hooks/use-count-up";
import { Download } from "lucide-react";

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="flex-1 text-center px-4 py-2">
      <div className="text-3xl md:text-4xl font-bold text-[#F5F1EA] font-mono">
        {count}
        <span className="text-[#E8734A] text-xl md:text-2xl">{suffix}</span>
      </div>
      <div className="text-[10px] md:text-xs font-medium text-[#A39C90] uppercase tracking-wider mt-1">
        {label}
      </div>
    </div>
  );
}

export default function HomeHero() {
  return (
    <section className="pt-20 md:pt-24 pb-10 md:pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8734A]/5 via-transparent to-transparent pointer-events-none" />

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-full px-3 py-1 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5FA8A0] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5FA8A0]" />
                </span>
                <span className="text-xs text-[#A39C90] font-mono">
                  {siteConfig.availability}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                Production AI systems{" "}
                <span className="text-[#E8734A]">
                  for teams that need reliability
                </span>
                , not demos.
              </h1>

              <p className="text-lg md:text-xl text-[#A39C90] leading-relaxed max-w-2xl mb-8">
                I design and build agentic AI systems, RAG pipelines, and
                automation workflows that actually work in production — serving
                users, not slide decks.
              </p>

              <div className="flex flex-wrap gap-6">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 bg-[#E8734A] hover:bg-[#E8734A]/90 text-[#12110F] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                >
                  <Sparkles size={16} strokeWidth={1.5} />
                  <span>View Portfolio</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-[rgba(245,241,234,0.08)] hover:border-[#E8734A]/50 text-[#F5F1EA] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                >
                  <span>Discuss a Project</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
                </Link>
                <Link
                  href="/muhammad-ahmad-faizan-cv.pdf"
                  download
                  className="flex items-center gap-2 text-sm text-[#A39C90] hover:text-[#F5F1EA] transition-colors duration-200"
                >
                  <Download size={16} strokeWidth={1.5} />
                  Download CV
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg overflow-hidden font-mono text-xs"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-[#201D18] border-b border-[rgba(245,241,234,0.08)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8734A]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#5FA8A0]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#A39C90]" />
                <span className="text-[#A39C90] ml-2">agent-system — bash</span>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex">
                  <span className="text-[#5FA8A0]">$</span>
                  <span className="text-[#F5F1EA] ml-2">
                    ./deploy-agent --env production
                  </span>
                </div>
                <div className="text-[#A39C90]">
                  <span className="text-[#E8734A]">[agent]</span> task
                  decomposed &rarr; 3 sub-agents
                </div>
                <div className="text-[#A39C90]">
                  <span className="text-[#E8734A]">[retrieval]</span> top-k=5
                  chunks scored, precision 0.92
                </div>
                <div className="text-[#A39C90]">
                  <span className="text-[#E8734A]">[generation]</span> response
                  grounded in 4 sources
                </div>
                <div className="text-[#5FA8A0]">
                  <span className="text-[#A39C90]">[confidence]</span> score:
                  0.87 &mdash; threshold passed
                </div>
                <div className="flex items-center">
                  <span className="text-[#5FA8A0]">$</span>
                  <span className="text-[#F5F1EA] ml-2">System ready.</span>
                  <span className="w-2 h-4 bg-[#F5F1EA] ml-1 animate-blink" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 md:mt-12"
        >
          <div className="bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <StatItem
                value={2}
                suffix="+"
                label="Years building AI systems"
              />
              <div className="hidden md:block w-px bg-[rgba(245,241,234,0.08)]" />
              <div className="h-px md:hidden bg-[rgba(245,241,234,0.08)]" />
              <StatItem value={9} suffix="" label="Projects shipped" />
              <div className="hidden md:block w-px bg-[rgba(245,241,234,0.08)]" />
              <div className="h-px md:hidden bg-[rgba(245,241,234,0.08)]" />
              <StatItem value={100} suffix="%" label="Production focus" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
