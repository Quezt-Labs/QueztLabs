import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function IconBox({
  children,
  className,
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-xl bg-brand-muted text-brand transition-colors group-hover:bg-brand-muted/80",
        size === "sm" && "h-10 w-10",
        size === "md" && "h-11 w-11",
        size === "lg" && "h-12 w-12",
        className,
      )}
    >
      {children}
    </div>
  );
}
