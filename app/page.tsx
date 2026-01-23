import ResizableHeader from "@/components/layout/resizable-header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { WhyQueztLabs } from "@/components/sections/why-queztlabs";
import dynamic from "next/dynamic";
import { JsonLd } from "@/components/seo/json-ld";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";

// Lazy load below-the-fold components for better performance
const Services = dynamic(
  () =>
    import("@/components/sections/services").then((mod) => ({
      default: mod.Services,
    })),
  {
    loading: () => <div className="py-20 lg:py-32 bg-muted/50" />,
  },
);

const Process = dynamic(
  () =>
    import("@/components/sections/process").then((mod) => ({
      default: mod.Process,
    })),
  {
    loading: () => <div className="py-20 lg:py-32" />,
  },
);

const Pricing = dynamic(
  () =>
    import("@/components/sections/pricing").then((mod) => ({
      default: mod.Pricing,
    })),
  {
    loading: () => <div className="py-20 lg:py-32" />,
  },
);

const FAQ = dynamic(
  () =>
    import("@/components/sections/faq").then((mod) => ({ default: mod.FAQ })),
  {
    loading: () => <div className="py-20 lg:py-32" />,
  },
);

const Support = dynamic(
  () =>
    import("@/components/sections/support").then((mod) => ({
      default: mod.Support,
    })),
  {
    loading: () => <div className="py-20 lg:py-32" />,
  },
);

const Contact = dynamic(
  () =>
    import("@/components/sections/contact").then((mod) => ({
      default: mod.Contact,
    })),
  {
    loading: () => <div className="py-20 lg:py-32" />,
  },
);

const About = dynamic(
  () =>
    import("@/components/sections/about").then((mod) => ({
      default: mod.About,
    })),
  {
    loading: () => <div className="py-20 lg:py-32" />,
  },
);

const MVPSprint = dynamic(
  () =>
    import("@/components/sections/mvp-sprint").then((mod) => ({
      default: mod.MVPSprint,
    })),
  {
    loading: () => <div className="py-20 lg:py-32" />,
  },
);

/**
 * Home Page
 *
 * This is the main landing page for Quezt Labs.
 * All sections are lazy-loaded for optimal performance.
 *
 * Sections:
 * 1. Hero - Primary CTA and value proposition
 * 2. Services - Core offerings
 * 3. Portfolio - Featured case studies
 * 4. Stats - Key metrics
 * 5. Process - Development workflow
 * 6. Testimonials - Client feedback
 * 7. Pricing - Engagement tiers
 * 8. Blog Teaser - Recent articles
 * 9. FAQ - Common questions
 * 10. Contact - Form and info
 */

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <ScrollProgress />
      <ResizableHeader />
      <main>
        <Hero />
        <WhyQueztLabs />
        <Services />
        <MVPSprint />
        <Process />
        <About />
        <Pricing />
        <Support />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
