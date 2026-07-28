"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

interface Attorney {
  name: string;
  role: string;
  specialization: string;
  experience: string;
  email: string;
  phone: string;
  linkedin: string;
  image: string;
}

const attorneys: Attorney[] = [
  {
    name: "Harvey Vance",
    role: "Senior Partner / Founder",
    specialization: "Corporate Law, M&A, Governance",
    experience: "25+ Years Experience",
    email: "h.vance@legaledgelaw.com",
    phone: "+1 (800) 555-3433 ext. 101",
    linkedin: "https://linkedin.com",
    image: "/images/harvey.jpg",
  },
  {
    name: "Evelyn Sterling",
    role: "Trial Litigation Partner",
    specialization: "White-Collar Crime, Criminal Defense",
    experience: "18+ Years Experience",
    email: "e.sterling@legaledgelaw.com",
    phone: "+1 (800) 555-3433 ext. 102",
    linkedin: "https://linkedin.com",
    image: "/images/evelyn.jpg",
  },
  {
    name: "Marcus Thorne",
    role: "Intellectual Property Partner",
    specialization: "Patent Prosecution, Tech Monopolies",
    experience: "15+ Years Experience",
    email: "m.thorne@legaledgelaw.com",
    phone: "+1 (800) 555-3433 ext. 103",
    linkedin: "https://linkedin.com",
    image: "/images/marcus.jpg",
  },
];

const LinkedinIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Team: React.FC = () => {
  return (
    <section id="team" className="relative py-32 sm:py-40 bg-bg-accent/40 border-t border-white/[0.04]">
      <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.02),transparent_70%)] pointer-events-none" />

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
            The Partners
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight mb-8"
          >
            Meet Our Senior Partners. <br />
            <span className="text-gold-metallic">Pioneering Legal Counsel.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl"
          >
            Our legal officers bring together veteran court presence, academic authority, and a commitment to strategic execution.
          </motion.p>
        </div>

        {/* Attorneys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {attorneys.map((attorney, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="flex flex-col border border-white/[0.06] bg-bg-card hover:border-primary/20 rounded-lg transition-all duration-500 overflow-hidden shadow-lg"
            >
              {/* Photo Area with rounded-t clipping */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-bg-dark">
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  fill
                  className="object-cover transition-transform duration-750 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Visual Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/95 via-bg-dark/30 to-transparent" />
                
                {/* Floating Bio */}
                <div className="absolute bottom-5 left-5 right-5 z-10 flex justify-between items-end">
                  <div className="text-left">
                    <span className="font-sans text-[8px] uppercase tracking-widest text-primary font-semibold">
                      {attorney.experience}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mt-1">
                      {attorney.name}
                    </h3>
                    <p className="font-sans text-xs text-slate-300 mt-0.5">
                      {attorney.role}
                    </p>
                  </div>
                  
                  {/* LinkedIn Icon */}
                  <a
                    href={attorney.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-white/[0.08] hover:border-primary bg-bg-card/40 text-slate-300 hover:text-primary transition-all duration-300 rounded-md cursor-pointer"
                    aria-label={`${attorney.name} LinkedIn Profile`}
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Text / Contact Area */}
              <div className="p-6 flex flex-col gap-4 text-left border-t border-white/[0.06]">
                <div>
                  <h4 className="font-sans text-[9px] uppercase tracking-widest text-slate-500 font-semibold mb-1">
                    Specialization
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 font-light">
                    {attorney.specialization}
                  </p>
                </div>

                <div className="border-t border-white/[0.04] pt-4 space-y-2">
                  <a
                    href={`mailto:${attorney.email}`}
                    className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-primary transition-colors duration-300"
                  >
                    <Mail size={13} className="text-primary/60" />
                    <span>{attorney.email}</span>
                  </a>
                  <a
                    href={`tel:${attorney.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-primary transition-colors duration-300"
                  >
                    <Phone size={13} className="text-primary/60" />
                    <span>{attorney.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
