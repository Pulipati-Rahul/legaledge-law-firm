"use client";

import React from "react";
import { Phone } from "lucide-react";

export const FloatingCall: React.FC = () => {
  return (
    <a
      href="tel:+18005553433"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 bg-bg-accent/85 backdrop-blur-md border border-white/[0.08] text-primary px-4 py-3 hover:text-bg-dark hover:bg-primary transition-all duration-300 shadow-lg group rounded-md"
      aria-label="Call Emergency Legal Assistance"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
      </span>
      <Phone size={14} />
      <span className="hidden sm:inline font-sans text-[10px] tracking-wider uppercase font-semibold">
        24/7 Crisis Line
      </span>
    </a>
  );
};
