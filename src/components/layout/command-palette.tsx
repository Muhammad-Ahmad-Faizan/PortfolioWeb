"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, CornerDownLeft, FileText, FolderKanban, NotebookPen, Mail, Download, Link2 } from "lucide-react";
import { navLinks } from "@/content/nav-links";
import { projects } from "@/content/projects";
import { notes } from "@/content/notes";
import { siteConfig } from "@/content/site-config";

type Item = { id: string; label: string; group: string; hint?: string; run: () => void; icon: React.ReactNode };

export function openCommandPalette() {
  window.dispatchEvent(new Event("open-command-palette"));
}

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  const items: Item[] = useMemo(() => {
    const go = (href: string) => () => {
      router.push(href);
      setOpen(false);
    };
    return [
      ...[...navLinks, { href: "/contact", label: "Contact", icon: "" }].map((l) => ({
        id: `page-${l.href}`,
        label: l.label,
        group: "Pages",
        run: go(l.href),
        icon: <FileText size={15} strokeWidth={1.5} />,
      })),
      ...projects.map((p) => ({
        id: `project-${p.slug}`,
        label: p.title,
        hint: p.category,
        group: "Projects",
        run: go(`/projects/${p.slug}`),
        icon: <FolderKanban size={15} strokeWidth={1.5} />,
      })),
      ...notes.map((n) => ({
        id: `note-${n.slug}`,
        label: n.title,
        group: "Notes",
        run: go(`/notes/${n.slug}`),
        icon: <NotebookPen size={15} strokeWidth={1.5} />,
      })),
      {
        id: "copy-email",
        label: "Copy email address",
        hint: siteConfig.email,
        group: "Actions",
        run: () => {
          navigator.clipboard?.writeText(siteConfig.email);
          setOpen(false);
        },
        icon: <Mail size={15} strokeWidth={1.5} />,
      },
      {
        id: "cv",
        label: "Open resume (PDF)",
        group: "Actions",
        run: () => {
          window.open(siteConfig.cvPath, "_blank");
          setOpen(false);
        },
        icon: <Download size={15} strokeWidth={1.5} />,
      },
      {
        id: "github",
        label: "GitHub profile",
        group: "Actions",
        run: () => window.open(siteConfig.github, "_blank"),
        icon: <Link2 size={15} strokeWidth={1.5} />,
      },
      {
        id: "linkedin",
        label: "LinkedIn profile",
        group: "Actions",
        run: () => window.open(siteConfig.linkedin, "_blank"),
        icon: <Link2 size={15} strokeWidth={1.5} />,
      },
      {
        id: "x",
        label: "X profile",
        group: "Actions",
        run: () => window.open(siteConfig.x, "_blank"),
        icon: <Link2 size={15} strokeWidth={1.5} />,
      },
    ];
  }, [router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => `${i.label} ${i.hint ?? ""} ${i.group}`.toLowerCase().includes(q));
  }, [items, query]);

  useEffect(() => setActive(0), [query]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      filtered[active]?.run();
    }
  };

  let lastGroup = "";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[12vh] px-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Search"
            className="w-full max-w-lg bg-[#17150F] border border-[rgba(245,241,234,0.12)] rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 border-b border-[rgba(245,241,234,0.08)]">
              <Search size={16} className="text-[#A39C90]" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                placeholder="Search pages, projects, notes…"
                className="flex-1 bg-transparent py-3.5 text-sm text-[#F5F1EA] placeholder-[#A39C90] focus:outline-none focus-visible:outline-none"
              />
              <kbd className="text-[10px] font-mono text-[#A39C90] border border-[rgba(245,241,234,0.12)] rounded px-1.5 py-0.5">ESC</kbd>
            </div>
            <ul className="max-h-[50vh] overflow-y-auto py-2">
              {filtered.length === 0 && <li className="px-4 py-6 text-center text-sm text-[#A39C90]">No results</li>}
              {filtered.map((item, i) => {
                const header = item.group !== lastGroup ? item.group : null;
                lastGroup = item.group;
                return (
                  <li key={item.id}>
                    {header && (
                      <div className="px-4 pt-2 pb-1 text-[10px] font-mono uppercase tracking-wider text-[#5FA8A0]">{header}</div>
                    )}
                    <button
                      onMouseEnter={() => setActive(i)}
                      onClick={item.run}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-left text-sm transition-colors ${
                        i === active ? "bg-[#252220] text-[#F5F1EA]" : "text-[#A39C90]"
                      }`}
                    >
                      <span className={i === active ? "text-[#E8734A]" : ""}>{item.icon}</span>
                      <span className="flex-1 truncate">{item.label}</span>
                      {item.hint && <span className="text-xs font-mono text-[#A39C90] truncate max-w-[40%]">{item.hint}</span>}
                      {i === active && <CornerDownLeft size={13} className="text-[#A39C90]" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
