import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { SubPageShell } from "@/components/layout/sub-page-shell";
import { MarkdownContent } from "@/components/markdown-content";
import { Button } from "@/components/ui/button";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { JsonLdScripts } from "@/components/seo/json-ld";
import { absoluteUrl, breadcrumbSchema, pageMetadata } from "@/lib/seo";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({
    slug: study.id,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return pageMetadata({
    title: `${study.title} | Case Study`,
    description: study.description,
    path: `/case-studies/${study.id}`,
    ogImage: study.image.startsWith("http") ? study.image : study.image,
    keywords: [...study.services, study.industry, "case study", "Quezt Labs"],
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const all = getAllCaseStudies();
  const currentIndex = all.findIndex((s) => s.id === slug);
  const prevStudy = currentIndex > 0 ? all[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < all.length - 1 ? all[currentIndex + 1] : null;

  const imageUrl = study.image.startsWith("http")
    ? study.image
    : absoluteUrl(study.image);

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: study.title,
      description: study.description,
      image: imageUrl,
      url: absoluteUrl(`/case-studies/${study.id}`),
      author: { "@type": "Organization", name: "Quezt Labs" },
      publisher: { "@id": "https://queztlabs.tech/#organization" },
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Case Studies", path: "/case-studies" },
      { name: study.title, path: `/case-studies/${study.id}` },
    ]),
  ];

  return (
    <SubPageShell backHref="/case-studies" backLabel="All case studies">
      <JsonLdScripts schemas={schemas} />

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {study.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-brand-muted px-3 py-1 text-xs font-medium text-brand"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                {study.title}
              </h1>
              <p className="mt-2 text-xl text-muted-foreground">
                {study.subtitle}
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {study.longDescription}
              </p>

              {study.stack.length > 0 ? (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Client</p>
                  <p className="font-medium">{study.client}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Industry</p>
                  <p className="font-medium">{study.industry}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live product
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/#contact">Start a similar project</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <Image
                src={study.image || "/placeholder.svg"}
                alt={study.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold">Key results</h2>
          <div className="mx-auto grid max-w-3xl grid-cols-3 gap-8">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="text-4xl font-bold lg:text-5xl">{metric.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[42rem]">
            <MarkdownContent content={study.content} />
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {prevStudy ? (
              <Link
                href={`/case-studies/${prevStudy.id}`}
                className="group flex items-center gap-3"
              >
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Previous</p>
                  <p className="font-medium">{prevStudy.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextStudy ? (
              <Link
                href={`/case-studies/${nextStudy.id}`}
                className="group flex items-center gap-3 text-right"
              >
                <div>
                  <p className="text-sm text-muted-foreground">Next</p>
                  <p className="font-medium">{nextStudy.title}</p>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
