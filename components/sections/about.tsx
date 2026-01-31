"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="About"
            title="Built by founders, for founders"
            description="We're not another agency. We're product engineers who've been where you are."
          />

          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
            }
            whileInView={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, margin: "-100px" }}
            transition={
              shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }
            }
            className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              We're founders who code. We've built products, shipped MVPs, and
              learned what works and what doesn't. We understand the struggle of
              turning an idea into something real—because we've been there.
            </p>

            <p>
              QueztLabs is new, but we're not new to building. We've worked on
              products that scaled, systems that handled real users, and
              projects where speed mattered. We know how to ship fast without
              cutting corners, because we've seen what happens when you do.
            </p>

            <p>
              Most agencies sell you process and promises. Here, you work
              directly with us—founders who still write code, who get
              product-market fit, and who treat your product like it's our own.
              No account managers, no handoffs, no broken telephone.
            </p>

            <p className="font-medium text-foreground">
              If you're building something real and need someone who gets it,
              let's talk. No sales pitch, no fluff—just a real conversation
              about how we can get your product to market faster.
            </p>
          </motion.div>

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
                : { duration: 0.5, delay: 0.2 }
            }
            className="mt-12"
          >
            <Button size="lg" asChild>
              <Link href="#contact">
                Let's Talk About Your Product
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
