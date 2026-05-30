import { notFound } from "next/navigation";
import { SubPageShell } from "@/components/layout/sub-page-shell";
import { MarkdownContent } from "@/components/markdown-content";
import { BlogArticleFooter } from "@/components/blog/blog-article-footer";
import { BlogArticleHero } from "@/components/blog/blog-article-hero";
import { BlogArticleShell } from "@/components/blog/blog-article-shell";
import { JsonLdScripts } from "@/components/seo/json-ld";
import { extractHeadings } from "@/lib/extract-headings";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getBlogPostSummaries,
} from "@/lib/blog";
import {
  blogPostingSchema,
  breadcrumbSchema,
  pageMetadata,
  SITE_KEYWORDS,
} from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function articleBody(content: string) {
  return content.replace(/^#\s+[^\n]+\n+/, "").trim();
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [...post.tags, post.category, ...SITE_KEYWORDS.slice(0, 6)],
    type: "article",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const body = articleBody(post.content);
  const headings = extractHeadings(body);

  const allSummaries = getBlogPostSummaries();
  const currentIndex = allSummaries.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allSummaries[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allSummaries.length - 1
      ? allSummaries[currentIndex + 1]
      : null;
  const { content: _body, ...postSummary } = post;

  const schemas = [
    blogPostingSchema(post),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];

  return (
    <SubPageShell backHref="/blog" backLabel="All articles">
      <JsonLdScripts schemas={schemas} />

      <article className="overflow-x-hidden">
        <BlogArticleHero post={post} hasToc={headings.length >= 2} />

        <BlogArticleShell headings={headings}>
          <MarkdownContent content={body} />
          <BlogArticleFooter
            post={postSummary}
            allPosts={allSummaries}
            prevPost={prevPost}
            nextPost={nextPost}
          />
        </BlogArticleShell>
      </article>
    </SubPageShell>
  );
}
