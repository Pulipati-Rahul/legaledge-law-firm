"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Mail, User, Phone, Briefcase, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import confetti from "canvas-confetti";

interface FormData {
  name: string;
  email: string;
  phone: string;
  practiceArea: string;
  date: string;
  message: string;
}

const initialFormState: FormData = {
  name: "",
  email: "",
  phone: "",
  practiceArea: "",
  date: "",
  message: "",
};

export const Booking: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const practices = [
    "Corporate Law",
    "Family Law",
    "Criminal Defense",
    "Civil Litigation",
    "Real Estate Law",
    "Business Law",
    "Employment Law",
    "Intellectual Property",
  ];

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone.replace(/[\s()-]/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.practiceArea) newErrors.practiceArea = "Please select a practice area";
    if (!formData.date) newErrors.date = "Please select a preferred date";
    if (!formData.message.trim()) newErrors.message = "Please describe your inquiry";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      const end = Date.now() + (1.5 * 1000);
      const colors = ["#D4AF37", "#FFFFFF", "#E6C762"];

      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    }, 1500);
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setIsSuccess(false);
  };

  return (
    <section id="booking" className="relative py-32 sm:py-40 bg-bg-dark border-t border-white/[0.04]">
      <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.02),transparent_70%)] pointer-events-none" />

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
            Consultation Request
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight mb-8"
          >
            Initiate Engagement. <br />
            <span className="text-gold-metallic">Secure Legal Counsel.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl"
          >
            Complete our assessment briefing details. An auditing partner will analyze your case parameters under attorney-client privilege protocols and contact you within 4 hours.
          </motion.p>
        </div>

        {/* Booking Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative border border-white/[0.06] bg-bg-card p-8 sm:p-12 overflow-hidden shadow-xl rounded-lg text-left"
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="booking-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="relative">
                    <label htmlFor="name" className="block font-sans text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-primary/60 pointer-events-none">
                        <User size={15} />
                      </span>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-900/60 border ${
                          errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/[0.08] focus:border-primary"
                        } pl-10 pr-4 py-3 font-sans text-sm text-white focus:outline-none transition-all duration-300 rounded-md`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && (
                      <span className="text-[10px] text-red-400 mt-1 block font-sans tracking-wide">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label htmlFor="email" className="block font-sans text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-primary/60 pointer-events-none">
                        <Mail size={15} />
                      </span>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-900/60 border ${
                          errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/[0.08] focus:border-primary"
                        } pl-10 pr-4 py-3 font-sans text-sm text-white focus:outline-none transition-all duration-300 rounded-md`}
                        placeholder="j.doe@company.com"
                      />
                    </div>
                    {errors.email && (
                      <span className="text-[10px] text-red-400 mt-1 block font-sans tracking-wide">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div className="relative">
                    <label htmlFor="phone" className="block font-sans text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-primary/60 pointer-events-none">
                        <Phone size={15} />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-900/60 border ${
                          errors.phone ? "border-red-500/50 focus:border-red-500" : "border-white/[0.08] focus:border-primary"
                        } pl-10 pr-4 py-3 font-sans text-sm text-white focus:outline-none transition-all duration-300 rounded-md`}
                        placeholder="+1 (800) 555-3433"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-[10px] text-red-400 mt-1 block font-sans tracking-wide">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Practice Area selector */}
                  <div className="relative">
                    <label htmlFor="practiceArea" className="block font-sans text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-2">
                      Practice Area
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-primary/60 pointer-events-none">
                        <Briefcase size={15} />
                      </span>
                      <select
                        name="practiceArea"
                        id="practiceArea"
                        value={formData.practiceArea}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-900/60 border ${
                          errors.practiceArea ? "border-red-500/50 focus:border-red-500" : "border-white/[0.08] focus:border-primary"
                        } pl-10 pr-4 py-[13px] font-sans text-sm text-white focus:outline-none transition-all duration-300 rounded-md appearance-none`}
                      >
                        <option value="" disabled className="bg-bg-card">Select specialization</option>
                        {practices.map((practice) => (
                          <option key={practice} value={practice} className="bg-bg-card text-white">
                            {practice}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.practiceArea && (
                      <span className="text-[10px] text-red-400 mt-1 block font-sans tracking-wide">
                        {errors.practiceArea}
                      </span>
                    )}
                  </div>
                </div>

                {/* Preferred Date */}
                <div className="relative">
                  <label htmlFor="date" className="block font-sans text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-2">
                    Preferred Consultation Date
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-primary/60 pointer-events-none">
                      <Calendar size={15} />
                    </span>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-900/60 border ${
                        errors.date ? "border-red-500/50 focus:border-red-500" : "border-white/[0.08] focus:border-primary"
                      } pl-10 pr-4 py-3 font-sans text-sm text-white focus:outline-none transition-all duration-300 rounded-md`}
                    />
                  </div>
                  {errors.date && (
                    <span className="text-[10px] text-red-400 mt-1 block font-sans tracking-wide">
                      {errors.date}
                    </span>
                  )}
                </div>

                {/* Brief Case Description */}
                <div className="relative">
                  <label htmlFor="message" className="block font-sans text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-2">
                    Brief Case Outline
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3.5 text-primary/60 pointer-events-none">
                      <FileText size={15} />
                    </span>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-900/60 border ${
                        errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/[0.08] focus:border-primary"
                      } pl-10 pr-4 py-3 font-sans text-sm text-white focus:outline-none transition-all duration-300 rounded-md resize-none`}
                      placeholder="Summarize the parties involved and transactional scale or active litigation parameters."
                    />
                  </div>
                  {errors.message && (
                    <span className="text-[10px] text-red-400 mt-1 block font-sans tracking-wide">
                      {errors.message}
                    </span>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full text-center py-4 rounded-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Initiating Protocol..." : "Submit Secure Assessment Request"}
                  </Button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 flex flex-col items-center justify-center text-center animate-fade-in"
              >
                <motion.div
                  initial={{ scale: 0.7 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="mb-6 p-4 bg-primary/10 rounded-full border border-primary/20 text-primary"
                >
                  <CheckCircle2 size={40} />
                </motion.div>

                <h3 className="font-serif text-2xl text-white font-medium mb-3">
                  Protocol Initiated.
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed font-light mb-8">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your consultation request for <strong className="text-primary">{formData.practiceArea}</strong> on <strong className="text-white">{formData.date}</strong> has been secure-filed. A senior partner will contact you within 4 hours.
                </p>

                <Button variant="outline" size="sm" onClick={handleReset}>
                  Submit Another Request
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
