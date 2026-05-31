import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl animate-fade-up",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {badge ? (
        <span
          className={cn(
            "badge-pill mb-5",
            light && "border-white/20 bg-white/10 text-white/90",
          )}
        >
          <span className="brand-dot" aria-hidden />
          {badge}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-bold tracking-[-0.03em] text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          light && "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-pretty",
            light ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
