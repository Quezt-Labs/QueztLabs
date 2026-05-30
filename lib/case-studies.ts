import { readMarkdownDir } from "@/lib/content";
import { projectUrl, vercelProjects } from "@/lib/vercel-projects";

export type CaseStudyMetric = { label: string; value: string };

export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  content: string;
  client: string;
  industry: string;
  services: string[];
  metrics: CaseStudyMetric[];
  image: string;
  color: string;
  featured: boolean;
  liveUrl: string;
  domain: string;
  framework: string;
  stack: string[];
};

function parseMetrics(raw: unknown): CaseStudyMetric[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((m): m is CaseStudyMetric => {
      return (
        typeof m === "object" && m !== null && "label" in m && "value" in m
      );
    })
    .map((m) => ({ label: String(m.label), value: String(m.value) }));
}

function parsePost(entry: {
  slug: string;
  data: Record<string, unknown>;
  content: string;
}): CaseStudy {
  const d = entry.data;
  const portfolioId = String(d.portfolioId ?? entry.slug);
  const project = vercelProjects.find((p) => p.id === portfolioId);
  const domain = String(d.domain ?? project?.domain ?? "");
  const liveUrl = String(d.liveUrl ?? (domain ? projectUrl(domain) : "/work"));

  return {
    id: entry.slug,
    title: String(d.title ?? project?.name ?? entry.slug),
    subtitle: String(d.subtitle ?? project?.tagline ?? ""),
    description: String(d.description ?? project?.description ?? ""),
    longDescription: String(d.longDescription ?? ""),
    content: entry.content,
    client: String(d.client ?? "Quezt Labs"),
    industry: String(d.industry ?? "Product"),
    services: Array.isArray(d.services)
      ? d.services.map(String)
      : ["Web Development"],
    metrics: parseMetrics(d.metrics),
    image: String(d.image ?? "/placeholder.svg"),
    color: String(d.color ?? "#7c3aed"),
    featured: d.featured !== false,
    liveUrl,
    domain,
    framework: String(d.framework ?? project?.framework ?? "nextjs"),
    stack: Array.isArray(d.stack) ? d.stack.map(String) : [],
  };
}

export function getAllCaseStudies(): CaseStudy[] {
  const studies = readMarkdownDir("content/case-studies").map(parsePost);
  const featured = studies.filter((s) => s.featured);
  const rest = studies.filter((s) => !s.featured);
  return [...featured, ...rest];
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return getAllCaseStudies().find((s) => s.id === slug);
}

export type CaseStudySummary = Omit<CaseStudy, "content">;

export function getCaseStudySummaries(): CaseStudySummary[] {
  return getAllCaseStudies().map(({ content: _c, ...rest }) => rest);
}
