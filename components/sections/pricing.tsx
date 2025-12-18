"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { pricingTiers } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Pricing section with tiered options
 */
export function Pricing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Pricing"
          title="Simple, transparent pricing that scales with you"
          description="Start small, grow big. From MVPs to enterprise solutions, we have a plan that fits your budget and ambitions. No hidden fees, no surprises—just honest pricing."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
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
              className={cn(
                "relative p-8 rounded-2xl border",
                tier.highlighted
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border"
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <p
                className={cn(
                  "mt-2 text-sm",
                  tier.highlighted
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                )}
              >
                {tier.description}
              </p>
              <div className="mt-6">
                <span className="text-4xl font-bold">
                  {tier.price === "Custom" ? tier.price : `$${tier.price}`}
                </span>
                <span
                  className={cn(
                    "ml-2 text-sm",
                    tier.highlighted
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  )}
                >
                  {tier.priceNote}
                </span>
              </div>
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "w-5 h-5 shrink-0 mt-0.5",
                        tier.highlighted ? "text-accent" : "text-accent"
                      )}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="w-full mt-8"
                variant={tier.highlighted ? "secondary" : "default"}
              >
                <Link href="#contact">{tier.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
