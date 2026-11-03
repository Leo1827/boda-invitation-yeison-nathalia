"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setMounted(true);
    });

    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2200);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted || !loading) return null;

  return createPortal(
    <div
      className="
        fixed
        inset-0
        isolate
        z-[999999]
        bg-[#F5F2ED]
        flex
        flex-col
        items-center
        justify-center
      "
    >
      {/* Loader */}
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border border-[#B47C54]/20" />

        <div className="absolute inset-0 rounded-full border-t border-[#B47C54] animate-spin" />
      </div>

      {/* Texto */}
      <div className="mt-8 text-center">
        <p className="text-[#B47C54] uppercase tracking-[0.4em] text-xs mb-3">
          Nuestra boda
        </p>

        <h1 className="text-4xl md:text-5xl italic text-[#4A4A4A] font-[family-name:var(--font-cormorant)]">
          Yeison & Nathalia
        </h1>
      </div>

      <div className="mt-8 w-24 h-[1px] bg-[#B47C54]/30" />
    </div>,
    document.body
  );
}