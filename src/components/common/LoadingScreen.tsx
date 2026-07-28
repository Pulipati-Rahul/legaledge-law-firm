"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg-dark"
        >
          {/* Golden monogram / logo animation */}
          <div className="relative flex flex-col items-center select-none">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-primary font-serif text-6xl md:text-8xl tracking-widest font-light relative"
            >
              LE
              <span className="absolute -top-1 -right-2 text-[10px] tracking-normal font-sans text-neutral-500 font-semibold uppercase">
                Est. 1999
              </span>
            </motion.div>

            {/* Separator line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
              className="h-[1px] bg-primary/40 my-4"
            />

            {/* Subtext reveal */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="font-sans text-xs tracking-[0.3em] text-neutral-400 uppercase font-light"
              >
                LegalEdge Law Firm
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
