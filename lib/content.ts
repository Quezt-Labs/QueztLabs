import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function readMarkdownDir(dir: string) {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) return [];

  return fs
    .readdirSync(fullPath)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(fullPath, file), "utf8");
      const { data, content } = matter(raw);
      return { slug, data, content: content.trim() };
    });
}
