import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, FileText, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { getBlogPostSummaries } from "@/lib/blog";

const quickLinks = [
  {
    title: "Case studies",
    description: "How we approach builds — metrics, stack, and lessons.",
    href: "/case-studies",
    icon: BookOpen,
  },
  {
    title: "Tools & extensions",
    description: "Prep OS, QueztLearn, GrindKaro, and more you can open today.",
    href: "/tools",
    icon: Wrench,
  },
  {
    title: "All resources",
    description: "Blog, portfolio, tools — ek hi hub pe.",
    href: "/resources",
    icon: FileText,
  },
];

export function InsightsHub() {
  const recent = getBlogPostSummaries().slice(0, 2);

  return (
    <SectionShell id="insights" variant="muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader
              badge="From the notebook"
              title="Vibe coding, AI, & real bugs"
              description="Blog posts that read like Slack, not brochures — plus tools you can actually open."
              align="left"
            />
            <ul className="mt-8 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="card-lift group flex gap-4 rounded-xl border border-border/60 bg-card p-4 hover:border-brand-border"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-muted">
                      <item.icon className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 self-center text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/resources"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
            >
              View resource hub
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Latest from the blog
            </p>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              {recent.map((post) => (
                <article key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="relative mb-4 aspect-[2/1] overflow-hidden rounded-2xl bg-muted">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mb-2 flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:underline underline-offset-4">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
            <Link
              href="/blog"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
            >
              View all articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
