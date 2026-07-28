"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Users,
  ShieldAlert,
  Scale,
  Building,
  Handshake,
  Briefcase,
  Copyright,
  X,
  ArrowRight,
} from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

interface PracticeItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  longDesc: string;
  details: string[];
}

const practices: PracticeItem[] = [
  {
    id: "corporate",
    icon: <Building2 size={22} />,
    title: "Corporate Law",
    shortDesc: "Cross-border mergers, venture structuring, governance protocols, and securities compliance.",
    longDesc: "Our corporate division counsels multinational enterprises, financial institutions, and fast-growth tech companies. We manage high-complexity transactions, cross-border business structuring, joint ventures, public-private offerings, and direct-to-board advisory.",
    details: [
      "Mergers & Acquisitions (M&A)",
      "Venture Capital & IPO readiness",
      "Corporate Governance & Ethics Compliance",
      "Regulatory Liaison & Restructuring",
    ],
  },
  {
    id: "family",
    icon: <Users size={22} />,
    title: "Family Law",
    shortDesc: "High-asset divorce proceedings, complex trust partitions, and child guardianship agreements.",
    longDesc: "We provide discrete, compassionate, and highly professional family counseling. We specialize in high-net-worth separation negotiations, pre-nuptial assets protection plans, multi-generational trust partitions, and international custody litigation.",
    details: [
      "Asset Partition & Pre-Nuptial Agreements",
      "High-Value Marital Dissolution",
      "Multi-Generational Estates Planning",
      "Custody Arbitration & Mediation",
    ],
  },
  {
    id: "criminal",
    icon: <ShieldAlert size={22} />,
    title: "Criminal Defense",
    shortDesc: "White-collar defense, securities investigations, and state and federal trials representation.",
    longDesc: "Representing key corporate officers and prominent individuals facing regulatory investigations and criminal charges. We field a powerful team of veteran trial attorneys, former state prosecutors, and financial forensic experts.",
    details: [
      "White-Collar Crime Defense",
      "SEC & Regulatory Investigations",
      "State & Federal Jury Trials",
      "Appellate Representation & Civil Rights",
    ],
  },
  {
    id: "civil",
    icon: <Scale size={22} />,
    title: "Civil Litigation",
    shortDesc: "Complex commercial disputes, breach of contract claims, and appellate litigation.",
    longDesc: "We represent corporate plaintiffs and defendants in complex civil actions before state, federal, and international courts. Our approach focuses on aggressive advocacy, custom trial preparation, and finding favorable resolutions.",
    details: [
      "Multi-Party Commercial Litigations",
      "Breach of Contract & Tort Claims",
      "Class Action Defense",
      "Arbitration, Mediation & Alternative Discretion",
    ],
  },
  {
    id: "realestate",
    icon: <Building size={22} />,
    title: "Real Estate Law",
    shortDesc: "Commercial acquisitions, zoning approvals, zoning disputes, and leasing strategies.",
    longDesc: "Assisting developers, real estate investment groups, and corporate occupants in the procurement, development, and financing of real estate assets. We draft agreements, resolve land claims, and streamline zoning permits.",
    details: [
      "Commercial Land Acquisitions & Finance",
      "Zoning, Permits & Environmental Clearances",
      "Joint Venture Projects & Structuring",
      "Tenant-Landlord Dispute Resolution",
    ],
  },
  {
    id: "business",
    icon: <Handshake size={22} />,
    title: "Business Law",
    shortDesc: "Commercial contract negotiations, partnership agreements, and compliance management.",
    longDesc: "Helping emerging startups and enterprise clients maintain a sound legal footing. From forming entities to structuring shareholder equity, we provide counsel on partnership covenants, vendor negotiations, and tax optimizations.",
    details: [
      "Company Formations & Shareholder Agreements",
      "Contractual Structuring & Vendor Pacts",
      "Tax Optimizations & Strategic Growth",
      "Risk Assessments & Shield Advisory",
    ],
  },
  {
    id: "employment",
    icon: <Briefcase size={22} />,
    title: "Employment Law",
    shortDesc: "Executive compensation, employment disputes, and wage and hour compliance.",
    longDesc: "Representing employers and executive leadership in modern labor and employment affairs. We help draft executive packages, employment manuals, non-disclosure protocols, and represent leadership in regulatory compliance.",
    details: [
      "Executive Compensation Packages & Exit Deals",
      "Title VII & Anti-Harassment Audits",
      "Wage-and-Hour Class Action Defense",
      "Trade Secrets Protection & Non-Competes",
    ],
  },
  {
    id: "ip",
    icon: <Copyright size={22} />,
    title: "Intellectual Property",
    shortDesc: "Patent portfolios, global trademark registration, copyright protection, and licensing.",
    longDesc: "We safeguard critical brand names, inventions, and proprietary software in the global market. Our IP attorneys structure international licensing agreements, defend patents in court, and manage global registration portfolios.",
    details: [
      "Patent Procurement & Prosecution",
      "Global Trademark Portfolio Enforcement",
      "Software Licensing & IP Monetization",
      "Trade Secret Litigation & Data Auditing",
    ],
  },
];

