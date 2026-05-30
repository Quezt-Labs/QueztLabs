import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Mail } from "lucide-react";
import { SubPageShell } from "@/components/layout/sub-page-shell";
import { company } from "@/lib/data";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Thank You",
  description: "Thank you for reaching out. We'll get back to you soon.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <SubPageShell>
      <section className="flex min-h-[60vh] items-center py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-muted">
                <CheckCircle className="h-12 w-12 text-brand" />
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Thank you!</h1>

            <p className="mb-8 text-lg text-muted-foreground">
              We&apos;ve received your message and will get back to you within
              one business day at{" "}
              <a
                href={`mailto:${company.email}`}
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                {company.email}
              </a>
              .
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/">
                  Back to home
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`mailto:${company.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email us directly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SubPageShell>
  );
}
