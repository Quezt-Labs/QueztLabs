"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Chrome,
  Code2,
  Package,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CategoryChips } from "@/components/ui/category-chips";
import { IconBox } from "@/components/ui/icon-box";
import { cn } from "@/lib/utils";
import { toolCategories, tools, type ToolItem } from "@/lib/tools";

const categoryIcons: Record<string, LucideIcon> = {
  product: Package,
  extension: Chrome,
  utility: Wrench,
  opensource: Code2,
};

const statusLabel: Record<ToolItem["status"], string> = {
  live: "Live",
  beta: "Beta",
  "coming-soon": "Coming soon",
};

function ToolCard({ tool }: { tool: ToolItem }) {
  const Icon = categoryIcons[tool.category] ?? Sparkles;
  const external = tool.url.startsWith("http");

  return (
    <article className="card-lift flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-sm hover:border-brand-border">
      <div className="flex items-start justify-between gap-3">
        <IconBox size="md">
          <Icon className="h-5 w-5" aria-hidden />
        </IconBox>
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide",
            tool.status === "live" && "bg-emerald-500/10 text-emerald-700",
            tool.status === "beta" && "bg-amber-500/10 text-amber-800",
            tool.status === "coming-soon" && "bg-muted text-muted-foreground",
          )}
        >
          {statusLabel[tool.status]}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight">{tool.name}</h3>
      <p className="text-sm text-brand">{tool.tagline}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {tool.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {tool.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md bg-muted/80 px-2 py-0.5 text-[11px] text-muted-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>
      {tool.status === "coming-soon" ? (
        <Link
          href="/#contact"
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-brand"
        >
          Request access
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      ) : external ? (
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground"
        >
          Open tool
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      ) : (
        <Link
          href={tool.url}
          className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground"
        >
          View
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </article>
  );
}

export function ToolsPageClient() {
  const [category, setCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    if (category === "all") return tools;
    return tools.filter((t) => t.category === category);
  }, [category]);

  const featured = filtered.filter((t) => t.featured);
  const rest = filtered.filter((t) => !t.featured);

  const chipLabels = toolCategories.map((c) => c.label);
  const activeChipLabel = useMemo(() => {
    const match = toolCategories.find((c) => c.id === category);
    return match ? match.label : "All";
  }, [category]);

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CategoryChips
          categories={chipLabels}
          value={activeChipLabel}
          onChange={(label) => {
            const match = toolCategories.find((c) => c.label === label);
            setCategory(match ? match.id : "all");
          }}
        />

        <div className="mt-12 space-y-10">
          {featured.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : null}
          {rest.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : null}
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No tools in this category yet.
            </p>
          ) : null}
        </div>

        <p className="mt-16 text-center text-sm text-muted-foreground">
          Want something similar?{" "}
          <Link
            href="/#contact"
            className="font-medium text-brand underline-offset-4 hover:underline"
          >
            Tell us what you need
          </Link>{" "}
          — MVPs, extensions, or internal tools.
        </p>
      </div>
    </section>
  );
}
