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
  Layers,
  Award,
  FileText,
  Search,
} from "lucide-react";
import { openCommandPalette } from "@/components/layout/command-palette";
import { navLinks } from "@/content/nav-links";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/motion/magnetic";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={16} strokeWidth={1.5} />,
  FolderKanban: <FolderKanban size={16} strokeWidth={1.5} />,
  BriefcaseBusiness: <BriefcaseBusiness size={16} strokeWidth={1.5} />,
  NotebookPen: <NotebookPen size={16} strokeWidth={1.5} />,
  User: <User size={16} strokeWidth={1.5} />,
  Mail: <Mail size={16} strokeWidth={1.5} />,
  Layers: <Layers size={16} strokeWidth={1.5} />,
  Award: <Award size={16} strokeWidth={1.5} />,
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const ctaText = "Hire Me";

  useEffect(() => {
    let last = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      // Hide while scrolling down, show again as soon as the visitor scrolls up
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 240);
        last = y;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled ? "bg-[#12110F]/90 backdrop-blur-md border-b border-[rgba(245,241,234,0.06)]" : "bg-transparent",
        hidden && !isOpen ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-[var(--nav-height)]">
        {/* Logo / Name */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[#F5F1EA] hover:text-[#E8734A] transition-colors"
        >
          <span className="font-mono text-sm font-bold tracking-tight whitespace-nowrap">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="relative isolate hidden lg:flex items-center gap-0.5 bg-[#1C1A17] border border-[rgba(245,241,234,0.08)] rounded-full px-2 py-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative flex items-center gap-1.5 px-2 xl:px-2.5 py-1.5 rounded-full text-[13px] xl:text-sm whitespace-nowrap transition-colors duration-200",
                  isActive
                    ? "text-[#E8734A]"
                    : "text-[#A39C90] hover:text-[#F5F1EA] hover:bg-[#252220]/50"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[#252220] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {iconMap[link.icon]}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-3">
        <button
          onClick={openCommandPalette}
          aria-label="Search (Ctrl+K)"
          title="Search (Ctrl+K)"
          className="flex items-center gap-1.5 text-[#A39C90] hover:text-[#F5F1EA] transition-colors"
        >
          <Search size={15} strokeWidth={1.5} />
        </button>
        <a
          href={siteConfig.cvPath}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume (PDF)"
          title="Resume (PDF)"
          className="flex items-center gap-1.5 text-sm whitespace-nowrap text-[#A39C90] hover:text-[#F5F1EA] transition-colors"
        >
          <FileText size={15} strokeWidth={1.5} />
          <span className="hidden xl:inline">Resume</span>
        </a>
        <Magnetic strength={0.25}>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 whitespace-nowrap bg-[#E8734A] hover:bg-[#E8734A]/90 text-[#12110F] px-3.5 xl:px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
        >
          <Sparkles size={14} strokeWidth={1.5} />
          <span>{ctaText}</span>
        </Link>
        </Magnetic>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#F5F1EA] hover:text-[#E8734A] transition-colors"
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
            className="lg:hidden border-t border-[rgba(245,241,234,0.08)] bg-[#1C1A17]"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div key={link.href} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i, duration: 0.3 }}>
                  <Link
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
                  </motion.div>
                );
              })}
              <a
                href={siteConfig.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-[#A39C90] hover:text-[#F5F1EA] hover:bg-[#252220]/50"
              >
                <FileText size={16} strokeWidth={1.5} />
                <span>Resume (PDF)</span>
              </a>
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