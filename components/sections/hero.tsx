import Link from "next/link";
import { calBookingUrl } from "@/lib/data";
import { vercelProjects } from "@/lib/vercel-projects";
import { ArrowRight, ArrowUpRight, Globe, Sparkles } from "lucide-react";

const stats = [
  { value: "12+", label: "Live products" },
  { value: "6–8 wks", label: "Typical MVP" },
  { value: "1:1", label: "Founder-led" },
];

const featured = vercelProjects.filter((p) => p.featured).slice(0, 3);

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-24">
      <div className="noise-overlay pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 max-md:opacity-60">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[min(100%,900px)] -translate-x-1/2 rounded-full bg-gradient-to-b from-[oklch(0.92_0.06_295)] via-accent/40 to-transparent blur-2xl md:blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-100/70 blur-2xl md:blur-3xl max-md:hidden" />
      </div>

      <div className="container mx-auto grid items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div itemScope itemType="https://schema.org/Organization">
          <div className="animate-fade-up">
            <span className="badge-pill">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Product studio · Delhi, India
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl xl:text-[3.5rem]">
            We design &amp; ship{" "}
            <span className="gradient-text font-serif italic font-normal">
              products
            </span>{" "}
            founders can scale
          </h1>

          <p className="animate-fade-up mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground [animation-delay:100ms]">
            MVPs, web apps, and mobile — production-ready code, real domains,
            and SEO that works. No bloated agency process.
          </p>

          <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center [animation-delay:150ms]">
            <a
              href={calBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book discovery call
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
            <Link
              href="#portfolio"
              className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background/60 px-6 text-sm font-medium transition-colors hover:bg-muted"
            >
              See our work
            </Link>
          </div>

          <dl className="animate-fade-up mt-12 grid grid-cols-3 gap-4 border-t border-border/60 pt-8 [animation-delay:200ms]">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-up relative mx-auto w-full max-w-md lg:max-w-none [animation-delay:150ms]">
          <div className="glass-card rounded-2xl p-2 shadow-2xl shadow-[oklch(0.55_0.2_285/0.12)]">
            <div className="overflow-hidden rounded-xl border border-border/60 bg-card">
              <div className="flex items-center gap-2 border-b border-border/60 bg-muted/50 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                <span className="ml-2 truncate text-xs text-muted-foreground">
                  queztlabs.tech — portfolio
                </span>
              </div>
              <ul className="divide-y divide-border/60 p-2">
                {featured.map((project) => (
                  <li key={project.id}>
                    <a
                      href={`https://${project.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-muted/60"
                    >
                      <div className="min-w-0">
                        <p className="truncate font-medium">{project.name}</p>
                        <p className="flex items-center gap-1 truncate text-xs text-muted-foreground">
                          <Globe className="h-3 w-3 shrink-0" aria-hidden />
                          {project.domain}
                        </p>
                      </div>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-border/80 bg-card px-4 py-3 shadow-lg sm:block">
            <p className="text-xs text-muted-foreground">Latest ship</p>
            <p className="text-sm font-semibold">Prep OS · EdTech</p>
          </div>
        </div>
      </div>
    </section>
  );
}
