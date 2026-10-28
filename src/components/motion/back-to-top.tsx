"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 900);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const up = () => {
    const l = (window as unknown as { __lenis?: { scrollTo: (t: number) => void } }).__lenis;
    if (l) l.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={up}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#1C1A17]/90 backdrop-blur border border-[rgba(245,241,234,0.12)] text-[#F5F1EA] hover:text-[#E8734A] hover:border-[#E8734A]/50 flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]"
        >
          <ArrowUp size={18} strokeWidth={1.75} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
