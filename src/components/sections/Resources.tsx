"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

interface Article {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
}

const articles: Article[] = [
  {
    category: "Corporate & M&A",
    date: "July 24, 2026",
    title: "Navigating Cross-Border Mergers: Evolving Regulatory Clearances",
    excerpt: "An analysis of newly enacted multi-agency antitrust thresholds affecting international acquisitions and cross-border tech joint ventures.",
    readTime: "8 min read",
  },
  {
    category: "Intellectual Property",
    date: "June 18, 2026",
    title: "Securing Generative AI Pipelines: Patents vs. Trade Secrets",
    excerpt: "How tech leaders can structure patent protection programs for unique machine learning architectures while shielding proprietary model weights.",
    readTime: "6 min read",
  },
  {
    category: "Real Estate & Land Use",
    date: "May 29, 2026",
    title: "Commercial Property Zoning Disputes: Tactical Emergency Injunctions",
    excerpt: "Critical litigation routes for developers seeking to halt wrongful zoning injunctions and project suspension mandates by municipal boards.",
    readTime: "11 min read",
  },
];

export const Resources: React.FC = () => {
  return (
    <section id="resources" className="relative py-32 sm:py-40 bg-bg-dark border-t border-white/[0.04]">
      <div className="absolute top-1/2 left-0 w-[30%] h-[30%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header containing text and a CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl text-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4 block"
            >
              Legal Intelligence
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight mb-8"
            >
              The LegalEdge Insights. <br />
              <span className="text-gold-metallic">Strategic Briefings & Analysis.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl"
            >
              We analyze global transaction codes, courtroom developments, and emerging regulatory protocols to provide our clients with actionable compliance insights.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-auto"
          >
            <Button
              variant="outline"
              size="sm"
              icon={<BookOpen size={14} />}
              className="w-full md:w-auto py-3 px-5 text-xs font-sans tracking-wider"
            >
              View All Intelligence
            </Button>
          </motion.div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              delay={0.05 * index}
              className="flex flex-col text-left justify-between group border-white/[0.06] bg-bg-card rounded-lg"
            >
              <div>
                {/* Meta details */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-sans text-[8px] uppercase tracking-widest text-primary border border-primary/20 px-2 py-0.5 rounded-none">
                    {article.category}
                  </span>
                  <span className="font-sans text-[10px] text-slate-500">
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl text-white font-medium mb-3 group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-light mb-8">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom detail / CTA */}
              <div className="flex justify-between items-center pt-5 border-t border-white/[0.04] mt-auto">
                <span className="font-sans text-[9px] tracking-wider text-slate-500 uppercase">
                  {article.readTime}
                </span>
                
                <a
                  href="#resources"
                  className="flex items-center gap-1 font-sans text-xs uppercase tracking-wider text-primary group-hover:text-gold-hover transition-colors font-semibold"
                >
                  Read Briefing
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-500" />
                </a>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
