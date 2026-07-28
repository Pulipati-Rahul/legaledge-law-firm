"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, ArrowRight, CheckCircle2 } from "lucide-react";

const LinkedinIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
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

const TwitterIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const FacebookIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Email address is required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setIsSubscribed(true);
    setEmail("");
  };

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
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
    <footer className="relative bg-bg-accent border-t border-white/[0.06] pt-20 pb-10 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.01),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("home");
              }}
              className="flex items-center gap-2 group mb-6 cursor-pointer"
            >
              <Scale size={20} className="text-primary transition-transform duration-500 group-hover:rotate-12" />
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold tracking-widest text-white group-hover:text-primary transition-colors duration-300">
                  LEGALEDGE
                </span>
                <span className="font-sans text-[7px] tracking-[0.25em] text-slate-400 uppercase -mt-1">
                  Law Firm
                </span>
              </div>
            </a>
            
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-8 max-w-sm">
              Providing representation at the highest tiers of corporate, trial, and regulatory defense. Headquartered in New York City with affiliates worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/[0.08] hover:border-primary bg-bg-dark text-slate-300 hover:text-primary transition-colors duration-300 rounded-md cursor-pointer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/[0.08] hover:border-primary bg-bg-dark text-slate-300 hover:text-primary transition-colors duration-300 rounded-md cursor-pointer"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/[0.08] hover:border-primary bg-bg-dark text-slate-300 hover:text-primary transition-colors duration-300 rounded-md cursor-pointer"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Practice Areas column */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase mb-6">
              Practice Areas
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm font-light text-slate-400">
              <li><a href="#practices" onClick={(e) => { e.preventDefault(); handleLinkClick("practices"); }} className="hover:text-primary transition-colors">Corporate Law</a></li>
              <li><a href="#practices" onClick={(e) => { e.preventDefault(); handleLinkClick("practices"); }} className="hover:text-primary transition-colors">Family Law</a></li>
              <li><a href="#practices" onClick={(e) => { e.preventDefault(); handleLinkClick("practices"); }} className="hover:text-primary transition-colors">Criminal Defense</a></li>
              <li><a href="#practices" onClick={(e) => { e.preventDefault(); handleLinkClick("practices"); }} className="hover:text-primary transition-colors">Civil Litigation</a></li>
              <li><a href="#practices" onClick={(e) => { e.preventDefault(); handleLinkClick("practices"); }} className="hover:text-primary transition-colors">Real Estate Law</a></li>
              <li><a href="#practices" onClick={(e) => { e.preventDefault(); handleLinkClick("practices"); }} className="hover:text-primary transition-colors">Intellectual Property</a></li>
            </ul>
          </div>

          {/* Quick Links column */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm font-light text-slate-400">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick("home"); }} className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick("about"); }} className="hover:text-primary transition-colors">About Firm</a></li>
              <li><a href="#why-us" onClick={(e) => { e.preventDefault(); handleLinkClick("why-us"); }} className="hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#team" onClick={(e) => { e.preventDefault(); handleLinkClick("team"); }} className="hover:text-primary transition-colors">Our Attorneys</a></li>
              <li><a href="#results" onClick={(e) => { e.preventDefault(); handleLinkClick("results"); }} className="hover:text-primary transition-colors">Case Results</a></li>
              <li><a href="#booking" onClick={(e) => { e.preventDefault(); handleLinkClick("booking"); }} className="hover:text-primary transition-colors">Consultations</a></li>
            </ul>
          </div>

          {/* Newsletter / Brief updates */}
          <div className="lg:col-span-4 text-left">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase mb-6">
              The Legal Briefing
            </h4>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
              Subscribe to receive private, monthly reports dissecting emerging regulatory changes and M&A compliance checklists.
            </p>

            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form
                  key="subscribe-form"
                  onSubmit={handleSubscribe}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-2"
                >
                  <div className="flex border border-white/[0.08] bg-slate-900/60 focus-within:border-primary transition-all duration-300 rounded-md overflow-hidden">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="executive@company.com"
                      className="w-full px-4 py-3 bg-transparent text-sm text-white focus:outline-none font-sans"
                    />
                    <button
                      type="submit"
                      className="px-4 bg-primary text-bg-dark hover:bg-gold-hover transition-colors flex items-center justify-center cursor-pointer"
                      aria-label="Subscribe to newsletter"
                    >
                      <ArrowRight size={15} />
                    </button>
                  </div>
                  {error && (
                    <span className="text-[10px] text-red-400 block font-sans tracking-wide">
                      {error}
                    </span>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="subscribe-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-3 bg-primary/5 border border-primary/20 text-primary rounded-md"
                >
                  <CheckCircle2 size={16} className="flex-shrink-0" />
                  <span className="font-sans text-xs tracking-wide">
                    Protocol secured. Welcome to The Briefing.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Footer Bottom area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 pb-6 text-center md:text-left">
          
          <div className="flex flex-col gap-2">
            <p className="font-sans text-[10px] tracking-wider text-slate-500 uppercase">
              &copy; {new Date().getFullYear()} LegalEdge Law Firm LLP. All rights reserved.
            </p>
            <p className="font-sans text-[8px] text-slate-600 max-w-2xl leading-relaxed">
              Attorney Advertising Disclaimer: Prior results do not guarantee a similar outcome. This website is for informational purposes only and does not constitute formal legal counsel. Formal representation is initiated solely upon mutual execution of a Retainer Agreement.
            </p>
          </div>

          <div className="flex gap-6 font-sans text-[10px] tracking-widest text-slate-500 uppercase font-medium">
            <a href="#home" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>

        </div>

      </div>
    </footer>
  );
};
