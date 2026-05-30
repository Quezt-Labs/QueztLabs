import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SubPageShell } from "@/components/layout/sub-page-shell";
import { PageHero } from "@/components/ui/page-hero";
import { getAllCaseStudies } from "@/lib/case-studies";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies | Shipped Products",
  description:
    "Real case studies from Quezt Labs — Prep OS, QueztLearn, GrindKaro, Velo Coach, and live Vercel deployments.",
  path: "/case-studies",
  keywords: [
    "case studies",
    "product development",
    "Prep OS",
    "QueztLearn",
    "GrindKaro",
    "Velo Coach",
    "MVP case study",
  ],
});

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <SubPageShell backHref="/resources" backLabel="All resources">
      <PageHero
        badge="Case studies"
        title="Stories behind"
        titleAccent="shipped products"
        description="Real builds from our portfolio — Prep OS, QueztLearn, GrindKaro, Velo Coach — with stack, outcomes, and live links."
        meta={`${caseStudies.length} project stories`}
      />

      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-brand-border bg-brand-muted p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-semibold">Full portfolio with SEO panels</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Every live domain, meta tags, and framework — on one page.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Open /work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.id}`}
                className="card-lift group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      {study.services.slice(0, 3).map((service) => (
                        <span
                          key={service}
                          className="rounded-full bg-white/20 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {study.title}
                    </h3>
                    <p className="text-sm text-white/80">{study.subtitle}</p>
                  </div>
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="mb-4 text-sm text-muted-foreground">
                    {study.description}
                  </p>
                  <div className="flex gap-6">
                    {study.metrics.slice(0, 3).map((metric) => (
                      <div key={metric.label}>
                        <p className="text-xl font-bold">{metric.value}</p>
                        <p className="text-xs text-muted-foreground">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
