"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  MessageCircle,
  Clock,
  Shield,
  Heart,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const supportFeatures = [
  {
    icon: Headphones,
    title: "Always Available",
    description:
      "We're here when you need us. Reach out anytime—we respond within 24 hours, often much sooner.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description:
      "No ticket systems or automated responses. Talk directly to the team that built your product.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description:
      "Urgent issues? We prioritize and respond fast. Your success is our priority.",
  },
  {
    icon: Shield,
    title: "Long-term Partnership",
    description:
      "We don't disappear after launch. We're committed to your long-term success and growth.",
  },
];

/**
 * Support section - Reassures clients about ongoing support and availability
 */
export function Support() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="support"
      className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Support"
          title="We're here for you, always"
          description="Your project doesn't end at launch. We're committed to your success long after we deliver. Whether you need quick fixes, new features, or just someone to talk to—we're here."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {supportFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
                }
                whileInView={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, margin: "-50px" }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.5, delay: index * 0.1 }
                }
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Main message */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true }}
          transition={
            shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.4 }
          }
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 mb-6">
            <Heart className="w-5 h-5 text-primary-foreground" />
            <span className="text-sm font-medium">Our Commitment</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            We don't just build products—we build relationships
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            Launch day is just the beginning. We're your long-term technology
            partner, here to help you grow, iterate, and succeed. Whether it's a
            bug fix, a new feature, or strategic advice—we're always just a
            message away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("faq");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                See FAQ
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
