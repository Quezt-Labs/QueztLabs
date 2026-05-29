"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
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
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/lib/data";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Service = (typeof services)[number];

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

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

/**
 * Services section - Tech + Business Solutions, premium technical styling
 */
export function Services() {
  const shouldReduceMotion = useReducedMotion();

  const techServices = services.filter((s) => s.category === "tech");
  const businessServices = services.filter((s) => s.category === "business");

  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-muted/30 border-y border-border/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Product Engineering Services"
          title="MVP Development, Web Apps & Growth Solutions"
          description="We build production-ready web apps, mobile apps, and MVPs for founders. Technical execution—from backend to AI—plus branding and go-to-market support when you need it."
        />

        <div className="mt-16 max-w-6xl mx-auto space-y-20">
          <ServiceGroup
            title="Technical Development"
            items={techServices}
            indexOffset={0}
            shouldReduceMotion={shouldReduceMotion}
          />
          <ServiceGroup
            title="Brand & Go-to-Market"
            items={businessServices}
            indexOffset={techServices.length}
            shouldReduceMotion={shouldReduceMotion}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceGroup({
  title,
  items,
  indexOffset,
  shouldReduceMotion,
}: {
  title: string;
  items: Service[];
  indexOffset: number;
  shouldReduceMotion: boolean;
}) {
  if (items.length === 0) return null;

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={
        shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: EASE }
      }
    >
      <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/90 mb-8">
        {title}
      </h3>
      <ul
        className={`grid grid-cols-1 gap-4 md:gap-5 md:grid-cols-2 ${
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
    </motion.div>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
  shouldReduceMotion: boolean;
}

function ServiceCard({ service, index, shouldReduceMotion }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Code2;

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.5,
              delay: index * 0.06,
              ease: EASE,
            }
      }
      className="h-full"
    >
      <Link
        href={`/service/${service.slug}`}
        className="group flex h-full flex-col rounded-xl border border-border/80 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/40 hover:bg-card hover:shadow-lg"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/20 transition-colors group-hover:bg-accent/30">
            <Icon className="h-5 w-5 text-accent" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="mb-1.5 text-base font-semibold transition-colors group-hover:text-accent">
              {service.title}
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>
          <ArrowRight
            className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/60 transition-all group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden
          />
        </div>
        {service.features.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2 border-t border-border/60 pt-4">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="rounded-md bg-muted/80 px-2 py-1 text-xs text-muted-foreground"
              >
                {feature}
              </li>
            ))}
          </ul>
        )}
      </Link>
    </motion.div>
  );
}
