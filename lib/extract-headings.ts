import { slugify } from "@/lib/utils";

export type ArticleHeading = {
  id: string;
  text: string;
  level: 2 | 3;
};

/** Pull h2/h3 from markdown for table of contents (skips frontmatter body title). */
export function extractHeadings(markdown: string): ArticleHeading[] {
  const headings: ArticleHeading[] = [];
  for (const line of markdown.split("\n")) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (!match) continue;
    const level = match[1].length as 2 | 3;
    const text = match[2].replace(/\*\*/g, "").replace(/`/g, "").trim();
    if (!text) continue;
    headings.push({ level, text, id: slugify(text) });
  }
  return headings;
}
