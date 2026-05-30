import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { BlogPostCover } from "@/components/blog/blog-post-cover";
import { TagList, TagPill } from "@/components/ui/tag-pill";
import {
  BLOG_ARTICLE_COLUMN_CLASS,
  BLOG_ARTICLE_LAYOUT_CLASS,
  BLOG_ARTICLE_SIDEBAR_CLASS,
} from "@/lib/blog-layout";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog";

export function BlogArticleHero({
  post,
  hasToc = false,
}: {
  post: BlogPost;
  hasToc?: boolean;
}) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="border-b border-border/60 bg-brand-gradient">
      <BlogPostCover
        slug={post.slug}
        title={post.title}
        category={post.category}
        className="aspect-[2.2/1] w-full xl:hidden"
        showLabel
      />

      <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className={BLOG_ARTICLE_LAYOUT_CLASS}>
          <div className={cn(hasToc && "xl:flex xl:items-start xl:gap-14")}>
            <div className={BLOG_ARTICLE_COLUMN_CLASS}>
              <div className="flex flex-wrap items-center gap-2">
                <TagPill className="bg-brand-muted font-semibold text-brand">
                  {post.category}
                </TagPill>
                <TagList tags={post.tags} />
              </div>

              <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
                {post.title}
              </h1>

              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border/60 pt-6">
                <div className="flex items-center gap-2.5">
                  <Image
                    src={post.authorAvatar || "/logo.png"}
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-lg border border-border/60 bg-card p-0.5"
                  />
                  <div>
                    <p className="text-sm font-medium">{post.author}</p>
                    <p className="text-xs text-muted-foreground">
                      Quezt Labs team
                    </p>
                  </div>
                </div>
                <span
                  className="hidden h-8 w-px bg-border sm:block"
                  aria-hidden
                />
                <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 shrink-0" aria-hidden />
                    <time dateTime={post.date}>{formattedDate}</time>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 shrink-0" aria-hidden />
                    {post.readTime}
                  </li>
                </ul>
              </div>
            </div>

            <div className={cn(BLOG_ARTICLE_SIDEBAR_CLASS, "mt-8 xl:mt-0")}>
              <BlogPostCover
                slug={post.slug}
                title={post.title}
                category={post.category}
                className="aspect-[4/3] rounded-2xl shadow-md ring-1 ring-border/50"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
