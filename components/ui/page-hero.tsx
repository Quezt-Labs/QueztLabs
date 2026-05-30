import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  badge,
  title,
  titleAccent,
  description,
  meta,
  actions,
  align = "center",
  className,
}: {
  badge?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  meta?: string;
  actions?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <header
      className={cn("border-b border-border/60 bg-brand-gradient", className)}
    >
      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
          {badge ? (
            <p className="badge-pill mb-5 inline-flex">
              <span className="brand-dot" aria-hidden />
              {badge}
            </p>
          ) : null}
          <h1
            className={cn(
              "text-4xl font-bold tracking-tight text-balance sm:text-5xl",
              titleAccent && "font-sans",
            )}
          >
            {title}
            {titleAccent ? (
              <>
                {" "}
                <span className="font-serif gradient-text">{titleAccent}</span>
              </>
            ) : null}
          </h1>
          {description ? (
            <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">
              {description}
            </p>
          ) : null}
          {meta ? (
            <p className="mt-3 text-sm text-muted-foreground">{meta}</p>
          ) : null}
          {actions ? (
            <div
              className={cn(
                "mt-6 flex flex-wrap gap-4 text-sm",
                centered && "justify-center",
              )}
            >
              {actions}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
