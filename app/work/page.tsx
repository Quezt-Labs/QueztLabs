import SiteHeader from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { Portfolio } from "@/components/sections/portfolio";
import { BackToTop } from "@/components/ui/back-to-top";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Work & Portfolio",
  description:
    "Explore live products shipped by Quezt Labs — EdTech, fitness platforms, LMS, admin dashboards, and more on production domains.",
  path: "/work",
  keywords: [
    "Quezt Labs portfolio",
    "live products",
    "Vercel deployments",
    "EdTech MVP",
    "LMS platform",
    "Prep OS",
  ],
});

export default function WorkPage() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main className="pt-24">
        <div className="container mx-auto px-4 pb-4 sm:px-6 lg:px-8">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
        <Portfolio />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
