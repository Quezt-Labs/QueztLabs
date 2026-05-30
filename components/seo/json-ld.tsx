import { jsonLdScript, organizationSchema, websiteSchema } from "@/lib/seo";

/** Homepage: Organization + WebSite structured data (Delhi, India). */
export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(organizationSchema())}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(websiteSchema())}
      />
    </>
  );
}

export function JsonLdScripts({
  schemas,
}: {
  schemas: Record<string, unknown>[];
}) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(schema)}
        />
      ))}
    </>
  );
}
