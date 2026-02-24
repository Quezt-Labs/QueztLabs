"use client";

import type React from "react";

import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

const transition = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94],
};

/**
 * Page transition wrapper with fade-in and slide-up animation
 */
export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
