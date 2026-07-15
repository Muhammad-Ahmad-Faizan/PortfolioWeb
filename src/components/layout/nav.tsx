"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  FolderKanban,
  BriefcaseBusiness,
  NotebookPen,
  User,
  Mail,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { navLinks } from "@/content/nav-links";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={16} strokeWidth={1.5} />,
  FolderKanban: <FolderKanban size={16} strokeWidth={1.5} />,
  BriefcaseBusiness: <BriefcaseBusiness size={16} strokeWidth={1.5} />,
  NotebookPen: <NotebookPen size={16} strokeWidth={1.5} />,
  User: <User size={16} strokeWidth={1.5} />,
  Mail: <Mail size={16} strokeWidth={1.5} />,
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const ctaText = "Let\u2019s Build";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#12110F]/90 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-[var(--nav-height)]">
        {/* Logo / Name */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[#F5F1EA] hover:text-[#E8734A] transition-colors"
        >
          <span className="font-mono text-sm font-bold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-[#1C1A17] border border-[rgba(245,241,234,0.08)] rounded-full px-2 py-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-200",
                  isActive
                    ? "bg-[#252220] text-[#E8734A]"
                    : "text-[#A39C90] hover:text-[#F5F1EA] hover:bg-[#252220]/50"
                )}
              >
                {iconMap[link.icon]}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#E8734A] hover:bg-[#E8734A]/90 text-[#12110F] px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
        >
          <Sparkles size={14} strokeWidth={1.5} />
          <span>{ctaText}</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#F5F1EA] hover:text-[#E8734A] transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[rgba(245,241,234,0.08)] bg-[#1C1A17]"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200",
                      isActive
                        ? "bg-[#252220] text-[#E8734A]"
                        : "text-[#A39C90] hover:text-[#F5F1EA] hover:bg-[#252220]/50"
                    )}
                  >
                    {iconMap[link.icon]}
                    <span>{link.label}</span>
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-[#E8734A] text-[#12110F] px-4 py-3 rounded-lg text-sm font-medium mt-2"
              >
                <Sparkles size={16} strokeWidth={1.5} />
                <span>{ctaText}</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}