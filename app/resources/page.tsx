import { BookOpen, Briefcase, FileText, Wrench } from "lucide-react";
import { SubPageShell } from "@/components/layout/sub-page-shell";
import { HubCard } from "@/components/ui/hub-card";
import { PageHero } from "@/components/ui/page-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Resources",
  description:
    "Blog, case studies, tools, and live portfolio — everything we publish from Quezt Labs.",
  path: "/resources",
  keywords: [
    "Quezt Labs resources",
    "technical blog",
    "case studies",
    "developer tools",
    "startup portfolio",
  ],
});

const hubs = [
  {
    title: "Technical blog",
    description:
      "Deep dives on Next.js, React Native, databases, and how we ship MVPs fast.",
    href: "/blog",
    icon: FileText,
    cta: "Read articles",
  },
  {
    title: "Case studies",
    description:
      "Narrative breakdowns of product builds — strategy, stack, and outcomes.",
    href: "/case-studies",
    icon: BookOpen,
    cta: "View stories",
  },
  {
    title: "Live portfolio",
    description:
      "Every Vercel-deployed product with real domains, SEO previews, and stack tags.",
    href: "/work",
    icon: Briefcase,
    cta: "See live work",
  },
  {
    title: "Tools & extensions",
    description:
      "Prep OS, QueztLearn, GrindKaro, utilities, and extension kits you can try today.",
    href: "/tools",
    icon: Wrench,
    cta: "Browse tools",
  },
];

export default function ResourcesPage() {
  return (
    <SubPageShell>
      <PageHero
        badge="Resources"
        title="Learn how we"
        titleAccent="build"
        description="One hub for technical posts, case studies, shipped products, and tools — so you can see our thinking and our output."
        meta="Blog · case studies · portfolio · tools"
      />

      <section className="pb-24 pt-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {hubs.map((hub) => (
              <HubCard key={hub.href} {...hub} />
            ))}
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
