"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { projects } from "@/content/projects";
import { useCountUp } from "@/hooks/use-count-up";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="flex-1 text-center px-4 py-3">
      <div className="text-3xl md:text-4xl font-bold text-[#F5F1EA] font-mono">
        {count}
        <span className="text-[#E8734A] text-xl md:text-2xl">{suffix}</span>
      </div>
      <div className="text-xs text-[#A39C90] mt-1">{label}</div>
    </div>
  );
}

// Terminal log that types itself line by line after the headline lands.
const logLines: { tag?: string; text: string; tone?: "ok" | "cmd" }[] = [
  { text: "git push origin main", tone: "cmd" },
  { tag: "[ci]", text: "lint ✓  typecheck ✓" },
  { tag: "[test]", text: "unit + integration — all passed" },
  { tag: "[build]", text: "api · web · worker images built" },
  { tag: "[migrate]", text: "database schema up to date" },
  { tag: "[deploy]", text: "production — healthy", tone: "ok" },
];

function Terminal() {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? logLines.length : 0);

  useEffect(() => {
    if (reduce) return;
    let i = 0;
    const start = setTimeout(function tick() {
      i += 1;
      setShown(i);
      if (i < logLines.length) setTimeout(tick, i === 1 ? 700 : 420);
    }, 900);
    return () => clearTimeout(start);
  }, [reduce]);

  return (
    <div className="bg-[#17150F]/90 backdrop-blur border border-[rgba(245,241,234,0.08)] rounded-lg overflow-hidden font-mono text-xs shadow-[0_30px_80px_-30px_rgba(232,115,74,0.25)]">
      <div className="flex items-center gap-2 px-4 py-2 bg-[#201D18] border-b border-[rgba(245,241,234,0.08)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#E8734A]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#5FA8A0]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#A39C90]" />
        <span className="text-[#A39C90] ml-2">release — bash</span>
      </div>
      <div className="p-4 space-y-2 min-h-[212px]">
        {logLines.slice(0, shown).map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className={l.tone === "ok" ? "text-[#5FA8A0]" : "text-[#A39C90]"}
          >
            {l.tone === "cmd" ? (
              <>
                <span className="text-[#5FA8A0]">$</span>
                <span className="text-[#F5F1EA] ml-2">{l.text}</span>
              </>
            ) : (
              <>
                <span className={l.tone === "ok" ? "text-[#A39C90]" : "text-[#E8734A]"}>{l.tag}</span> {l.text}
              </>
            )}
          </motion.div>
        ))}
        {shown >= logLines.length && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center">
            <span className="text-[#5FA8A0]">$</span>
            <span className="text-[#F5F1EA] ml-2">Shipped.</span>
            <span className="w-2 h-4 bg-[#F5F1EA] ml-1 animate-blink" />
          </motion.div>
        )}
      </div>
    </div>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const sx = useSpring(mx, { stiffness: 120, damping: 25 });
  const sy = useSpring(my, { stiffness: 120, damping: 25 });
  const glow = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, rgba(232,115,74,0.13), transparent 60%)`;

  const onMove = (e: React.MouseEvent) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section ref={sectionRef} onMouseMove={onMove} className="pt-24 md:pt-32 pb-10 md:pb-12 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 hero-grid pointer-events-none" />
      <motion.div aria-hidden style={{ background: glow }} className="absolute inset-0 pointer-events-none hidden md:block" />
      <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#E8734A]/[0.06] blur-3xl pointer-events-none" />

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3">
            <motion.div {...rise(0)} className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 shrink-0 rounded-full p-[2px] bg-gradient-to-br from-[#E8734A]/70 via-[#E8734A]/20 to-[#5FA8A0]/50">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[radial-gradient(circle_at_50%_35%,#3a2a20,#1C1A17_70%)]">
                  {/* Dedicated head-and-shoulders crop (public/avatar.webp), shown at real size so it stays sharp */}
                  <Image
                    src="/avatar.webp"
                    alt={siteConfig.name}
                    fill
                    sizes="112px"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-[#F5F1EA]">{siteConfig.name}</p>
                <p className="flex items-center gap-1.5 text-xs text-[#A39C90]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5FA8A0] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#5FA8A0]" />
                  </span>
                  {siteConfig.availability}
                </p>
              </div>
            </motion.div>

            <h1 className="font-semibold tracking-tight mb-6">
              <motion.span {...rise(0.12)} className="block text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-[#F5F1EA]">
                {siteConfig.title}.
              </motion.span>
              <motion.span {...rise(0.26)} className="block mt-3 text-2xl md:text-3xl lg:text-4xl leading-tight text-[#A39C90] max-w-xl">
                I build reliable web apps, backends and AI products.
              </motion.span>
            </h1>

            <motion.p {...rise(0.4)} className="text-lg text-[#A39C90] leading-relaxed max-w-xl mb-8">
              From the first architecture sketch to a tested, deployed system &mdash; for startups and
              businesses in the USA, UAE, France, Pakistan and beyond.
            </motion.p>

            <motion.div {...rise(0.52)} className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 bg-[#E8734A] hover:bg-[#F0845C] text-[#12110F] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-[0_8px_30px_-8px_rgba(232,115,74,0.6)]"
              >
                <Sparkles size={16} strokeWidth={1.5} className="transition-transform group-hover:rotate-12" />
                <span>View my work</span>
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 border border-[rgba(245,241,234,0.12)] hover:border-[#E8734A]/50 text-[#F5F1EA] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
              >
                <span>Services &amp; pricing</span>
                <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            <motion.div {...rise(0.64)} className="flex items-center gap-2 mt-6 text-sm text-[#A39C90]">
              <MapPin size={14} strokeWidth={1.5} className="text-[#E8734A]" />
              <span>{siteConfig.locationLine}</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
            className="lg:col-span-2 hidden md:block [perspective:1000px]"
          >
            <Terminal />
          </motion.div>
        </div>

        <motion.div {...rise(0.8)} className="mt-12 md:mt-14">
          <div className="bg-[#17150F]/80 backdrop-blur border border-[rgba(245,241,234,0.08)] rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[rgba(245,241,234,0.08)]">
              <StatItem value={2} suffix="+" label="Years building software" />
              <StatItem value={projects.filter((p) => p.status !== "In progress").length} suffix="" label="Projects shipped" />
              <StatItem value={4} suffix="" label="Countries served" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
