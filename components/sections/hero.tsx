"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { calBookingUrl } from "@/lib/data";
import { vercelProjects } from "@/lib/vercel-projects";
import { ArrowRight, ArrowUpRight, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const stats = [
  { value: "12+", label: "Live products" },
  { value: "6–8 wks", label: "Typical MVP" },
  { value: "1:1", label: "Founder-led" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const featured = vercelProjects.filter((p) => p.featured).slice(0, 3);

  const fade = (delay = 0) =>
    shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 };

  const show = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 };

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-24">
      <div className="noise-overlay pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[min(100%,900px)] -translate-x-1/2 rounded-full bg-gradient-to-b from-[oklch(0.92_0.06_295)] via-accent/40 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />
      </div>

      <div className="container mx-auto grid items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div itemScope itemType="https://schema.org/Organization">
          <motion.div
            initial={fade()}
            animate={show}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="badge-pill">
              <Sparkles className="h-3.5 w-3.5" />
              Product studio · Delhi, India
            </span>
          </motion.div>

          <motion.h1
            initial={fade(0.05)}
            animate={show}
            transition={{ duration: 0.65, delay: 0.05, ease: EASE }}
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl xl:text-[3.5rem]"
          >
            We design &amp; ship{" "}
            <span className="gradient-text font-serif italic font-normal">
              products
            </span>{" "}
            founders can scale
          </motion.h1>

          <motion.p
            initial={fade(0.1)}
            animate={show}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            MVPs, web apps, and mobile — production-ready code, real domains,
            and SEO that works. No bloated agency process.
          </motion.p>

          <motion.div
            initial={fade(0.15)}
            animate={show}
            transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button size="lg" className="rounded-full h-12 px-6" asChild>
              <a href={calBookingUrl} target="_blank" rel="noopener noreferrer">
                Book discovery call
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-6 bg-background/60"
              asChild
            >
              <Link href="#portfolio">See our work</Link>
            </Button>
          </motion.div>

          <motion.dl
            initial={fade(0.2)}
            animate={show}
            transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
            className="mt-12 grid grid-cols-3 gap-4 border-t border-border/60 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="glass-card rounded-2xl p-2 shadow-2xl shadow-[oklch(0.55_0.2_285/0.12)]">
            <div className="rounded-xl border border-border/60 bg-card overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border/60 bg-muted/50 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                <span className="ml-2 truncate text-xs text-muted-foreground">
                  queztlabs.tech — portfolio
                </span>
              </div>
              <ul className="divide-y divide-border/60 p-2">
                {featured.map((project) => (
                  <li key={project.id}>
                    <a
                      href={`https://${project.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-muted/60"
                    >
                      <div className="min-w-0">
                        <p className="font-medium truncate">{project.name}</p>
                        <p className="flex items-center gap-1 text-xs text-muted-foreground truncate">
                          <Globe className="h-3 w-3 shrink-0" />
                          {project.domain}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-border/80 bg-card px-4 py-3 shadow-lg sm:block">
            <p className="text-xs text-muted-foreground">Latest ship</p>
            <p className="text-sm font-semibold">Prep OS · EdTech</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
