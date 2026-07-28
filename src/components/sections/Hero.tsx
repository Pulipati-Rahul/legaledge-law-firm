"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "../ui/Button";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { target: 25, suffix: "+", label: "Years of Counsel" },
  { target: 5000, suffix: "+", label: "Successful Cases" },
  { target: 98, suffix: "%", label: "Client Satisfaction" },
  { target: 40, suffix: "+", label: "Legal Authorities" },
];

const Counter: React.FC<{ target: number; suffix: string }> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const duration = 2500; // slower transition

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress);
      
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-primary">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-bg-dark pt-36 pb-24"
    >
      {/* Background Image with dimmed deep navy overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/office.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/98 via-bg-dark/90 to-bg-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_80%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-sans text-xs sm:text-sm tracking-[0.4em] uppercase text-primary font-medium mb-8"
        >
          International Arbitration & Global Corporate Counsel
        </motion.span>

        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-tight font-medium"
          >
            Justice. Integrity. <span className="text-gold-metallic">Results.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl font-sans text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed mb-14 tracking-wide"
        >
          For decades, LegalEdge has served as a trusted pillar of advocacy and tactical advisory. We represent corporate institutions, sovereign entities, and private clients in high-stakes litigations and cross-border operations.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-28 w-full sm:w-auto"
        >
          <Button
            variant="primary"
            onClick={() => handleScrollTo("booking")}
            className="w-full sm:w-auto px-8"
          >
            Schedule Consultation
          </Button>
          <Button
            variant="outline"
            onClick={() => handleScrollTo("practices")}
            className="w-full sm:w-auto px-8"
          >
            Practice Areas
          </Button>
        </motion.div>

        {/* Statistics Grid (Thinned and minimized) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 w-full max-w-5xl border-t border-white/[0.06] pt-14"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <Counter target={stat.target} suffix={stat.suffix} />
              <span className="font-sans text-[9px] sm:text-xs uppercase tracking-widest text-slate-400 mt-3 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-10 w-6 border border-white/[0.15] rounded-full flex justify-center pt-2 cursor-pointer"
          onClick={() => handleScrollTo("about")}
        >
          <div className="h-1.5 w-1 bg-primary/60 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
