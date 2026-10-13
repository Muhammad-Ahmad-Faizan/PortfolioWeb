import Link from "next/link";
import type { Metadata } from "next";
import {
  Layers,
  Globe,
  Server,
  Monitor,
  Smartphone,
  Workflow,
  Bot,
  Clock,
  Check,
  ArrowRight,
  MessageCircle,
  CalendarDays,
} from "lucide-react";
import { serviceCategories, processSteps, communication, faqs, type ServiceCategory } from "@/content/services";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Web development, backend APIs, desktop and mobile apps, AI automation and AI agents — starting prices in USD. Based in Pakistan, available remotely worldwide.",
};

const icons: Record<ServiceCategory["icon"], React.ElementType> = {
  Globe,
  Server,
  Monitor,
  Smartphone,
  Workflow,
  Bot,
  Clock,
};

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="section-container">
        {/* Header */}
        <div className="mb-10 md:mb-14 max-w-3xl">
          <div className="flex items-center gap-2 text-[#5FA8A0] font-mono text-xs uppercase tracking-wider mb-3">
            <Layers size={14} strokeWidth={1.5} />
            <span>Services</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#F5F1EA] mb-4">
            Services &amp; Pricing
          </h1>
          <p className="text-[#A39C90] text-base md:text-lg leading-relaxed">
            From a business website to a full AI-powered product. Prices below are starting points in USD
            &mdash; every project gets a fixed quote after a short discovery call.
          </p>
          <p className="text-sm text-[#A39C90] mt-3">{siteConfig.locationLine}</p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {serviceCategories.map((svc) => {
            const Icon = icons[svc.icon];
            return (
              <div
                key={svc.id}
                id={svc.id}
                className={`flex flex-col bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-xl p-6 hover:border-[rgba(232,115,74,0.35)] transition-colors scroll-mt-28 ${
                  svc.id === "hourly" ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(232,115,74,0.1)] flex items-center justify-center">
                    <Icon size={20} strokeWidth={1.5} className="text-[#E8734A]" />
                  </div>
                  <h2 className="text-base font-semibold text-[#F5F1EA]">{svc.title}</h2>
                </div>

                <div className="mb-3">
                  <span className="text-xs text-[#A39C90]">Starting from</span>
                  <div className="font-mono text-3xl font-bold text-[#F5F1EA]">
                    ${svc.startingPrice.toLocaleString()}
                    {svc.priceSuffix && <span className="text-base text-[#A39C90]">{svc.priceSuffix}</span>}
                  </div>
                </div>

                <p className="text-sm text-[#A39C90] leading-relaxed mb-4">{svc.summary}</p>

                <ul className={`mb-5 ${svc.id === "hourly" ? "grid sm:grid-cols-2 lg:grid-cols-4 gap-2" : "space-y-2"}`}>
                  {svc.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-sm text-[#F5F1EA]/90">
                      <Check size={15} className="text-[#5FA8A0] mt-0.5 shrink-0" />
                      {inc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {svc.stack.map((t) => (
                    <span key={t} className="text-xs font-mono text-[#5FA8A0] bg-[#252220] rounded-full px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/contact?service=${svc.id}`}
                  className={`mt-auto inline-flex items-center justify-center gap-2 ${svc.id === "hourly" ? "self-start px-6" : ""} bg-[#252220] hover:bg-[#E8734A] hover:text-[#12110F] text-[#F5F1EA] px-4 py-2.5 rounded-full text-sm font-medium transition-colors`}
                >
                  Get a quote <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Process */}
        <section className="mb-20">
          <span className="inline-block text-xs font-mono text-[#5FA8A0] uppercase tracking-wider mb-3">Process</span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F5F1EA] mb-8">
            From first call to launch
          </h2>
          <ol className="relative border-l border-[rgba(245,241,234,0.1)] ml-3 space-y-8 max-w-3xl">
            {processSteps.map((step, i) => (
              <li key={step.title} className="pl-8 relative">
                <span className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#17150F] border border-[#E8734A]/60 text-[11px] font-mono text-[#E8734A] flex items-center justify-center">
                  {i + 1}
                </span>
                <h3 className="text-base font-semibold text-[#F5F1EA] mb-1">{step.title}</h3>
                <p className="text-sm text-[#A39C90] leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg p-5 max-w-3xl">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[#F5F1EA] mb-3">
              <MessageCircle size={16} className="text-[#E8734A]" /> How we&apos;ll communicate
            </h3>
            <ul className="space-y-2">
              {communication.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-[#A39C90]">
                  <span className="text-[#5FA8A0]">&rarr;</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20 max-w-3xl">
          <span className="inline-block text-xs font-mono text-[#5FA8A0] uppercase tracking-wider mb-3">FAQ</span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F5F1EA] mb-8">
            Frequently asked questions
          </h2>
          <div className="divide-y divide-[rgba(245,241,234,0.08)] border-y border-[rgba(245,241,234,0.08)]">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-[#F5F1EA] font-medium">
                  {f.q}
                  <span className="text-[#E8734A] text-xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-[#A39C90] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#E8734A]/10 to-transparent border border-[rgba(245,241,234,0.08)] rounded-lg p-6 md:p-8">
          <h2 className="text-xl font-semibold text-[#F5F1EA] mb-2">Not sure which service fits?</h2>
          <p className="text-[#A39C90] text-sm mb-4 max-w-lg">
            Describe what you want to build and I&apos;ll recommend the simplest solution that works.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8734A] hover:bg-[#E8734A]/90 text-[#12110F] px-4 py-2 rounded-full text-sm font-medium"
            >
              Tell me about your project <ArrowRight size={14} />
            </Link>
            {siteConfig.bookingUrl && (
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[rgba(245,241,234,0.15)] hover:border-[#E8734A] text-[#F5F1EA] px-4 py-2 rounded-full text-sm"
              >
                <CalendarDays size={14} /> Book a free call
              </a>
            )}
          </div>
        </div>
      </div>

      {/* FAQ structured data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </div>
  );
}
