 "use client";
 import Image from "next/image";
 import { ExternalLink } from "lucide-react";
 import { clientLogos } from "@/lib/data";

export default function ClientsSection() {
  const featured = clientLogos.filter((c) =>
    ["Inverted (Javelin)", "TestForce", "Grind Karo"].includes(c.name)
  );

  return (
    <section id="clients" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold">
          Featured projects we've shipped
        </h2>
        <p className="mt-2 text-muted-foreground">
          Trusted by startups and teams building products end-to-end
        </p>

        {/* Rich cards with improved styling */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {featured.map((c) => (
            <div
              key={c.name}
              className="group bg-background border border-muted/30 rounded-xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 duration-200"
            >
              <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-white/0 rounded">
                {c.logo?.startsWith("http") ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    width={80}
                    height={80}
                    className="object-contain max-h-16"
                  />
                ) : (
                  <Image
                    src={c.logo}
                    alt={`${c.name} logo`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base">{c.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                  {c.blurb ?? ""}
                </p>

                <div className="mt-4 flex items-center">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm text-white hover:opacity-95 transition"
                  >
                    View site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
