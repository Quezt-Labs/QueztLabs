"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { calBookingUrl } from "@/lib/data";
import { ArrowRight, Code2, Zap, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Hero section - clean, focused, trust-building
 * Removed: 4 feature grid (redundant), ping animation (distracting)
 * Kept: clear value prop, CTAs, social proof hint
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 };
  const animate = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] };

  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
      {/* Subtle grid - technical premium feel */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div
          className="max-w-3xl mx-auto text-center"
          itemScope
          itemType="https://schema.org/Organization"
        >
          {/* Badge - no ping, cleaner */}
          <motion.div
            initial={fadeIn}
            animate={animate}
            transition={transition}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-full bg-accent/20 text-foreground border border-accent/30">
              Founder-led product engineering
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={fadeIn}
            animate={animate}
            transition={
              shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }
            }
            className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance tracking-[-0.02em]"
            style={{ minHeight: "1.2em" }}
          >
            Ship your MVP in weeks,{" "}
            <span className="font-serif italic">not months</span>
          </motion.h1>

          {/* Subheadline - benefit-focused, trust-building */}
          <motion.p
            initial={fadeIn}
            animate={animate}
            transition={
              shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.2 }
            }
            className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty"
          >
            Production-ready web apps, mobile apps, and MVPs. We&apos;ve built
            products that scale—now we build yours.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={fadeIn}
            animate={animate}
            transition={
              shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.3 }
            }
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild>
              <a
                href={calBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#services">Our Services</Link>
            </Button>
          </motion.div>

          {/* Compact feature strip */}
          <motion.div
            initial={fadeIn}
            animate={animate}
            transition={
              shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.4 }
            }
            className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-x-12"
          >
            {[
              { icon: Code2, label: "Modern Stack" },
              { icon: Zap, label: "Fast Delivery" },
              { icon: Shield, label: "Production Ready" },
              { icon: Sparkles, label: "Quality First" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Trust hint */}
          <motion.p
            initial={fadeIn}
            animate={animate}
            transition={
              shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.5 }
            }
            className="mt-10 text-sm text-muted-foreground/80"
          >
            Trusted by founders building Grind Karo, TestForce, and more
          </motion.p>
        </div>
      </div>
    </section>
  );
}
