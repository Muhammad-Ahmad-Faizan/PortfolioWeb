import { Suspense } from "react";
import type { Metadata } from "next";
import { Mail, MapPin, Clock, Cpu, CalendarDays, ArrowRight, Globe } from "lucide-react";
import ContactForm from "@/components/sections/contact-form";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project or discuss a role with Muhammad Ahmad Faizan, software engineer based in Pakistan and available remotely worldwide.",
};

export default function ContactPage() {
  const page = {
    heading: "Let\u2019s Build Something Together",
    subtext: "Need a web app, backend, mobile app or AI agent \u2014 or hiring for your team? Tell me what you\u2019re building and I\u2019ll get back to you with a plan.",
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="mb-10">
              <div className="flex items-center gap-2 text-[#5FA8A0] font-mono text-xs uppercase tracking-wider mb-3">
                <Mail size={14} strokeWidth={1.5} />
                <span>Contact</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#F5F1EA] mb-4">
                {page.heading}
              </h1>
              <p className="text-[#A39C90] text-base md:text-lg leading-relaxed">
                {page.subtext}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-[#A39C90] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5FA8A0] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5FA8A0]" />
              </span>
              <span>{siteConfig.availability}</span>
            </div>

            <div className="bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg p-5 mb-8">
              <div className="flex items-center gap-3">
                <Mail size={18} strokeWidth={1.5} className="text-[#E8734A]" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#F5F1EA] hover:text-[#E8734A] transition-colors font-mono text-sm"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg p-6 md:p-8 mb-8">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>

            {siteConfig.bookingUrl && (
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 bg-[#17150F] border border-[rgba(245,241,234,0.08)] hover:border-[#E8734A]/50 rounded-lg p-5 mb-8 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <CalendarDays size={20} strokeWidth={1.5} className="text-[#E8734A]" />
                  <div>
                    <p className="text-sm font-medium text-[#F5F1EA]">Prefer to talk?</p>
                    <p className="text-xs text-[#A39C90]">Book a free 15-minute call</p>
                  </div>
                </div>
                <ArrowRight size={16} className="text-[#A39C90] group-hover:text-[#E8734A] transition-colors" />
              </a>
            )}

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-[#A39C90]">
              <div className="flex items-center gap-2">
                <MapPin size={14} strokeWidth={1.5} />
                <span>{siteConfig.locationLine}</span>
              </div>
              <span className="hidden sm:inline">&middot;</span>
              <div className="flex items-center gap-4">
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#E8734A] transition-colors">
                  <FaGithub size={14} />
                  <span>GitHub</span>
                </a>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#E8734A] transition-colors">
                  <FaLinkedin size={14} />
                  <span>LinkedIn</span>
                </a>
                <a href={siteConfig.x} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#E8734A] transition-colors">
                  <FaXTwitter size={13} />
                  <span>X</span>
                </a>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#E8734A] transition-colors">
                  <FaWhatsapp size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 hidden lg:block">
            <div className="bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg p-6 space-y-6">
              <h3 className="text-sm font-semibold text-[#F5F1EA]">How to Reach Me</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock size={16} strokeWidth={1.5} className="text-[#E8734A] mt-0.5" />
                  <div>
                    <p className="text-sm text-[#F5F1EA] font-medium">Response Time</p>
                    <p className="text-xs text-[#A39C90]">{siteConfig.responseTime}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cpu size={16} strokeWidth={1.5} className="text-[#E8734A] mt-0.5" />
                  <div>
                    <p className="text-sm text-[#F5F1EA] font-medium">Preferred Projects</p>
                    <p className="text-xs text-[#A39C90]">{siteConfig.preferredProjects}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe size={16} strokeWidth={1.5} className="text-[#E8734A] mt-0.5" />
                  <div>
                    <p className="text-sm text-[#F5F1EA] font-medium">Location</p>
                    <p className="text-xs text-[#A39C90]">{siteConfig.location} &middot; remote worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} strokeWidth={1.5} className="text-[#E8734A] mt-0.5" />
                  <div>
                    <p className="text-sm text-[#F5F1EA] font-medium">Time Zone</p>
                    <p className="text-xs text-[#A39C90]">{siteConfig.timezone}</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[rgba(245,241,234,0.08)]">
                <p className="text-xs text-[#A39C90] leading-relaxed">
                  I typically respond within 24 hours. For urgent inquiries,
                  WhatsApp is the fastest way to reach me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}