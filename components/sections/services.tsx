"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Palette, Lightbulb } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/lib/data";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const iconMap = {
  smartphone: Smartphone,
  globe: Globe,
  palette: Palette,
  lightbulb: Lightbulb,
};

/**
 * Services section showcasing core offerings
 */
export function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Services"
          title="Everything you need to build exceptional products"
          description="From initial concept to launch and beyond, we provide end-to-end digital product development services."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
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
                    : { duration: 0.5, delay: index * 0.1 }
                }
                className="group p-6 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-colors w-full max-w-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center mb-4 group-hover:bg-accent/50 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-xs text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {feature}
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
