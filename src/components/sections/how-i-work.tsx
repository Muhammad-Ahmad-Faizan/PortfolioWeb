import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { processSteps, whyWorkWithMe } from "@/content/services";

export default function HowIWork() {
  return (
    <section className="py-10 md:py-14">
      <div className="section-container">
        <div className="mb-8 md:mb-10">
          <span className="inline-block text-xs font-mono text-[#5FA8A0] uppercase tracking-wider mb-3">
            Process
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F5F1EA]">How I Work</h2>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {processSteps.map((step, i) => (
            <li
              key={step.title}
              className="bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg p-5 hover:border-[rgba(232,115,74,0.3)] transition-colors"
            >
              <span className="font-mono text-2xl font-bold text-[#E8734A]/70">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-sm font-semibold text-[#F5F1EA] mt-2 mb-1">{step.title}</h3>
              <p className="text-xs text-[#A39C90] leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div>
            <span className="inline-block text-xs font-mono text-[#5FA8A0] uppercase tracking-wider mb-3">
              Why me
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F5F1EA] mb-4">
              Why Work With Me
            </h2>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm text-[#E8734A] hover:underline"
            >
              See services &amp; pricing <ArrowRight size={14} />
            </Link>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyWorkWithMe.map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="shrink-0 w-6 h-6 rounded-full bg-[rgba(95,168,160,0.15)] flex items-center justify-center mt-0.5">
                  <Check size={14} className="text-[#5FA8A0]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F1EA] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#A39C90] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
