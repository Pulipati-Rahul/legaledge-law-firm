"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  image?: string;
}

interface CarouselProps {
  items: Testimonial[];
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({ items, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }, [items.length]);

  const selectIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(handleNext, 8000);
  }, [handleNext]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, resetTimer]);

  const activeItem = items[currentIndex];

  return (
    <div className={`relative max-w-4xl mx-auto px-4 ${className}`}>
      {/* Testimonial card window */}
      <div className="relative h-[320px] sm:h-[280px] md:h-[240px] overflow-hidden flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute w-full px-6 sm:px-14 text-center flex flex-col items-center justify-center"
          >
            {/* Stars - Softened opacity */}
            <div className="flex gap-1 justify-center mb-5">
              {[...Array(activeItem.rating)].map((_, i) => (
                <Star key={i} size={15} className="fill-primary/80 text-primary/80" />
              ))}
            </div>

            {/* Testimonial copy - Elegant serif style */}
            <p className="font-serif italic text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed mb-5 max-w-2xl">
              &ldquo;{activeItem.content}&rdquo;
            </p>

            {/* Client Bio */}
            <div>
              <h4 className="font-sans text-[11px] uppercase tracking-widest text-primary font-semibold">
                {activeItem.name}
              </h4>
              <p className="font-sans text-[10px] text-slate-400 mt-1">
                {activeItem.role}, <span className="text-slate-300">{activeItem.company}</span>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls (Minimal and Sleek) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
        <button
          onClick={handlePrev}
          className="p-2 border border-white/[0.06] bg-bg-card hover:bg-slate-700 hover:border-primary/40 text-slate-400 hover:text-primary transition-all duration-300 pointer-events-auto rounded-md cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={handleNext}
          className="p-2 border border-white/[0.06] bg-bg-card hover:bg-slate-700 hover:border-primary/40 text-slate-400 hover:text-primary transition-all duration-300 pointer-events-auto rounded-md cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Slide dots */}
      <div className="flex justify-center gap-1.5 mt-5">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => selectIndex(index)}
            className={`h-1 transition-all duration-300 cursor-pointer rounded-full ${
              index === currentIndex ? "w-6 bg-primary" : "w-1 bg-slate-700 hover:bg-slate-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
