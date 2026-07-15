import Link from "next/link";
import { Mail, Sparkles } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { navLinks } from "@/content/nav-links";
import { FaWhatsapp } from "react-icons/fa";
import { Download } from "lucide-react";

export default function Footer() {
  const ctaHeading = "Let\u2019s Build Something Together";
  const ctaText = "Let\u2019s Build";

  return (
    <footer className="border-t border-[rgba(245,241,234,0.08)] bg-[#17150F] pt-6">
      <div className="section-container py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#F5F1EA]"
            >
              <span className="font-mono text-sm font-bold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-[#A39C90] max-w-xs leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A39C90] hover:text-[#F5F1EA] transition-colors"
                aria-label="GitHub"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A39C90] hover:text-[#F5F1EA] transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#A39C90] hover:text-[#F5F1EA] transition-colors"
                aria-label="Email"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A39C90] hover:text-[#F5F1EA] transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>
              <a
                href="/muhammad-ahmad-faizan-cv.pdf"
                download
                aria-label="Download CV"
                className="text-[#A39C90] hover:text-[#E8734A] transition-colors duration-200"
              >
                <Download size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#F5F1EA]">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A39C90] hover:text-[#E8734A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#F5F1EA]">
              {ctaHeading}
            </h3>
            <p className="text-sm text-[#A39C90] leading-relaxed">
              Discuss your next AI project or automation pipeline.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8734A] hover:bg-[#E8734A]/90 text-[#12110F] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
            >
              <Sparkles size={14} strokeWidth={1.5} />
              <span>{ctaText}</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-2 pb-2 border-t border-[rgba(245,241,234,0.08)] flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#A39C90]">
            &copy; 2025 {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-[#A39C90]">{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
