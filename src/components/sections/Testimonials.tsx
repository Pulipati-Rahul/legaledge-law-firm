"use client";

import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "../ui/Carousel";

const reviews = [
  {
    name: "Alastair Sterling",
    role: "General Counsel",
    company: "FinTech Global Group",
    rating: 5,
    content: "LegalEdge managed our Series C funding round and global regulatory filings with absolute mastery. Their round-the-clock advisory and depth of corporate governance expertise were key to our successful closing.",
  },
  {
    name: "Victoria Davenport",
    role: "CEO & Founder",
    company: "Vanguard Property Developments",
    rating: 5,
    content: "When our landmark waterfront development project was threatened by zoning injunctions, the LegalEdge real estate litigation team obtained emergency court clearances in under 24 hours. Simply outstanding under pressure.",
  },
  {
    name: "Julian Vance",
    role: "Chairman",
    company: "Sterling Asset Management",
    rating: 5,
    content: "Evelyn Sterling and her white-collar team delivered a masterclass defense in federal courts during a complex SEC auditing proceeding. Her litigation posture and preparation are formidable.",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-32 sm:py-40 bg-bg-accent/40 border-t border-white/[0.04] overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-left max-w-3xl mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4 block"
          >
            Client Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight mb-8"
          >
            Earning Trust at the <br />
            <span className="text-gold-metallic">Highest Tiers of Industry.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl"
          >
            We align closely with boardrooms, corporate officers, and general counsels. Read their direct reviews of our representation:
          </motion.p>
        </div>

        {/* Carousel Wrapper */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-y border-white/[0.06] py-10 bg-bg-card/45 backdrop-blur-sm rounded-lg"
        >
          <Carousel items={reviews} />
        </motion.div>

      </div>
    </section>
  );
};
