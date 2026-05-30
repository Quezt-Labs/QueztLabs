"use client";

import type { ReactNode } from "react";
import { Children, isValidElement } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn, slugify } from "@/lib/utils";
import { MermaidDiagram } from "@/components/mermaid-diagram";

function headingText(children: ReactNode): string {
  return Children.toArray(children)
    .map((child) => {
      if (typeof child === "string") return child;
      if (isValidElement<{ children?: ReactNode }>(child)) {
        return headingText(child.props.children);
      }
      return "";
    })
    .join("")
    .trim();
}

function PreBlock({ children }: { children?: ReactNode }) {
  if (!children || typeof children !== "object") {
    return (
      <pre className="my-6 overflow-x-auto rounded-xl border border-border/60 bg-zinc-900 p-4 text-sm text-zinc-100">
        {children}
      </pre>
    );
  }

  const child = children as {
    props?: { className?: string; children?: string };
  };

  const className = child.props?.className ?? "";
  if (className.includes("language-mermaid")) {
    const chart = String(child.props?.children ?? "").replace(/\n$/, "");
    return <MermaidDiagram chart={chart} />;
  }

  return (
    <pre className="my-6 overflow-x-auto rounded-xl border border-border/60 bg-zinc-900 p-4 text-sm leading-relaxed text-zinc-100">
      <code className="font-mono text-[0.875rem]">{children}</code>
    </pre>
  );
}

export function MarkdownContent({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "blog-article prose prose-lg prose-neutral prose-brand max-w-none",
        "prose-headings:scroll-mt-28 prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground",
        "prose-p:text-foreground/90 prose-p:leading-[1.8]",
        "prose-li:text-foreground/90 prose-li:leading-relaxed",
        "prose-strong:text-foreground prose-strong:font-semibold",
        "prose-a:text-brand prose-a:font-medium prose-a:no-underline hover:prose-a:underline",
        "prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl",
        "prose-hr:my-10 prose-hr:border-border",
        "prose-blockquote:border-l-brand prose-blockquote:bg-brand-muted/50 prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:not-italic",
        "prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.9em] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        "prose-pre:p-0 prose-pre:bg-transparent",
        "prose-table:my-0 prose-th:text-left",
        className,
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          pre: PreBlock,
          h2: ({ children }) => {
            const text = headingText(children);
            const id = slugify(text);
            return (
              <h2 id={id} className="scroll-mt-28">
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const text = headingText(children);
            const id = slugify(text);
            return (
              <h3 id={id} className="scroll-mt-28">
                {children}
              </h3>
            );
          },
          table: ({ children }) => (
            <div className="not-prose my-8 w-full overflow-x-auto rounded-xl border border-border/70">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="border-b border-border bg-muted/60">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 font-semibold text-foreground">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-t border-border/60 px-4 py-3 text-muted-foreground">
              {children}
            </td>
          ),
          img: ({ alt, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              {...props}
              alt={alt ?? ""}
              className="not-prose my-8 w-full rounded-2xl border border-border/60 shadow-sm"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
