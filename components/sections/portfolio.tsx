"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { caseStudies } from "@/lib/data";

/**
 * Portfolio section with featured case studies
 */
export function Portfolio() {
  const featuredStudies = caseStudies.filter((study) => study.featured);

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Work"
          title="Projects that drive results"
          description="A selection of our recent work across mobile apps, web platforms, and digital products."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {featuredStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/case-studies/${study.id}`} className="group block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      {study.services.slice(0, 2).map((service) => (
                        <span
                          key={service}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {study.title}
                    </h3>
                    <p className="text-white/80 text-sm">{study.subtitle}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex gap-6">
                  {study.metrics.slice(0, 3).map((metric) => (
                    <div key={metric.label}>
                      <p className="text-2xl font-bold">{metric.value}</p>
                      <p className="text-xs text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
          >
            View all case studies
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
