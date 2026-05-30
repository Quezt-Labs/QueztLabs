/**
 * Tools, products, and extensions built or maintained by Quezt Labs.
 */

export type ToolCategory =
  | "all"
  | "product"
  | "extension"
  | "opensource"
  | "utility";

export type ToolItem = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  category: Exclude<ToolCategory, "all">;
  tags: string[];
  status: "live" | "beta" | "coming-soon";
  featured?: boolean;
};

export const toolCategories: { id: ToolCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "product", label: "Products" },
  { id: "extension", label: "Extensions" },
  { id: "utility", label: "Utilities" },
  { id: "opensource", label: "Open source" },
];

export const tools: ToolItem[] = [
  {
    id: "prep-os",
    name: "Prep OS",
    tagline: "Interview prep desktop",
    description:
      "Desktop sprint cockpit for tech interviews — 7-day plans, Capture→AI, focus lock, and placement-season workflows.",
    url: "https://prep-os.queztlabs.tech",
    category: "product",
    tags: ["Electron", "Next.js", "EdTech"],
    status: "live",
    featured: true,
  },
  {
    id: "queztlearn",
    name: "QueztLearn LMS",
    tagline: "Learning platform",
    description:
      "Multi-tenant LMS with courses, tests, video progress, and org-specific branding on production domains.",
    url: "https://www.queztlearn.com",
    category: "product",
    tags: ["Next.js", "LMS", "EdTech"],
    status: "live",
    featured: true,
  },
  {
    id: "grindkaro-app",
    name: "GrindKaro",
    tagline: "Fitness coaching app",
    description:
      "Member app with digital books, PDF reader, catalog, and subscription flows for the GrindKaro ecosystem.",
    url: "https://app.grindkaro.in",
    category: "product",
    tags: ["Vite", "React", "Fitness"],
    status: "live",
    featured: true,
  },
  {
    id: "grindkaro-admin",
    name: "GrindKaro Admin",
    tagline: "Ops dashboard",
    description:
      "Internal admin for content, purchases, and day-to-day operations across GrindKaro products.",
    url: "https://admin.grindkaro.in",
    category: "utility",
    tags: ["Vite", "Admin", "Fitness"],
    status: "live",
  },
  {
    id: "velo-coach",
    name: "VELO Coach",
    tagline: "AI gym coaching",
    description:
      "Browser-based pose detection, rep counting, and live coaching sessions — computer vision in the wild.",
    url: "https://velo-coach.vercel.app",
    category: "product",
    tags: ["AI", "WebRTC", "Fitness"],
    status: "live",
  },
  {
    id: "swift-checkout",
    name: "Swift Checkout",
    tagline: "Checkout experiments",
    description:
      "Minimal checkout flow for testing conversion patterns, payment UX, and fast iteration on Vite.",
    url: "https://swift-checkout-flow.vercel.app",
    category: "utility",
    tags: ["Vite", "Commerce"],
    status: "live",
  },
  {
    id: "queztlabs-site",
    name: "Quezt Labs Site",
    tagline: "This marketing site",
    description:
      "Open Next.js marketing site — portfolio SEO panels, Lenis scroll, and Vercel-deployed architecture.",
    url: "https://www.queztlabs.tech",
    category: "opensource",
    tags: ["Next.js", "Tailwind", "Vercel"],
    status: "live",
  },
  {
    id: "browser-extension-kit",
    name: "Extension starter kit",
    tagline: "Chrome / Firefox",
    description:
      "Internal boilerplate for MV3 extensions — React popup, content scripts, and store-ready packaging. Available on request for client projects.",
    url: "/#contact",
    category: "extension",
    tags: ["Chrome", "Manifest V3", "React"],
    status: "coming-soon",
  },
];
