import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/**
 * Custom 404 Page
 */
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-9xl font-bold text-muted-foreground/20">404</p>
            <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
            <p className="mt-4 text-muted-foreground">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <Button asChild className="mt-8">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
