"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ValueItem {
  number: string;
  title: string;
  desc: string;
}

const values: ValueItem[] = [
  {
    number: "I.",
    title: "Absolute Discretion",
    desc: "We guard our clients' confidentiality with unmatched integrity and secure representation protocols.",
  },
  {
    number: "II.",
    title: "Uncompromising Excellence",
    desc: "Every contract written, case argued, or dispute mediated is treated with absolute intellectual rigor.",
  },
  {
    number: "III.",
    title: "Strategic Ingenuity",
    desc: "We look beyond standard legal frameworks to engineer innovative and winning maneuvers.",
  },
  {
    number: "IV.",
    title: "Intellectual Leadership",
    desc: "Our attorneys lecture, write guidelines, and shape precedents in courts and forums globally.",
  },
];

const awards = [
  { year: "2025", title: "National Tier 1 Corporate Law Firm", organization: "US Legal Awards" },
  { year: "2024", title: "Litigation Excellence of the Year", organization: "Global Law Network" },
  { year: "2023", title: "Outstanding Defender Recognition", organization: "Chambers & Partners" },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 sm:py-40 bg-bg-dark overflow-hidden border-t border-white/[0.04]">
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.02),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24 items-start">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-medium mb-5"
            >
              The Firm Overview
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight mb-10"
            >
              Shaping Legal Precedents. <br />
              <span className="text-gold-metallic">Defending Sovereign Interests.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed tracking-wide mb-6 font-light"
            >
              Founded in 1999, LegalEdge Law Firm has established a stellar international reputation for elite litigation representation and highly tactical transactional counsel. We cater to multinational companies, prominent technology creators, and private clients facing high-stakes legal situations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed tracking-wide mb-14 font-light border-l border-primary/20 pl-6"
            >
              Our philosophy bridges the gap between historical diligence and cutting-edge legal methodology. Every partner in our firm brings extensive domain experience, ensuring you receive direct, high-level representation.
            </motion.p>

            {/* Executive Core Values Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 pt-4 border-t border-white/[0.06]">
              {values.map((val, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex flex-col"
                >
                  <div className="font-serif text-sm text-primary font-medium mb-2">{val.number} {val.title}</div>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Visuals & Executive Report */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            {/* Elegant Image Frame with rounded borders */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] sm:aspect-square w-full border border-white/[0.08] p-3 rounded-lg overflow-hidden bg-bg-accent/40"
            >
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  src="/images/office.jpg"
                  alt="LegalEdge Head Office Lobby"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Executive Report Shelf */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-bg-accent border border-white/[0.06] rounded-lg p-6 sm:p-8 text-left"
            >
              <h3 className="font-serif text-lg font-medium text-white mb-6 border-b border-white/[0.06] pb-4 uppercase tracking-wider">
                Distinguished Credentials
              </h3>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div key={index} className="flex justify-between items-start gap-4 border-b border-white/[0.04] last:border-0 pb-4 last:pb-0">
                    <div>
                      <h4 className="font-sans text-[10px] font-medium text-primary uppercase tracking-wider">
                        {award.year} – {award.organization}
                      </h4>
                      <p className="font-serif text-sm text-slate-200 mt-1 font-medium">
                        {award.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
