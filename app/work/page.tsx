import type { Metadata } from "next";
import ResizableHeader from "@/components/layout/resizable-header";
import { Footer } from "@/components/layout/footer";
import { Portfolio } from "@/components/sections/portfolio";
import { BackToTop } from "@/components/ui/back-to-top";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Work & Portfolio | Quezt Labs",
  description:
    "Explore live products shipped by Quezt Labs — EdTech, fitness platforms, LMS, admin dashboards, and more on production domains.",
  openGraph: {
    title: "Work & Portfolio | Quezt Labs",
    description:
      "Live products on Vercel — prep platforms, LMS, GrindKaro, and agency builds.",
  },
};

export default function WorkPage() {
  return (
    <>
      <ScrollProgress />
      <ResizableHeader />
      <main className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
        <Portfolio showAllLink={false} />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
