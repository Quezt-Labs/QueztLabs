"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Reusable section header component with optional badge
 * Used across all major sections for consistent styling
 */
export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {badge && (
        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-widest rounded-full bg-accent/20 text-accent border border-accent/30">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance tracking-[-0.02em]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </motion.div>
  );
}
