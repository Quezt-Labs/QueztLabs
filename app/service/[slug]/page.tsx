import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { services, calBookingUrl } from "@/lib/data";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

const categoryLabels: Record<string, string> = {
  tech: "Tech",
  business: "Business Solutions",
  product: "Product",
};

/**
 * Generate static params for all services
 */
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/**
 * Generate dynamic metadata for each service
 */
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Quezt Labs`,
      description: service.description,
    },
  };
}

/**
 * Service detail page - PW LeapX style
 */
export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Quezt Labs",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/#services"
                className="hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <span>/</span>
              <span className="text-foreground">{service.title}</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/30 text-foreground mb-4">
                {categoryLabels[service.category] || service.category}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                {service.title}
              </h1>
              <p className="mt-4 text-xl text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <Button className="mt-8" asChild>
                <a
                  href={calBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Strategy Call
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">What We Deliver</h2>
              <p className="text-muted-foreground mb-8">
                Comprehensive features designed to accelerate your
                startup&apos;s growth
              </p>
              <ul className="space-y-4">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Ready to Get Started */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">
                Let&apos;s discuss how {service.title} can accelerate your
                startup&apos;s growth. Schedule a free consultation with our
                experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a
                    href={calBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Strategy Call
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#services">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
