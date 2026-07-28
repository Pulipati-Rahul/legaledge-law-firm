"use client";

import React from "react";
import { motion } from "framer-motion";
import { Accordion } from "../ui/Accordion";

const faqItems = [
  {
    question: "What is your standard billing and retainer structure?",
    answer: "We offer customized billing arrangements suited to each client's specific engagement profile. Typically, we work with a structured initial retainer drawdown model based on estimated partner and associate hourly allocations. For institutional transactions and ongoing corporate counsel, we offer pre-negotiated monthly advisory packages. We provide transparent, fully line-itemized statements monthly.",
  },
  {
    question: "How does the firm evaluate patent or trademark defensibility?",
    answer: "Our IP division initiates a thorough, multi-step validity check. We run prior-art searches across global patent registers, academic papers, and active market products to audit priority rights. Once we determine the defensibility profile, we draft a tactical protection report that details the probability of enforcement success.",
  },
  {
    question: "What immediate actions should I take during a surprise regulatory audit?",
    answer: "If regulatory agents (such as from the SEC or federal departments) arrive at your offices, you should request their credentials, state that your company requires counsel present during audits, and immediately contact our emergency legal line. Avoid answering substantive inquiries or turning over documents until our counsel is present.",
  },
  {
    question: "Can LegalEdge assist with international compliance, such as European GDPR?",
    answer: "Yes. Our cross-border practice handles international compliance protocols, including EU GDPR, UK Data Protection Acts, and Swiss federal regulations. We audit data flows, draft privacy frameworks, negotiate processor contracts, and defend firms before data protection commissions.",
  },
  {
    question: "How long does a standard corporate acquisition (M&A) review take?",
    answer: "A standard M&A legal audit takes anywhere from 3 to 8 weeks depending on the scale of target assets, regulatory filings (such as HSR filing clearances), and the depth of required due diligence. We deploy dedicated sprint teams to expedite reviews when tight transaction deadlines apply.",
  },
  {
    question: "How do you protect trade secrets during executive employee offboarding?",
    answer: "We design robust executive offboarding protocols. This includes conducting exit audits of corporate devices, executing formal reminders of ongoing restrictive covenants, reviewing non-compete/non-solicit legality in target jurisdictions, and drafting tight separation agreements that secure proprietary codes and corporate IP.",
  },
  {
    question: "What legal recourse do we have if a contractor breaches a venture financing pact?",
    answer: "Recourse begins with a detailed breach audit to assess material damages. We review the dispute resolution terms—specifically whether the contract mandates binding AAA/JAMS arbitration or allows direct filing in court. Depending on findings, we initiate rapid negotiation or file for immediate specific performance/damages.",
  },
  {
    question: "How do you handle real estate property land disputes or halted developments?",
    answer: "We file immediate complaints and motion for emergency temporary restraining orders (TROs) to halt unlawful city board actions or third-party interference. We then represent the developer in expedited hearings to obtain permanent injunctions, ensuring development timelines and financing benchmarks remain intact.",
  },
  {
    question: "Do you offer arbitration and mediation options in place of court litigation?",
    answer: "Absolutely. Litigating in public courts can be costly and damage company reputation. Every litigator in our firm is certified in dispute mediation. We regularly represent clients in private AAA, JAMS, and ICC arbitrations worldwide to achieve quiet, cost-effective, and fully binding settlements.",
  },
  {
    question: "How do clients contact their attorney during out-of-office emergencies?",
    answer: "Corporate and individual clients under an active retainer receive direct, private mobile numbers for their primary counsel, alongside access to our 24/7 critical legal hotline. This ensures immediate legal support during arrests, regulatory raids, or emergency financial events.",
  },
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="relative py-32 sm:py-40 bg-bg-accent/40 border-t border-white/[0.04]">
      <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-left max-w-3xl mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4 block"
          >
            Common Inquiries
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight mb-8"
          >
            Legal Operations FAQ. <br />
            <span className="text-gold-metallic">Clear Answers for Clients.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl"
          >
            Review answers to our most common questions regarding representation models, M&A procedures, and compliance management protocols.
          </motion.p>
        </div>

        {/* Accordion Component */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Accordion items={faqItems} />
        </motion.div>

      </div>
    </section>
  );
};
