import { readMarkdownDir } from "@/lib/content";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
};

function parsePost(entry: {
  slug: string;
  data: Record<string, unknown>;
  content: string;
}): BlogPost {
  const d = entry.data;
  return {
    slug: entry.slug,
    title: String(d.title ?? ""),
    excerpt: String(d.excerpt ?? ""),
    content: entry.content,
    author: "Quezt Labs",
    authorRole: String(d.authorRole ?? "Quezt Labs"),
    authorAvatar: String(d.authorAvatar ?? "/logo.png"),
    date: String(d.date ?? new Date().toISOString().slice(0, 10)),
    readTime: String(d.readTime ?? "5 min read"),
    category: String(d.category ?? "Engineering"),
    tags: Array.isArray(d.tags) ? d.tags.map(String) : [],
    image: String(d.image ?? "/placeholder.svg"),
    featured: Boolean(d.featured),
  };
}

export function getAllBlogPosts(): BlogPost[] {
  return readMarkdownDir("content/blog")
    .map(parsePost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** Metadata-only list for client components (no markdown body). */
export function getBlogPostSummaries(): Omit<BlogPost, "content">[] {
  return getAllBlogPosts().map(({ content: _c, ...rest }) => rest);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((p) => p.slug === slug);
}

export function getBlogCategories(): string[] {
  const cats = new Set(getAllBlogPosts().map((p) => p.category));
  return ["All", ...Array.from(cats).sort()];
}

/** @deprecated Use slug — kept for sitemap / legacy */
export function blogPostId(post: BlogPost) {
  return post.slug;
}
