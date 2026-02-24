"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  BarChart3,
  Brain,
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

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code2,
  "bar-chart": BarChart3,
  brain: Brain,
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
          {/* Tech Category */}
          {techServices.length > 0 && (
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
              }
              whileInView={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, margin: "-100px" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
              }
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/90 mb-8">
                Technical Development
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {techServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Business Solutions Category */}
          {businessServices.length > 0 && (
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
              }
              whileInView={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, margin: "-100px" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
              }
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/90 mb-8">
                Brand & Go-to-Market
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {businessServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={techServices.length + index}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
  shouldReduceMotion: boolean;
}

function ServiceCard({ service, index, shouldReduceMotion }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Code2;

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
              ease: [0.25, 0.46, 0.45, 0.94],
            }
      }
    >
      <Link
        href={`/service/${service.slug}`}
        className="group block p-6 rounded-xl bg-card/80 border border-border/80 hover:border-accent/40 hover:bg-card hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-out h-full backdrop-blur-sm"
      >
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
            <Icon className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-semibold mb-1.5 group-hover:text-accent transition-colors">
              {service.title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground/60 group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
        </div>
      </Link>
    </motion.div>
  );
}
