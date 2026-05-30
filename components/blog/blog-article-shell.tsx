"use client";

import type { ReactNode } from "react";
import {
  BLOG_ARTICLE_COLUMN_CLASS,
  BLOG_ARTICLE_LAYOUT_CLASS,
  BLOG_ARTICLE_SIDEBAR_CLASS,
} from "@/lib/blog-layout";
import { cn } from "@/lib/utils";
import type { ArticleHeading } from "@/lib/extract-headings";
import {
  ArticleToc,
  ArticleTocCollapsible,
} from "@/components/blog/article-toc";
import { BlogReadingProgress } from "@/components/blog/blog-reading-progress";

export function BlogArticleShell({
  headings,
  children,
}: {
  headings: ArticleHeading[];
  children: ReactNode;
}) {
  const showToc = headings.length >= 2;

  return (
    <>
      <BlogReadingProgress targetId="article-content" />

      <div className="container mx-auto px-4 py-8 pb-16 sm:px-6 sm:py-10 sm:pb-20 lg:px-8">
        <div
          className={cn(
            showToc
              ? BLOG_ARTICLE_LAYOUT_CLASS
              : "mx-auto w-full max-w-[42rem]",
          )}
        >
          {showToc ? (
            <ArticleTocCollapsible
              headings={headings}
              className="mb-6 xl:hidden"
            />
          ) : null}

          <div className={cn(showToc && "xl:flex xl:items-start xl:gap-14")}>
            <div id="article-content" className={BLOG_ARTICLE_COLUMN_CLASS}>
              {children}
            </div>

            {showToc ? (
              <aside className={BLOG_ARTICLE_SIDEBAR_CLASS}>
                <div className="sticky top-28">
                  <ArticleToc headings={headings} />
                </div>
              </aside>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
