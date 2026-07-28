"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scale } from "lucide-react";
import { Button } from "../ui/Button";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Practices", href: "#practices" },
  { label: "Why Us", href: "#why-us" },
  { label: "Team", href: "#team" },
  { label: "Results", href: "#results" },
  { label: "Resources", href: "#resources" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 120;
          if (window.scrollY >= offsetTop) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 80; // offset to account for floating nav height
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-nav py-3 shadow-md"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <Scale size={20} className="text-primary transition-transform duration-500 group-hover:rotate-12" />
            <div className="flex flex-col">
              <span className="font-serif text-base md:text-lg font-bold tracking-widest text-white group-hover:text-primary transition-colors duration-300">
                LEGALEDGE
              </span>
              <span className="font-sans text-[7px] tracking-[0.25em] text-slate-400 uppercase -mt-1">
                Law Firm
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`font-sans text-[10px] sm:text-xs uppercase tracking-wider hover:text-primary transition-colors duration-500 relative py-1 ${
                    isActive ? "text-primary font-medium" : "text-slate-300"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary"
                      transition={{ type: "spring", stiffness: 350, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Consultation Button (Smaller gold CTA) */}
          <div className="hidden lg:block">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleLinkClick("#booking")}
              className="py-2.5 px-4 font-sans text-xs tracking-wider"
            >
              Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-primary transition-colors duration-300 focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg-dark/98 backdrop-blur-lg pt-20 px-6 flex flex-col justify-between pb-10 lg:hidden"
          >
            <div className="flex flex-col gap-5 pt-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`font-serif text-xl font-medium tracking-wide ${
                      isActive ? "text-primary pl-3 border-l-2 border-primary" : "text-slate-300"
                    } hover:text-primary transition-all duration-300`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="flex flex-col gap-3">
              <Button
                variant="primary"
                className="w-full py-3 text-xs"
                onClick={() => handleLinkClick("#booking")}
              >
                Schedule Consultation
              </Button>
              <a
                href="tel:+18005553433"
                className="text-center font-sans text-[10px] tracking-widest text-slate-400 py-2 uppercase"
              >
                Call: +1 (800) 555-3433
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
