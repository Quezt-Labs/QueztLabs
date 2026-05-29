"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Globe,
  Layers,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ProjectSeoPanel } from "@/components/sections/project-seo-panel";
import {
  portfolioCategories,
  portfolioStats,
  projectUrl,
  vercelProjects,
  type PortfolioProject,
  type ProjectCategory,
} from "@/lib/vercel-projects";

function ProjectCard({
  project,
  variant = "default",
  index = 0,
}: {
  project: PortfolioProject;
  variant?: "featured" | "default";
  index?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const url = projectUrl(project.domain);

  return (
    <motion.article
      layout={!shouldReduceMotion}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-shadow hover:shadow-lg hover:shadow-black/5",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-gradient-to-br p-5 text-white sm:p-6",
          project.accent,
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="border-0 bg-white/15 text-white backdrop-blur-sm"
              >
                {project.framework === "nextjs" ? "Next.js" : "Vite + React"}
              </Badge>
              {project.seo.robots?.includes("noindex") && (
                <Badge
                  variant="secondary"
                  className="border-0 bg-black/20 text-white/90 text-[10px]"
                >
                  Internal
                </Badge>
              )}
            </div>
            <h3
              className={cn(
                "font-bold tracking-tight text-white",
                variant === "featured" ? "text-xl sm:text-2xl" : "text-lg",
              )}
            >
              {project.name}
            </h3>
            <p className="mt-0.5 text-sm text-white/80">{project.tagline}</p>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-colors hover:bg-white/25"
            aria-label={`Open ${project.name}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <p className="relative mt-3 line-clamp-2 text-sm leading-relaxed text-white/85">
          {project.description}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
        <ProjectSeoPanel
          seo={project.seo}
          domain={project.domain}
          compact={variant !== "featured"}
        />

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Globe className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{project.domain}</span>
        </div>

        <div className="mt-auto">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live site
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/**
 * Portfolio — live Vercel products with SEO meta previews
 */
export function Portfolio({ showAllLink = true }: { showAllLink?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const shouldReduceMotion = useReducedMotion();

  const filtered = useMemo(() => {
    if (activeCategory === "all") return vercelProjects;
    return vercelProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="relative overflow-hidden py-20 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.85_0.08_290/0.25),transparent)]"
        aria-hidden
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Portfolio"
          title="Products we've shipped — with production SEO"
          description="Every card shows live meta tags from the deployed site: page title, description, Open Graph, keywords, and indexing — the same signals Google and social platforms read."
        />

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {portfolioStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border/60 bg-card/80 px-4 py-5 text-center backdrop-blur-sm"
            >
              <p className="text-2xl font-bold tracking-tight sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-16 text-center text-muted-foreground"
            >
              No projects in this category yet.
            </motion.p>
          ) : (
            <div key={activeCategory} className="mt-12 space-y-8">
              {featured.length > 0 && (
                <div className="grid gap-6 lg:grid-cols-2">
                  {featured.map((project, i) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      variant="featured"
                      index={i}
                    />
                  ))}
                </div>
              )}

              {rest.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {rest.map((project, i) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={featured.length + i}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </AnimatePresence>

        {showAllLink && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
            >
              <Layers className="h-4 w-4" />
              View full portfolio
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={projectUrl("www.queztlabs.tech")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Sparkles className="h-4 w-4" />
              Meta synced from live sites
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