export const Practice: React.FC = () => {
  const [selectedPractice, setSelectedPractice] = useState<PracticeItem | null>(null);

  const handleModalClose = () => setSelectedPractice(null);

  const handleBookShortcut = () => {
    setSelectedPractice(null);
    const element = document.getElementById("booking");
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
    <section id="practices" className="relative py-32 sm:py-40 bg-bg-accent/40 border-t border-white/[0.04]">
      <div className="absolute top-1/2 left-0 w-[30%] h-[30%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.02),transparent_70%)] pointer-events-none" />
      
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
            Sectors of Counsel
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight mb-8"
          >
            Tactical Advisory. <span className="text-gold-metallic">Defending Complex Assets.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl"
          >
            We focus exclusively on high-complexity sectors where detailed domain experience and direct, senior advocacy are crucial to success.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {practices.map((practice, index) => (
            <Card
              key={practice.id}
              delay={0.05 * index}
              className="flex flex-col h-full justify-between border-white/[0.06] bg-bg-card rounded-lg"
            >
              <div className="text-left">
                {/* Minimal Low-Opacity Icon */}
                <div className="mb-6 text-primary/70">
                  {practice.icon}
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-white font-medium mb-3">
                  {practice.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-light mb-8">
                  {practice.shortDesc}
                </p>
              </div>
              <Button
                variant="text"
                className="group w-fit justify-start pl-0 hover:text-primary transition-colors text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary border-none"
                onClick={() => setSelectedPractice(practice)}
                icon={<ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-500" />}
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedPractice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleModalClose}
              className="fixed inset-0 bg-bg-dark/85 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-xl bg-bg-card border border-white/[0.08] p-8 sm:p-10 overflow-hidden shadow-2xl z-10 rounded-lg text-left"
            >
              {/* Close Button */}
              <button
                onClick={handleModalClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 focus:outline-none cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary">
                  {selectedPractice.icon}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-wide">
                  {selectedPractice.title}
                </h3>
              </div>

              <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                {selectedPractice.longDesc}
              </p>

              <h4 className="font-sans text-[10px] font-semibold text-primary uppercase tracking-widest mb-3">
                Key Services:
              </h4>

              <ul className="space-y-2.5 mb-8">
                {selectedPractice.details.map((detail, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400 font-sans font-light">
                    <span className="h-1 w-1 bg-primary rounded-full flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <Button variant="primary" size="sm" className="flex-1 sm:flex-initial" onClick={handleBookShortcut}>
                  Book Consultation
                </Button>
                <Button variant="outline" size="sm" className="flex-1 sm:flex-initial" onClick={handleModalClose}>
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
