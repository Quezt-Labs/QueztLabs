"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  FileText,
  Hash,
  Link2,
  Search,
  Share2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ProjectSeo } from "@/lib/vercel-projects";
import { hasRichSeo } from "@/lib/vercel-projects";

export function ProjectSeoPanel({
  seo,
  domain,
  compact = false,
}: {
  seo: ProjectSeo;
  domain: string;
  compact?: boolean;
}) {
  const displayTitle = seo.ogTitle || seo.title;
  const displayDescription = seo.ogDescription || seo.description;
  const keywordPreview = seo.keywords?.slice(0, compact ? 3 : 5) ?? [];
  const rich = hasRichSeo(seo);

  return (
    <div className="rounded-xl border border-border/70 bg-muted/40 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border/60 bg-background/80 px-3 py-2">
        <Search className="h-3.5 w-3.5 text-accent" aria-hidden />
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          SEO & social preview
        </span>
        {rich && (
          <Badge
            variant="secondary"
            className="ml-auto text-[10px] px-1.5 py-0 h-5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20"
          >
            Rich meta
          </Badge>
        )}
      </div>

      {seo.ogImage && !compact && (
        <div className="relative aspect-[1.91/1] w-full border-b border-border/60 bg-muted">
          <Image
            src={seo.ogImage}
            alt={`${displayTitle} Open Graph preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            unoptimized
          />
          <div className="absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
            og:image
          </div>
        </div>
      )}

      <div className="space-y-3 p-3">
        <div className="space-y-1">
          <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Google / &lt;title&gt;
          </p>
          <p className="text-sm font-semibold leading-snug text-foreground line-clamp-2">
            {seo.title || displayTitle}
          </p>
        </div>

        <div className="space-y-1">
          <p className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            <FileText className="h-3 w-3" />
            Meta description
          </p>
          <p
            className={cn(
              "text-xs leading-relaxed text-muted-foreground",
              compact ? "line-clamp-2" : "line-clamp-3",
            )}
          >
            {seo.description || displayDescription || "—"}
          </p>
        </div>

        {(seo.ogTitle || seo.ogDescription) && (
          <div className="rounded-lg border border-border/50 bg-background/60 p-2.5 space-y-1.5">
            <p className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              <Share2 className="h-3 w-3" />
              Open Graph
            </p>
            {seo.ogTitle && seo.ogTitle !== seo.title && (
              <p className="text-xs font-medium line-clamp-1">{seo.ogTitle}</p>
            )}
            {seo.ogDescription && seo.ogDescription !== seo.description && (
              <p className="text-[11px] text-muted-foreground line-clamp-2">
                {seo.ogDescription}
              </p>
            )}
          </div>
        )}

        {keywordPreview.length > 0 && (
          <div className="space-y-1.5">
            <p className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              <Hash className="h-3 w-3" />
              Keywords
            </p>
            <div className="flex flex-wrap gap-1">
              {keywordPreview.map((kw) => (
                <span
                  key={kw}
                  className="rounded-md bg-background border border-border/60 px-1.5 py-0.5 text-[10px] text-muted-foreground"
                >
                  {kw}
                </span>
              ))}
              {(seo.keywords?.length ?? 0) > keywordPreview.length && (
                <span className="text-[10px] text-muted-foreground self-center">
                  +{(seo.keywords?.length ?? 0) - keywordPreview.length}
                </span>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {seo.robots && (
            <SeoChip
              icon={CheckCircle2}
              label={seo.robots.includes("noindex") ? "No index" : "Indexable"}
              variant={seo.robots.includes("noindex") ? "muted" : "success"}
            />
          )}
          {seo.canonical && (
            <SeoChip icon={Link2} label="Canonical" variant="default" />
          )}
          {seo.twitterTitle && (
            <SeoChip icon={Share2} label="Twitter card" variant="default" />
          )}
          {seo.ogImage && compact && (
            <SeoChip icon={Share2} label="OG image" variant="default" />
          )}
        </div>

        <p className="truncate text-[11px] text-emerald-700/90 dark:text-emerald-400/90">
          {domain}
        </p>
      </div>
    </div>
  );
}

function SeoChip({
  icon: Icon,
  label,
  variant,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  variant: "default" | "success" | "muted";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium border",
        variant === "success" &&
          "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/20",
        variant === "muted" && "bg-muted text-muted-foreground border-border",
        variant === "default" &&
          "bg-background text-foreground border-border/70",
      )}
    >
      <Icon className="h-2.5 w-2.5" aria-hidden />
      {label}
    </span>
  );
}
