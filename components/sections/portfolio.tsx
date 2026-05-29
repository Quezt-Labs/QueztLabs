"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Globe,
  Layers,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { cn } from "@/lib/utils";
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
  const url = projectUrl(project.domain);
  const [seoOpen, setSeoOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className={cn(
          "bg-gradient-to-br p-5 text-white",
          project.accent,
          variant === "featured" && "sm:p-6",
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-white/70">
              {project.framework === "nextjs" ? "Next.js" : "Vite"}
            </p>
            <h3 className="mt-1 text-xl font-bold tracking-tight">
              {project.name}
            </h3>
            <p className="text-sm text-white/80">{project.tagline}</p>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
            aria-label={`Open ${project.name}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Globe className="h-3.5 w-3.5" />
          {project.domain}
        </p>

        <Collapsible
          open={seoOpen}
          onOpenChange={setSeoOpen}
          className="rounded-xl border border-border/60 bg-muted/30"
        >
          <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between gap-2 px-3 py-2.5 text-left text-xs font-medium [&[data-state=open]>svg]:rotate-180">
            SEO &amp; meta preview
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </CollapsibleTrigger>
          <CollapsibleContent className="border-t border-border/60 p-2">
            <ProjectSeoPanel
              seo={project.seo}
              domain={project.domain}
              compact
              embedded
            />
          </CollapsibleContent>
        </Collapsible>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Live site
        </a>
      </div>
    </motion.article>
  );
}

export function Portfolio({ showAllLink = true }: { showAllLink?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const filtered = useMemo(() => {
    if (activeCategory === "all") return vercelProjects;
    return vercelProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <SectionShell id="portfolio" variant="muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Portfolio"
          title="Real products. Real domains."
          description="Live work from our studio — open any site or expand a card to see production SEO meta."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-3xl mx-auto">
          {portfolioStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/60 bg-card px-3 py-4 text-center"
            >
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card border border-border/70 text-muted-foreground hover:text-foreground",
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <div key={activeCategory} className="mt-12 space-y-6">
            {featured.length > 0 ? (
              <div className="grid gap-6 lg:grid-cols-2">
                {featured.map((p, i) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    variant="featured"
                    index={i}
                  />
                ))}
              </div>
            ) : null}
            {rest.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {rest.map((p, i) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    index={featured.length + i}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </AnimatePresence>

        {showAllLink ? (
          <div className="mt-14 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium shadow-sm hover:bg-muted"
            >
              <Layers className="h-4 w-4" />
              Full portfolio
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </SectionShell>
  );
}
