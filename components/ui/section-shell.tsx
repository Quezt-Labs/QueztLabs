import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionVariant = "default" | "muted" | "contrast";

const variants: Record<SectionVariant, string> = {
  default: "bg-background",
  muted: "bg-muted/40 border-y border-border/50",
  contrast: "bg-foreground text-background",
};

export function SectionShell({
  id,
  variant = "default",
  className,
  children,
}: {
  id?: string;
  variant?: SectionVariant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 lg:py-32 overflow-hidden",
        variants[variant],
        className,
      )}
    >
      {children}
    </section>
  );
}
