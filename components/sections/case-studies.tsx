import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { getCaseStudySummaries } from "@/lib/case-studies";

export function CaseStudies() {
  const featuredCases = getCaseStudySummaries()
    .filter((cs) => cs.featured)
    .slice(0, 3);

  return (
    <section id="case-studies" className="bg-muted/50 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Case Studies"
          title="Real products, real results"
          description="Shipped work from our portfolio — Prep OS, QueztLearn, GrindKaro, and more."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-10">
          {featuredCases.map((caseStudy) => (
            <Link
              key={caseStudy.id}
              href={`/case-studies/${caseStudy.id}`}
              className="group grid items-center gap-8 rounded-2xl border border-border/60 bg-card p-6 md:grid-cols-2"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                <Image
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={caseStudy.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{caseStudy.title}</h3>
                <p className="mt-1 text-muted-foreground italic">
                  {caseStudy.subtitle}
                </p>
                <p className="mt-4 line-clamp-2 text-sm text-muted-foreground">
                  {caseStudy.description}
                </p>
                <div className="mt-4 flex gap-6">
                  {caseStudy.metrics.slice(0, 3).map((metric) => (
                    <div key={metric.label}>
                      <p className="text-lg font-semibold">{metric.value}</p>
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

        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="/case-studies">
              All case studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
