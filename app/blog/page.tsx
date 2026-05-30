import Link from "next/link";
import { SubPageShell } from "@/components/layout/sub-page-shell";
import { BlogIndexClient } from "@/components/blog/blog-index-client";
import { PageHero } from "@/components/ui/page-hero";
import { getBlogCategories, getBlogPostSummaries } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog | Builder Notes",
  description:
    "Vibe coding, AI in the editor, debugging war stories, and honest takes on shipping — not product brochures.",
  path: "/blog",
  keywords: [
    "dev blog",
    "AI tools",
    "prompt engineering",
    "Next.js",
    "vibe coding",
    "MCP agents",
    "Cursor IDE",
  ],
});

export default function BlogPage() {
  const posts = getBlogPostSummaries();
  const categories = getBlogCategories();

  return (
    <SubPageShell backHref="/resources" backLabel="All resources">
      <PageHero
        badge="Builder notes · 2026"
        title="Stuff we'd send in a team Slack,"
        titleAccent="not a pitch deck"
        description="Vibe coding, AI prompts, MCP, Gen Z founder slang — real dev writing with diagrams, not product brochures."
        meta={`${posts.length} articles · AI, culture, engineering & hot takes`}
        actions={
          <>
            <Link
              href="/feed.xml"
              className="font-medium text-brand underline-offset-4 hover:underline"
            >
              RSS feed
            </Link>
            <span className="text-muted-foreground" aria-hidden>
              ·
            </span>
            <Link
              href="/resources"
              className="text-muted-foreground underline-offset-4 hover:text-foreground"
            >
              Resource hub
            </Link>
          </>
        }
      />

      <BlogIndexClient posts={posts} categories={categories} />
    </SubPageShell>
  );
}
