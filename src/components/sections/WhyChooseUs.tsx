"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  Users2,
  Clock,
  Coins,
  Activity,
} from "lucide-react";
import { Card } from "../ui/Card";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const features: FeatureItem[] = [
  {
    icon: <Users2 size={22} className="text-primary/80" />,
    title: "Experienced Attorneys",
    desc: "Every case is handled directly by senior partners with at least 15+ years of active courtroom trial advocacy.",
  },
  {
    icon: <Coins size={22} className="text-primary/80" />,
    title: "Transparent Fees",
    desc: "No hidden charges. We utilize structured billing arrangements and provide clients with fully audited monthly statements.",
  },
  {
    icon: <ShieldCheck size={22} className="text-primary/80" />,
    title: "Confidential Consultations",
    desc: "Your consultations are fully secure, protected by rigorous attorney-client privilege and absolute network secrecy.",
  },
  {
    icon: <Clock size={22} className="text-primary/80" />,
    title: "Fast Case Handling",
    desc: "Speed is a tactical advantage. Our agile legal response cells initiate actions, briefs, and filings immediately.",
  },
  {
    icon: <Scale size={22} className="text-primary/80" />,
    title: "Proven Results",
    desc: "Over $450 Million recovered and a historical 98% rate of client-satisfactory dismissals and judgements.",
  },
  {
    icon: <Activity size={22} className="text-primary/80" />,
    title: "24/7 Incident Support",
    desc: "Crisis situations do not wait for business hours. Clients receive dedicated numbers for urgent, round-the-clock defense.",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="relative py-32 sm:py-40 bg-bg-dark border-t border-white/[0.04]">
      <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-left max-w-3xl mb-20 sm:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4 block"
          >
            Standards of Practice
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight mb-8"
          >
            A Standard of Representation <br className="hidden sm:inline" />
            <span className="text-gold-metallic">That Defies the Ordinary.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl"
          >
            We merge institutional legal excellence with a highly personalized, client-centric experience. Here is how we separate our practice from common corporate structures:
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              delay={0.05 * index}
              className="flex flex-col text-left justify-start group border-white/[0.06] bg-bg-card rounded-lg"
            >
              <div>
                {/* Subtle Icon */}
                <div className="mb-5 text-primary/80">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-white font-medium mb-3">
                  {feature.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
