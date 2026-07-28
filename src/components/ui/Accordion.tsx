"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = "" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`bg-bg-card rounded-lg border border-white/[0.06] divide-y divide-white/[0.06] overflow-hidden ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="transition-colors duration-300 hover:bg-white/[0.01]"
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex justify-between items-center w-full py-4.5 px-6 text-left focus:outline-none group cursor-pointer"
            >
              <span className="font-serif text-base sm:text-lg font-medium text-white group-hover:text-primary transition-colors duration-300">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-neutral-400 group-hover:text-primary ml-4 flex-shrink-0"
              >
                <ChevronRight size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-5 text-sm sm:text-base text-neutral-300 font-sans leading-relaxed font-light">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
