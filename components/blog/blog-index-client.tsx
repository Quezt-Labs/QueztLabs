"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog";
import { BlogPostCover } from "@/components/blog/blog-post-cover";
import { CategoryChips } from "@/components/ui/category-chips";
import { TagList } from "@/components/ui/tag-pill";
import { SectionShell } from "@/components/ui/section-shell";
import { Input } from "@/components/ui/input";

type PostSummary = Omit<BlogPost, "content">;

function PostCover({
  post,
  className,
}: {
  post: PostSummary;
  className?: string;
}) {
  return (
    <BlogPostCover
      slug={post.slug}
      title={post.title}
      category={post.category}
      className={cn(
        "transition-transform duration-500 group-hover:scale-[1.02]",
        className,
      )}
    />
  );
}

export function BlogIndexClient({
  posts,
  categories,
}: {
  posts: PostSummary[];
  categories: string[];
}) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = posts;
    if (category !== "All") {
      list = list.filter((p) => p.category === category);
    }
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }, [posts, category, query]);

  const featuredPost = filtered.find((p) => p.featured) ?? filtered[0];
  const otherPosts = filtered.filter((p) => p.slug !== featuredPost?.slug);

  return (
    <>
      <div className="container mx-auto px-4 pb-8 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-md">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <Input
            type="search"
            placeholder="Search articles, tags, topics…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-11 rounded-full border-border/80 bg-card pl-10 shadow-sm"
            aria-label="Search blog articles"
          />
        </div>
        <div className="mt-8">
          <CategoryChips
            categories={categories}
            value={category}
            onChange={setCategory}
          />
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          {filtered.length} article{filtered.length === 1 ? "" : "s"}
          {category !== "All" ? ` in ${category}` : ""}
          {query.trim() ? ` matching “${query.trim()}”` : ""}
        </p>
      </div>

      {featuredPost ? (
        <section className="pb-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="card-lift group block overflow-hidden rounded-3xl border border-brand-border bg-brand-gradient shadow-md ring-1 ring-black/[0.03]"
            >
              <div className="grid lg:grid-cols-2">
                <PostCover
                  post={featuredPost}
                  className="aspect-[16/10] min-h-[220px] lg:aspect-auto lg:min-h-[300px]"
                />
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                    Featured
                  </p>
                  <TagList tags={featuredPost.tags} className="mt-3" />
                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-balance group-hover:underline underline-offset-4 lg:text-3xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-base leading-relaxed text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>
                  <p className="mt-6 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {featuredPost.category}
                    </span>
                    {" · "}
                    {featuredPost.readTime}
                    {" · "}
                    {new Date(featuredPost.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      <SectionShell variant="muted" className="!py-14 lg:!py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold tracking-tight">All articles</h2>

          {filtered.length === 0 ? (
            <p className="mt-10 text-center text-muted-foreground">
              No posts match — try another search or category.
            </p>
          ) : otherPosts.length === 0 && featuredPost ? null : (
            <ul className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {otherPosts.map((post) => (
                <li key={post.slug}>
                  <article className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm hover:border-brand-border">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex min-h-0 flex-1 flex-col"
                    >
                      <PostCover
                        post={post}
                        className="aspect-[16/10] shrink-0"
                      />
                      <div className="flex flex-1 flex-col p-5">
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="font-medium text-brand">
                            {post.category}
                          </span>
                          <span className="text-muted-foreground">
                            {post.readTime}
                          </span>
                        </div>
                        <TagList tags={post.tags} className="mt-3" />
                        <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight text-balance group-hover:underline underline-offset-4 sm:text-lg">
                          {post.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>
                        <p className="mt-4 border-t border-border/60 pt-3 text-xs text-muted-foreground">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </SectionShell>
    </>
  );
}
