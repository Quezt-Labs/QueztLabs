"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, Shield } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const differentiators = [
  {
    icon: Code2,
    title: "Real Product Experience",
    description:
      "We've built and scaled products ourselves. We know what breaks at 10K users, what slows down at 100K, and how to architect for millions.",
  },
  {
    icon: Rocket,
    title: "Ship Fast, Ship Right",
    description:
      "No endless discovery phases. We start building in week one. Your MVP ships in 6-8 weeks, not 6-8 months.",
  },
  {
    icon: Users,
    title: "Founder-Led, Not Agency-Led",
    description:
      "You work directly with the founder who codes. No account managers, no handoffs, no broken telephone. Just results.",
  },
  {
    icon: Shield,
    title: "Production-Ready from Day One",
    description:
      "We don't build prototypes. Every line of code is written to production standards. Your MVP is built to scale, not rebuild.",
  },
];

export function WhyQueztLabs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="why-queztlabs" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why QueztLabs"
          title="Built by founders, for founders"
          description="We're not another agency. We're product engineers who've been where you are."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
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
                className="p-6 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
