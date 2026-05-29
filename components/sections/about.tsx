"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionShell id="about" variant="muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeader
              badge="About"
              title="Founders who still write code"
              align="left"
              className="!mx-0 max-w-none"
            />
          </div>
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }
            }
            whileInView={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-5 text-base leading-relaxed text-muted-foreground"
          >
            <p>
              We&apos;re not another agency selling process decks. We&apos;ve
              built products, shipped MVPs, and learned what works when speed
              matters.
            </p>
            <p>
              At Quezt Labs you work directly with engineers who treat your
              product like their own — no account managers, no broken telephone.
            </p>
            <p className="font-medium text-foreground">
              Building something real? Let&apos;s talk — no fluff, just a clear
              path to market.
            </p>
            <Button size="lg" className="rounded-full mt-4" asChild>
              <Link href="#contact">
                Let&apos;s talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}
