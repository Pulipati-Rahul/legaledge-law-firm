"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, AlertTriangle } from "lucide-react";
import { Card } from "../ui/Card";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-32 sm:py-40 bg-bg-accent/40 border-t border-white/[0.04]">
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.02),transparent_70%)] pointer-events-none" />

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
            Connect With Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight mb-8"
          >
            Global Headquarters. <br />
            <span className="text-gold-metallic">Direct Lines of Counsel.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl"
          >
            Visit our headquarters at One World Trade Center or contact us directly to coordinate representation.
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-stretch">
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            
            {/* Address */}
            <Card className="flex-1 p-6 sm:p-8 flex items-start gap-4 border-white/[0.06] bg-bg-card rounded-lg">
              <div className="p-2.5 bg-primary/5 border border-primary/20 text-primary rounded-md">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="font-sans text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
                  Office Location
                </h4>
                <p className="font-serif text-lg text-white leading-snug">
                  Suite 85A, One World Trade Center
                </p>
                <p className="font-sans text-xs sm:text-sm text-slate-400 font-light mt-1">
                  New York, NY 10007, United States
                </p>
              </div>
            </Card>

            {/* Direct Lines */}
            <Card className="flex-1 p-6 sm:p-8 flex items-start gap-4 border-white/[0.06] bg-bg-card rounded-lg">
              <div className="p-2.5 bg-primary/5 border border-primary/20 text-primary rounded-md">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="font-sans text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
                  Direct Inquiries
                </h4>
                <p className="font-serif text-lg text-white">
                  +1 (800) 555-3433
                </p>
                <p className="font-sans text-xs sm:text-sm text-slate-400 font-light mt-1">
                  Email: <a href="mailto:contact@legaledgelaw.com" className="hover:text-primary transition-colors">contact@legaledgelaw.com</a>
                </p>
              </div>
            </Card>

            {/* Operating Hours */}
            <Card className="flex-1 p-6 sm:p-8 flex items-start gap-4 border-white/[0.06] bg-bg-card rounded-lg">
              <div className="p-2.5 bg-primary/5 border border-primary/20 text-primary rounded-md">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="font-sans text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
                  Office Hours
                </h4>
                <p className="font-serif text-base text-white">
                  Monday – Friday: 8:00 AM – 7:00 PM EST
                </p>
                <p className="font-sans text-xs sm:text-sm text-slate-400 font-light mt-1">
                  Saturday – Sunday: By appointment only
                </p>
              </div>
            </Card>

            {/* Emergency Hotline Alert */}
            <div className="border border-white/[0.06] bg-bg-card p-6 sm:p-8 flex items-start gap-4 rounded-lg">
              <div className="p-2.5 bg-primary/10 border border-primary/30 text-primary rounded-md animate-pulse">
                <AlertTriangle size={18} />
              </div>
              <div>
                <h4 className="font-sans text-[10px] font-bold text-primary uppercase tracking-widest mb-1.5">
                  Emergency Defense Hotline
                </h4>
                <p className="font-sans text-xs text-slate-300 font-light leading-relaxed">
                  For immediate white-collar arrest support or regulatory inspection emergencies outside operating hours, contact <strong className="text-white font-semibold">+1 (800) 555-3433 ext. 911</strong>.
                </p>
              </div>
            </div>

          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full border border-white/[0.06] p-2 bg-bg-card rounded-lg"
            >
              <iframe
  title="LegalEdge Office Map"
  src="https://www.google.com/maps/embed?pb=..."
  className="w-full h-full rounded-lg"
  style={{
    border: 0,
    filter: "invert(90%) hue-rotate(180deg) grayscale(100%) contrast(90%)",
  }}
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
/>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
