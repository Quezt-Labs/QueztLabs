"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Scroll progress indicator
 * Shows reading progress at the top of the page
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[oklch(0.55_0.2_285)] via-primary to-[oklch(0.75_0.12_295)] origin-left z-[100] pointer-events-none"
      style={{
        scaleX,
        transformOrigin: "0%",
      }}
      aria-hidden="true"
    />
  );
}
