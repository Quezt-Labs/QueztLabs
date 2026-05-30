import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TagPill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-brand-muted px-2.5 py-0.5 text-xs font-medium text-brand",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagList({
  tags,
  max = 3,
  className,
}: {
  tags: string[];
  max?: number;
  className?: string;
}) {
  if (!tags.length) return null;
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {tags.slice(0, max).map((tag) => (
        <li key={tag}>
          <TagPill>{tag}</TagPill>
        </li>
      ))}
    </ul>
  );
}
