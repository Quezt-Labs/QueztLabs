import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Mail, Calendar } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { company } from "@/lib/data";

export const metadata = {
  title: "Thank You | Quezt Labs",
  description: "Thank you for reaching out. We'll get back to you soon.",
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-accent/30 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-accent" />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Thank You!
            </h1>

            {/* Message */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We've received your request for a free strategy call. Our team will
              review your project and get back to you within 24 hours.
            </p>

            {/* What's Next */}
            <div className="bg-muted/50 rounded-2xl p-8 mb-8 text-left">
              <h2 className="text-xl font-semibold mb-6">What happens next?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">We review your project</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team will carefully review your requirements and check if
                      we're a good fit for your project.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">We schedule your call</h3>
                    <p className="text-sm text-muted-foreground">
                      Within 24 hours, we'll email you to schedule a 30-minute
                      strategy call at a time that works for you.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">We discuss your product</h3>
                    <p className="text-sm text-muted-foreground">
                      During the call, we'll discuss your vision, timeline, and how
                      we can help you ship your MVP faster.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="outline" asChild>
                <Link href={`mailto:${company.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us Directly
                </Link>
              </Button>
              <Button asChild>
                <Link href="/">
                  Back to Home
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Additional Info */}
            <p className="text-sm text-muted-foreground">
              Need immediate assistance? Email us at{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-foreground hover:underline font-medium"
              >
                {company.email}
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
