"use client";

import { useEffect, useRef } from "react";

// Soft orange light that follows the mouse across the whole site (desktop only, GPU transform).
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    let x = window.innerWidth / 2, y = window.innerHeight / 3, cx = x, cy = y, id = 0, running = false;
    const tick = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      el.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
      if (Math.abs(x - cx) + Math.abs(y - cy) > 0.5) id = requestAnimationFrame(tick);
      else running = false;
    };
    const move = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY;
      el.style.opacity = "1";
      if (!running) { running = true; id = requestAnimationFrame(tick); }
    };
    const leave = () => { el.style.opacity = "0"; };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-500 hidden md:block"
      style={{ background: "radial-gradient(circle, rgba(232,115,74,0.07), transparent 60%)", willChange: "transform" }}
    />
  );
}
