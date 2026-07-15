import { Mail, MapPin, Sparkles, Clock, Cpu } from "lucide-react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/content/site-config";

export default function ContactPage() {
  const page = {
    heading: "Let\u2019s Build Something Together",
    subtext: "Have an AI project, automation pipeline, or system architecture challenge? Let\u2019s discuss how to make it production-ready.",
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
              <form action={`mailto:${siteConfig.email}`} method="GET" encType="text/plain">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#F5F1EA] mb-2">Name</label>
                    <input type="text" id="name" name="subject" placeholder="Your name" required
                      className="w-full bg-[#252220] border border-[rgba(245,241,234,0.08)] rounded-lg px-4 py-2.5 text-sm text-[#F5F1EA] placeholder-[#A39C90] focus:outline-none focus:border-[#E8734A] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#F5F1EA] mb-2">Email</label>
                    <input type="email" id="email" name="cc" placeholder="your@email.com" required
                      className="w-full bg-[#252220] border border-[rgba(245,241,234,0.08)] rounded-lg px-4 py-2.5 text-sm text-[#F5F1EA] placeholder-[#A39C90] focus:outline-none focus:border-[#E8734A] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#F5F1EA] mb-2">Message</label>
                    <textarea id="message" name="body" placeholder="Tell me about your project..." required rows={5}
                      className="w-full bg-[#252220] border border-[rgba(245,241,234,0.08)] rounded-lg px-4 py-2.5 text-sm text-[#F5F1EA] placeholder-[#A39C90] focus:outline-none focus:border-[#E8734A] transition-colors resize-none" />
                  </div>
                  <button type="submit"
                    className="inline-flex items-center gap-2 bg-[#E8734A] hover:bg-[#E8734A]/90 text-[#12110F] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200">
                    <Sparkles size={16} strokeWidth={1.5} />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-[#A39C90]">
              <div className="flex items-center gap-2">
                <MapPin size={14} strokeWidth={1.5} />
                <span>{siteConfig.location}</span>
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