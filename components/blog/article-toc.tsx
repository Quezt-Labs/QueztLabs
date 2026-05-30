"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { ArticleHeading } from "@/lib/extract-headings";

export function ArticleToc({
  headings,
  className,
}: {
  headings: ArticleHeading[];
  className?: string;
}) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    for (const { id } of headings) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav
      aria-label="On this page"
      className={cn(
        "rounded-2xl border border-border/70 bg-card p-5 shadow-sm",
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-brand">
        On this page
      </p>
      <TocList
        headings={headings}
        activeId={activeId}
        className="mt-4 max-h-[min(70vh,28rem)] overflow-y-auto pr-1 scrollbar-hide"
      />
    </nav>
  );
}

function TocList({
  headings,
  activeId,
  className,
}: {
  headings: ArticleHeading[];
  activeId: string;
  className?: string;
}) {
  return (
    <ul className={cn("space-y-1.5 text-sm", className)}>
      {headings.map((h) => (
        <li key={h.id}>
          <a
            href={`#${h.id}`}
            className={cn(
              "block rounded-md border-l-2 py-1 pl-3 leading-snug transition-colors hover:bg-muted/50 hover:text-foreground",
              h.level === 3 && "pl-5 text-xs",
              activeId === h.id
                ? "border-brand bg-brand-muted/40 font-medium text-foreground"
                : "border-transparent text-muted-foreground",
            )}
          >
            {h.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Mobile: collapsed by default so it doesn’t push the article down. */
export function ArticleTocCollapsible({
  headings,
  className,
}: {
  headings: ArticleHeading[];
  className?: string;
}) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    for (const { id } of headings) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <details
      className={cn(
        "group rounded-2xl border border-border/70 bg-card shadow-sm",
        className,
      )}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-medium [&::-webkit-details-marker]:hidden">
        <span>
          <span className="text-brand">Contents</span>
          <span className="ml-2 text-muted-foreground">
            · {headings.length} sections
          </span>
        </span>
        <span className="text-xs text-muted-foreground transition-transform group-open:rotate-180">
          ▼
        </span>
      </summary>
      <div className="border-t border-border/60 px-3 pb-4 pt-2">
        <TocList headings={headings} activeId={activeId} />
      </div>
    </details>
  );
}
