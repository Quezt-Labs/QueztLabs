import Link from "next/link";
import { BlogPostCover } from "@/components/blog/blog-post-cover";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Mail,
  Rss,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/lib/blog";
import { calBookingUrl } from "@/lib/data";

type PostSummary = Omit<BlogPost, "content">;

function pickRelated(
  current: PostSummary,
  all: PostSummary[],
  limit = 2,
): PostSummary[] {
  return all
    .filter((p) => p.slug !== current.slug)
    .map((p) => ({
      post: p,
      score:
        p.tags.filter((t) => current.tags.includes(t)).length * 2 +
        (p.category === current.category ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.post);
}

export function BlogArticleFooter({
  post,
  allPosts,
  prevPost,
  nextPost,
}: {
  post: PostSummary;
  allPosts: PostSummary[];
  prevPost: PostSummary | null;
  nextPost: PostSummary | null;
}) {
  const related = pickRelated(post, allPosts);

  return (
    <div className="mt-16 space-y-12">
      {/* CTA */}
      <div className="relative overflow-hidden rounded-2xl border border-brand-border bg-brand-gradient p-8 sm:p-10">
        <div className="relative z-10 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            From the notebook
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Building something? Let&apos;s ship it.
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            MVPs, AI-assisted dev, web & mobile — founder-led team in Delhi.
            Tell us what you&apos;re making.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href={calBookingUrl} target="_blank" rel="noopener noreferrer">
                Book a call
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/#contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Keep reading */}
      {related.length > 0 ? (
        <div>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg font-semibold tracking-tight">
              Keep reading
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-brand hover:underline underline-offset-4"
            >
              All articles
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="card-lift group flex gap-4 rounded-xl border border-border/70 bg-card p-3 hover:border-brand-border"
              >
                <BlogPostCover
                  slug={item.slug}
                  title={item.title}
                  category={item.category}
                  showLabel={false}
                  className="h-20 w-24 shrink-0 rounded-lg"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-brand">
                    {item.category}
                  </p>
                  <p className="mt-1 line-clamp-2 text-sm font-semibold leading-snug group-hover:underline underline-offset-2">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      {/* Prev / next cards */}
      {(prevPost || nextPost) && (
        <nav
          className="grid gap-4 sm:grid-cols-2"
          aria-label="Article navigation"
        >
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group rounded-xl border border-border/70 bg-card p-5 transition-all hover:border-brand-border hover:shadow-sm"
            >
              <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                Previous
              </span>
              <p className="mt-2 font-semibold leading-snug group-hover:text-brand">
                {prevPost.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group rounded-xl border border-border/70 bg-card p-5 text-right transition-all hover:border-brand-border hover:shadow-sm sm:col-start-2"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                Next
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
              <p className="mt-2 font-semibold leading-snug group-hover:text-brand">
                {nextPost.title}
              </p>
            </Link>
          ) : null}
        </nav>
      )}

      {/* Explore — soft close before site footer */}
      <div className="rounded-2xl border border-border/60 bg-muted/30 px-5 py-6 sm:px-8 sm:py-7">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Explore Quezt Labs
        </p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {[
            { href: "/blog", label: "All articles", icon: BookOpen },
            { href: "/feed.xml", label: "RSS", icon: Rss, external: true },
            { href: "/resources", label: "Resources" },
            { href: "/work", label: "Portfolio" },
            {
              href: "mailto:admin@queztlabs.tech",
              label: "Write to us",
              icon: Mail,
              external: true,
            },
          ].map((item) => {
            const Icon = "icon" in item ? item.icon : null;
            const className =
              "inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-3.5 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-brand-border hover:text-brand";
            const children = (
              <>
                {Icon ? <Icon className="h-3.5 w-3.5 shrink-0" /> : null}
                {item.label}
              </>
            );
            return (
              <li key={item.href}>
                {item.external ? (
                  <a href={item.href} className={className}>
                    {children}
                  </a>
                ) : (
                  <Link href={item.href} className={className}>
                    {children}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
