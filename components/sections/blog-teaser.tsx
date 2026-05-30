import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { getBlogPostSummaries } from "@/lib/blog";

export function BlogTeaser() {
  const featuredPosts = getBlogPostSummaries()
    .filter((post) => post.featured)
    .slice(0, 2);

  return (
    <section id="blog" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="From the Blog"
          title="Insights & perspectives"
          description="Thoughts on technology, design, and building great products."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {featuredPosts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative mb-4 aspect-[2/1] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mb-2 flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold group-hover:underline underline-offset-4">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
          >
            View all articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
