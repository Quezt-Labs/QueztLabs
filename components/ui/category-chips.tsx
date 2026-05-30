"use client";

import { cn } from "@/lib/utils";

export function CategoryChips({
  categories,
  value,
  onChange,
}: {
  categories: string[];
  value: string;
  onChange: (cat: string) => void;
}) {
  return (
    <div className="relative -mx-4 sm:mx-0">
      <div
        className="flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
        role="tablist"
        aria-label="Filter by category"
      >
        {categories.map((cat) => {
          const active = value === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(cat)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all",
                active
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border/80 bg-card text-muted-foreground hover:border-brand-border hover:text-foreground",
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
