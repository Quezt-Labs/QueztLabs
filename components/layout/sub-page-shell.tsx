import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { SkipToContent } from "@/components/layout/skip-to-content";

export function SubPageShell({
  children,
  backHref = "/",
  backLabel = "Back to home",
}: {
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <>
      <SkipToContent />
      <ScrollProgress />
      <SiteHeader />
      <main id="main-content" className="min-h-screen pt-20 lg:pt-24">
        <div className="container mx-auto px-4 pb-4 sm:px-6 lg:px-8">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
        </div>
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
