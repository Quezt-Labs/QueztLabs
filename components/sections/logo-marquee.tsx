"use client";

import { vercelProjects } from "@/lib/vercel-projects";

const labels = [
  ...vercelProjects.map((p) => p.name),
  "React",
  "Next.js",
  "NestJS",
  "PostgreSQL",
];

export function LogoMarquee() {
  const track = [...labels, ...labels];

  return (
    <section
      aria-label="Products and technologies"
      className="border-y border-border/50 bg-muted/30 py-6"
    >
      <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Shipped &amp; scaling in production
      </p>
      <div className="relative overflow-hidden mask-marquee">
        <div className="flex w-max animate-marquee gap-10 px-6">
          {track.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="whitespace-nowrap text-sm font-medium text-foreground/70"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
