"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: EASE }}
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {badge ? (
        <span
          className={cn(
            "badge-pill mb-5",
            light && "border-white/20 bg-white/10 text-white/90",
          )}
        >
          <span className="brand-dot" aria-hidden />
          {badge}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] text-balance",
          light && "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-pretty",
            light ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
