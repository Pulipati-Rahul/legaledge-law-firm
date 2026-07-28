"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ResultItem {
  year: string;
  value: number;
  prefix?: string;
  suffix: string;
  title: string;
  caseType: string;
  desc: string;
}

const results: ResultItem[] = [
  {
    year: "2025 Q4",
    value: 350,
    prefix: "$",
    suffix: "M+",
    title: "Arbitration Verdict Recovered",
    caseType: "Commercial Litigation",
    desc: "Successfully recovered for a tech manufacturing corporation in a multi-state breach of contract dispute.",
  },
  {
    year: "2025 Q2",
    value: 99,
    suffix: ".4%",
    title: "Federal Trials Victory Ratio",
    caseType: "Securities Defense",
    desc: "A stellar records history of dismissals and favorable verdicts in high-complexity federal proceedings.",
  },
  {
    year: "2024 Q3",
    value: 45,
    prefix: "$",
    suffix: "M",
    title: "Anti-Trust Settlement & Licensing",
    caseType: "Intellectual Property Dispute",
    desc: "Secured maximum compensation and royalty preservation agreements for a digital media patent holder.",
  },
  {
    year: "2023 Q1",
    value: 24,
    suffix: " Hrs",
    title: "Emergency Real Estate Injunction",
    caseType: "Property Development",
    desc: "Obtained emergency halt to unlawful land acquisitions, saving a client's $120M development project.",
  },
];

const ResultCounter: React.FC<{ value: number; prefix?: string; suffix: string }> = ({
  value,
  prefix = "",
  suffix,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress);

      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-serif text-2xl sm:text-3xl font-semibold text-primary">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const CaseResults: React.FC = () => {
  return (
    <section id="results" className="relative py-32 sm:py-40 bg-bg-dark border-t border-white/[0.04]">
      <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-left mb-20 sm:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4 block"
          >
            Track Record
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight mb-8"
          >
            Proven Courtroom Records. <br />
            <span className="text-gold-metallic">Dossier of Success.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl"
          >
            Our historical outcomes represent structural precedents and significant assets defended across corporate arbitrations and jury trials.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/[0.08] pl-6 sm:pl-10 space-y-12">
          {results.map((res, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * index }}
              className="relative text-left"
            >
              {/* Timeline Bullet */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 bg-bg-dark border-2 border-primary rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              </div>

              {/* Timeline Card */}
              <div className="bg-bg-card border border-white/[0.06] rounded-lg p-6 sm:p-8 hover:border-white/[0.12] transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/[0.04]">
                  <div>
                    <span className="font-sans text-[9px] uppercase tracking-widest text-primary border border-primary/25 px-2 py-0.5 rounded-none mr-3">
                      {res.caseType}
                    </span>
                    <span className="font-sans text-xs text-slate-500 font-medium">
                      {res.year}
                    </span>
                  </div>
                  <div>
                    <ResultCounter value={res.value} prefix={res.prefix} suffix={res.suffix} />
                  </div>
                </div>

                <h3 className="font-serif text-lg sm:text-xl text-white font-medium mb-2">
                  {res.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {res.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          className="text-left font-sans text-[10px] text-slate-500 tracking-wider mt-12 pl-6 sm:pl-10"
        >
          *Disclaimer: Prior results do not guarantee a similar outcome. Every matter depends on factual and legal conditions unique to the case.
        </motion.p>

      </div>
    </section>
  );
};
