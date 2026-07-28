"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd"
  > {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-500 ease-out rounded-md focus:outline-none tracking-widest uppercase cursor-pointer select-none text-xs sm:text-sm border";

  const variants = {
    primary:
      "bg-bg-dark text-primary border-primary/40 hover:bg-primary hover:text-bg-dark hover:border-primary font-semibold shadow-md hover:shadow-lg",
    secondary:
      "bg-bg-accent text-white border-neutral-700 hover:bg-white hover:text-bg-dark hover:border-white font-medium",
    outline:
      "bg-transparent text-primary border-primary/30 hover:bg-primary hover:text-bg-dark hover:border-primary font-medium",
    text: "bg-transparent text-white hover:text-primary border-none p-0 tracking-widest lowercase first-letter:uppercase",
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px] sm:text-xs",
    md: "px-5 py-3",
    lg: "px-7 py-3.5 text-sm sm:text-base",
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.99 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-500 group-hover:translate-x-1">{icon}</span>}
      </span>
    </motion.button>
  );
};
