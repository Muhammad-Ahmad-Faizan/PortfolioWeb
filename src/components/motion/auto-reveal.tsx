"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
 * Site-wide scroll reveal. One IntersectionObserver watches every content block in <main> and the footer,
 * so every page animates without wrapping each element by hand.
 * - Only transform/opacity/clip-path are animated (GPU-friendly, no layout work).
 * - Blocks already on screen when the page loads are left alone (the page transition handles them).
 * - Anything inside [data-no-reveal], or with its own inline animation styles, is skipped.
 * - Classes are removed after the animation so hover effects keep working.
 * - Does nothing when the visitor prefers reduced motion.
 */
const SELECTOR = [
  "[data-reveal]",
  "h1", "h2", "h3",
  "p",
  "ul > li", "ol > li",
  "pre", "blockquote", "table", "form",
  "[class*='rounded-lg']", "[class*='rounded-xl']", "[class*='rounded-2xl']",
].join(",");

export default function AutoReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const roots = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    const seen = new WeakSet<Element>();

    const done = (el: HTMLElement) => {
      const clean = () => {
        el.classList.remove("ar", "ar-in", "ar-h", "ar-wipe", "ar-card");
        el.style.removeProperty("--ar-d");
      };
      el.addEventListener("transitionend", clean, { once: true });
      setTimeout(clean, 1600);
    };

    // Clipped elements (headings, diagrams) are watched through their parent, because a fully
    // clipped element never reports as visible.
    const watchers = new Map<Element, HTMLElement[]>();
    let n = 0;
    const reveal = (el: HTMLElement) => {
      if (!el.classList.contains("ar") || el.classList.contains("ar-in")) return;
      el.style.setProperty("--ar-d", `${Math.min(n++, 6) * 70}ms`);
      requestAnimationFrame(() => el.classList.add("ar-in"));
      done(el);
    };
    const io = new IntersectionObserver(
      (entries) => {
        n = 0;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.unobserve(e.target);
          (watchers.get(e.target) || []).forEach(reveal);
          watchers.delete(e.target);
        }
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.01 }
    );
    const watch = (el: HTMLElement, via: Element) => {
      const list = watchers.get(via);
      if (list) list.push(el);
      else { watchers.set(via, [el]); io.observe(via); }
    };

    // Safety net: at the bottom of the page, show anything still waiting
    const onScroll = () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 60) {
        watchers.forEach((els) => els.forEach(reveal));
        watchers.clear();
        io.disconnect();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const animatedAncestor = (el: HTMLElement) => {
      for (let p = el.parentElement; p && p.tagName !== "MAIN" && p.tagName !== "FOOTER"; p = p.parentElement) {
        if (p.hasAttribute("data-page")) return false;
        if (p.classList.contains("ar") || p.hasAttribute("data-no-reveal")) return true;
      if (/animate-|marquee/.test(typeof p.className === "string" ? p.className : "")) return true;
        if (/opacity|transform/.test(p.getAttribute("style") || "")) return true;
      }
      return false;
    };

    const consider = (el: HTMLElement) => {
      if (seen.has(el)) return;
      seen.add(el);
      if (el.hasAttribute("data-no-reveal")) return;
      if (/opacity|transform/.test(el.getAttribute("style") || "")) return;
      if (animatedAncestor(el)) return; // parent already animates (cards move as one unit)
      const cs = getComputedStyle(el);
      if (cs.position === "fixed" || cs.position === "sticky" || cs.display === "none") return;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      if (r.top < window.innerHeight * 0.92) return; // already visible on load
      const kind = el.dataset.reveal;
      el.classList.add("ar");
      if (kind === "wipe") el.classList.add("ar-wipe");
      else if (/^H[1-3]$/.test(el.tagName) || kind === "heading") el.classList.add("ar-h");
      else if (kind === "card" || /rounded-(lg|xl|2xl)/.test(typeof el.className === "string" ? el.className : "")) el.classList.add("ar-card");
      const clipped = el.classList.contains("ar-h") || el.classList.contains("ar-wipe");
      watch(el, clipped && el.parentElement ? el.parentElement : el);
    };

    const scan = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>(SELECTOR).forEach(consider);
    };

    // Wait a frame so the page transition has positioned everything
    const raf = requestAnimationFrame(() => roots.forEach(scan));

    // Pick up content that appears later (filters, tabs)
    const mo = new MutationObserver((muts) => {
      for (const m of muts)
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches(SELECTOR)) consider(node);
          scan(node);
        });
    });
    roots.forEach((r) => mo.observe(r, { childList: true, subtree: true }));

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return null;
}
