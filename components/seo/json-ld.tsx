import { company } from "@/lib/data";

/**
 * JSON-LD Structured Data for SEO
 * Includes Organization, WebSite, and Breadcrumb schemas
 */
export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: "https://queztlabs.tech",
    logo: "https://queztlabs.tech/logo.png",
    description: company.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Innovation Drive",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94107",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      /*  telephone: company.phone, */
      contactType: "sales",
      email: company.email,
    },
    /* sameAs: [
      company.social.twitter,
      company.social.linkedin,
      company.social.github,
      company.social.dribbble,
    ], */
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: "https://queztlabs.tech",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://queztlabs.tech/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
