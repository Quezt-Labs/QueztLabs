"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Database,
  Layers,
  Radio,
  Server,
  Smartphone,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { techStackCategories, techStackHighlight } from "@/lib/tech-stack";

const categoryIcons: Record<string, LucideIcon> = {
  frontend: Layers,
  mobile: Smartphone,
  backend: Server,
  data: Database,
  infra: Radio,
  cloud: Cloud,
};

const allTech = techStackCategories.flatMap((c) => c.items);
const marqueeTrack = [...allTech, ...allTech];

const EASE = [0.22, 1, 0.36, 1] as const;

export function TechStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionShell id="tech-stack">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tech stack"
          title="Tools we use to ship fast"
          description={techStackHighlight}
        />

        <div className="relative mt-12 overflow-hidden mask-marquee rounded-2xl border border-border/60 bg-muted/30 py-4">
          <div className="flex w-max animate-marquee gap-3 px-4">
            {marqueeTrack.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="whitespace-nowrap rounded-full border border-border/70 bg-card px-4 py-1.5 text-sm font-medium shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: EASE,
                }}
                className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-muted">
                    <Icon className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{category.label}</h3>
                    <p className="text-xs text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-muted/60 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
