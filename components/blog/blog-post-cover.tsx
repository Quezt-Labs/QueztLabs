import { cn } from "@/lib/utils";
import {
  coverInitials,
  coverPaletteFor,
  type CoverPalette,
} from "@/lib/blog-cover-art";

function Pattern({
  palette,
  patternId,
  className,
}: {
  palette: CoverPalette;
  patternId: string;
  className?: string;
}) {
  const { pattern } = palette;
  if (pattern === 0) {
    return (
      <svg
        className={cn(
          "absolute inset-0 h-full w-full opacity-[0.35]",
          className,
        )}
        aria-hidden
      >
        <defs>
          <pattern
            id={patternId}
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    );
  }
  if (pattern === 1) {
    return (
      <div
        className={cn(
          "absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-40 blur-2xl",
          className,
        )}
        style={{ background: palette.via }}
        aria-hidden
      />
    );
  }
  if (pattern === 2) {
    return (
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent",
          className,
        )}
        aria-hidden
      />
    );
  }
  return (
    <div
      className={cn(
        "absolute inset-4 rounded-2xl border border-white/25 opacity-60",
        className,
      )}
      aria-hidden
    />
  );
}

export function BlogPostCover({
  slug,
  title,
  category,
  className,
  showLabel = true,
}: {
  slug: string;
  title: string;
  category: string;
  className?: string;
  showLabel?: boolean;
}) {
  const palette = coverPaletteFor(slug, category);
  const initials = coverInitials(title);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        background: `linear-gradient(145deg, ${palette.from}, ${palette.via} 45%, ${palette.to})`,
      }}
      role="img"
      aria-label={`Cover art for ${title}`}
    >
      <Pattern
        palette={palette}
        patternId={`cover-grid-${slug}`}
        className="text-white"
      />
      {showLabel ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span
            className="font-serif text-4xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-5xl"
            style={{ textShadow: `0 2px 24px ${palette.accent}` }}
          >
            {initials}
          </span>
          <span className="mt-3 max-w-[85%] truncate text-xs font-medium uppercase tracking-widest text-white/85">
            {category}
          </span>
        </div>
      ) : null}
      <div
        className="noise-overlay pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
      />
    </div>
  );
}
