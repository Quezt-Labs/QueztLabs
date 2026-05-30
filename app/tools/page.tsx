import { SubPageShell } from "@/components/layout/sub-page-shell";
import { PageHero } from "@/components/ui/page-hero";
import { ToolsPageClient } from "@/components/pages/tools-page-client";
import { tools } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tools & Extensions",
  description:
    "Products, utilities, and browser tools built by Quezt Labs — Prep OS, QueztLearn, GrindKaro, and more.",
  path: "/tools",
  keywords: [
    "Prep OS",
    "QueztLearn",
    "GrindKaro",
    "developer tools",
    "browser extensions",
    "Quezt Labs products",
  ],
});

export default function ToolsPage() {
  const liveCount = tools.filter((t) => t.status === "live").length;

  return (
    <SubPageShell backHref="/resources" backLabel="All resources">
      <PageHero
        badge="Tools & extensions"
        title="Stuff we built that you can"
        titleAccent="use"
        description="Live products, internal utilities, and extension kits from client work — all in one place."
        meta={`${tools.length} tools · ${liveCount} live now`}
      />
      <ToolsPageClient />
    </SubPageShell>
  );
}
