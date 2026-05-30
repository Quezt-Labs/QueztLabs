"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  MessageSquare,
  Server,
  Settings,
  Megaphone,
  TrendingUp,
  ArrowRight,
  FileText,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { services } from "@/lib/data";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  "message-square": MessageSquare,
  server: Server,
  settings: Settings,
  megaphone: Megaphone,
  "trending-up": TrendingUp,
  "file-text": FileText,
  smartphone: Smartphone,
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function Services() {
  const shouldReduceMotion = useReducedMotion();
  const techServices = services.filter((s) => s.category === "tech");
  const businessServices = services.filter((s) => s.category === "business");

  return (
    <SectionShell id="services" variant="muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Services"
          title="From MVP to go-to-market"
          description="Engineering, mobile, backend, and growth—one founder-led team."
        />

        <ServiceGroup
          title="Technical development"
          items={techServices}
          indexOffset={0}
          shouldReduceMotion={shouldReduceMotion}
        />
        <ServiceGroup
          title="Brand & go-to-market"
          items={businessServices}
          indexOffset={techServices.length}
          shouldReduceMotion={shouldReduceMotion}
          className="mt-16"
        />
      </div>
    </SectionShell>
  );
}

function ServiceGroup({
  title,
  items,
  indexOffset,
  shouldReduceMotion,
  className,
}: {
  title: string;
  items: (typeof services)[number][];
  indexOffset: number;
  shouldReduceMotion: boolean;
  className?: string;
}) {
  if (items.length === 0) return null;

  return (
    <div className={className}>
      <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </h3>
      <ul
        className={`grid gap-4 md:grid-cols-2 ${
          items.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
        }`}
      >
        {items.map((service, index) => (
          <li key={service.id}>
            <ServiceCard
              service={service}
              index={indexOffset + index}
              shouldReduceMotion={shouldReduceMotion}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({
  service,
  index,
  shouldReduceMotion,
}: {
  service: (typeof services)[number];
  index: number;
  shouldReduceMotion: boolean;
}) {
  const Icon = iconMap[service.icon] ?? Code2;

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.45,
        delay: (index % 6) * 0.05,
        ease: EASE,
      }}
      className="h-full"
    >
      <Link
        href={`/service/${service.slug}`}
        className="card-lift group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-sm hover:border-brand-border"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-muted transition-colors group-hover:bg-brand-muted/80">
          <Icon className="h-5 w-5 text-brand" />
        </div>
        <h4 className="mt-4 text-lg font-semibold tracking-tight transition-colors group-hover:text-brand">
          {service.title}
        </h4>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        {service.features.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
            {service.features.map((f) => (
              <li
                key={f}
                className="rounded-md bg-muted/80 px-2 py-0.5 text-[11px] text-muted-foreground"
              >
                {f}
              </li>
            ))}
          </ul>
        ) : null}
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
          Learn more
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    </motion.div>
  );
}
