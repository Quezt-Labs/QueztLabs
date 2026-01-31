"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/data";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function CaseStudies() {
  const shouldReduceMotion = useReducedMotion();
  const featuredCases = caseStudies.filter((cs) => cs.featured).slice(0, 3);

  return (
    <section id="case-studies" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Case Studies"
          title="Real products, real results"
          description="We build products that ship, scale, and succeed. Here's how we've helped founders get to market faster."
        />

        <div className="mt-16 space-y-16 max-w-5xl mx-auto">
          {featuredCases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
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
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-muted-foreground italic">
                      {caseStudy.subtitle}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-1">The Challenge</p>
                      <p className="text-sm text-muted-foreground">
                        {caseStudy.description}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-1">The Solution</p>
                      <p className="text-sm text-muted-foreground">
                        {caseStudy.longDescription}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-2">Results</p>
                      <div className="grid grid-cols-3 gap-4">
                        {caseStudy.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <p className="text-lg font-semibold">
                              {metric.value}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div
                  className="aspect-video rounded-2xl bg-muted"
                  style={{ backgroundColor: caseStudy.color + "20" }}
                >
                  {/* Placeholder for case study image */}
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    {caseStudy.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, margin: "-100px" }}
          transition={
            shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.3 }
          }
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Most of our work is under NDA. Let's discuss your project in detail.
          </p>
          <Button size="lg" asChild>
            <Link href="#contact">
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
