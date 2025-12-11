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
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100] pointer-events-none"
      style={{
        scaleX,
        transformOrigin: "0%",
      }}
      aria-hidden="true"
    />
  );
}
