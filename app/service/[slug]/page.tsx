import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { SubPageShell } from "@/components/layout/sub-page-shell";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";
import { services, calBookingUrl } from "@/lib/data";
import { JsonLdScripts } from "@/components/seo/json-ld";
import { absoluteUrl, breadcrumbSchema, pageMetadata } from "@/lib/seo";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

const categoryLabels: Record<string, string> = {
  tech: "Tech",
  business: "Business Solutions",
  product: "Product",
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return pageMetadata({
    title: service.title,
    description: service.description,
    path: `/service/${service.slug}`,
    keywords: [service.title, service.category, "Quezt Labs services"],
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: absoluteUrl(`/service/${service.slug}`),
      provider: { "@id": "https://queztlabs.tech/#organization" },
      areaServed: "IN",
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/#services" },
      { name: service.title, path: `/service/${service.slug}` },
    ]),
  ];

  return (
    <SubPageShell backHref="/#services" backLabel="All services">
      <JsonLdScripts schemas={schemas} />

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-foreground">
              Services
            </Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="badge-pill mb-4 inline-block">
              {categoryLabels[service.category] || service.category}
            </span>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-xl leading-relaxed text-muted-foreground">
              {service.description}
            </p>

            {service.features?.length ? (
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-md bg-muted px-2.5 py-1 text-sm text-muted-foreground"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            ) : null}

            <Button className="mt-8" asChild>
              <a href={calBookingUrl} target="_blank" rel="noopener noreferrer">
                Book strategy call
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <SectionShell variant="muted" className="!py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold">What we deliver</h2>
            <ul className="space-y-4">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="brand-dot mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold">Ready to get started?</h2>
            <p className="mb-8 text-muted-foreground">
              Let&apos;s discuss how {service.title} fits your roadmap.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a
                  href={calBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book strategy call
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
