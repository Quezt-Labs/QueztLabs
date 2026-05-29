/**
 * Technologies Quezt Labs ships with — shown on homepage & proposals.
 */

export type TechStackCategory = {
  id: string;
  label: string;
  description: string;
  items: string[];
};

export const techStackCategories: TechStackCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Fast, SEO-friendly UIs and marketing sites",
    items: ["React", "Next.js", "Astro", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "iOS & Android from one codebase",
    items: ["React Native", "Expo"],
  },
  {
    id: "backend",
    label: "Backend",
    description: "APIs, microservices, and real-time systems",
    items: ["Node.js", "NestJS", "REST", "GraphQL"],
  },
  {
    id: "data",
    label: "Data & storage",
    description: "Relational, document, and typed ORMs",
    items: ["PostgreSQL", "MongoDB", "Drizzle", "SQL"],
  },
  {
    id: "infra",
    label: "Infra & messaging",
    description: "Caching, queues, and scale-ready plumbing",
    items: ["Redis", "Kafka", "Docker", "CI/CD"],
  },
  {
    id: "cloud",
    label: "Cloud & deploy",
    description: "Production hosting and observability",
    items: ["Vercel", "AWS", "GCP", "Supabase"],
  },
];

export const techStackHighlight =
  "React · Next.js · Astro · Node · NestJS · Drizzle · Postgres · Mongo · Redis · Kafka · React Native — and more";
