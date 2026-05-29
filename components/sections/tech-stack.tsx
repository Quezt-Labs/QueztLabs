"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Layers,
  Radio,
  Server,
  Smartphone,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { techStackCategories, techStackHighlight } from "@/lib/tech-stack";
import type { LucideIcon } from "lucide-react";

const categoryIcons: Record<string, LucideIcon> = {
  frontend: Layers,
  mobile: Smartphone,
  backend: Server,
  data: Database,
  infra: Radio,
  cloud: Cloud,
};

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

/**
 * Tech stack — tools we build with every day
 */
export function TechStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="tech-stack"
      className="border-y border-border/50 bg-muted/20 py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tech stack"
          title="Modern tools we ship with"
          description="From MVP frontends to production backends — we pick proven stacks and deploy them on real domains, not slide decks."
        />

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          {techStackHighlight}
        </motion.p>

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techStackCategories.map((category, index) => {
            const Icon = categoryIcons[category.id] ?? Layers;

            return (
              <motion.div
                key={category.id}
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }
                }
                whileInView={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: EASE,
                }}
                className="rounded-2xl border border-border/80 bg-card/90 p-5 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                    <Icon className="h-5 w-5 text-accent" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold tracking-tight">
                      {category.label}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li key={item}>
                      <span className="inline-block rounded-lg border border-border/70 bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
