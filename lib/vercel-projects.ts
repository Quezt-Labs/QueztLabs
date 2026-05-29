/**
 * Live products deployed on Vercel (QueztLearn team).
 * SEO fields collected from production meta tags (last synced from live sites).
 */

export type ProjectCategory =
  | "all"
  | "edtech"
  | "fitness"
  | "commerce"
  | "marketing";

export type ProjectSeo = {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  robots?: string;
  canonical?: string;
};

export type PortfolioProject = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  domain: string;
  framework: "nextjs" | "vite";
  category: Exclude<ProjectCategory, "all">;
  github: { org: string; repo: string };
  featured: boolean;
  accent: string;
  seo: ProjectSeo;
};

export const portfolioCategories: {
  id: ProjectCategory;
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "edtech", label: "EdTech" },
  { id: "fitness", label: "Fitness" },
  { id: "commerce", label: "Commerce" },
  { id: "marketing", label: "Marketing" },
];

export const vercelProjects: PortfolioProject[] = [
  {
    id: "prep-os",
    name: "Prep OS",
    tagline: "Interview prep platform",
    description:
      "SEO-driven interview prep with dynamic blogs, structured content, and a fast Next.js experience.",
    domain: "prep-os.queztlabs.tech",
    framework: "nextjs",
    category: "edtech",
    github: { org: "iamshiv4m", repo: "prep-os" },
    featured: true,
    accent: "from-violet-600/90 via-indigo-600/80 to-blue-700/90",
    seo: {
      title: "PrepOS — Interview-ready in 7 days. One desktop.",
      description:
        "Free desktop sprint cockpit for tech interviews. 7-day prep plan, Capture→AI, focus lock & lockdown. Built for India placement season + working pros.",
      keywords: [
        "interview prep desktop app",
        "DSA preparation",
        "leetcode desktop",
        "system design interview",
        "coding interview India",
        "placement preparation",
        "PrepOS",
      ],
      ogTitle: "PrepOS — Interview-ready in 7 days. One desktop.",
      ogDescription:
        "Free desktop sprint cockpit for tech interviews. 7-day prep plan, Capture→AI, focus lock & lockdown.",
      ogImage: "https://prep-os.queztlabs.tech/og.png",
      twitterTitle: "PrepOS — Interview-ready in 7 days. One desktop.",
      twitterDescription:
        "Free desktop sprint cockpit for tech interviews. 7-day prep plan, Capture→AI, focus lock & lockdown.",
      robots: "index, follow",
      canonical: "https://prep-os.queztlabs.tech",
    },
  },
  {
    id: "quezt-learn-lms",
    name: "QueztLearn LMS",
    tagline: "Learning management system",
    description:
      "Full LMS for courses, assessments, and video progress — built for scale on Next.js.",
    domain: "www.queztlearn.com",
    framework: "nextjs",
    category: "edtech",
    github: { org: "Quezt-Labs", repo: "queztlearn-lms" },
    featured: true,
    accent: "from-blue-600/90 via-cyan-600/80 to-teal-600/90",
    seo: {
      title: "QueztLearn LMS",
      description:
        "Modern learning platform powered by QueztLearn. Courses, tests, video progress, and multi-tenant experiences for organizations.",
      ogTitle: "QueztLearn LMS",
      ogDescription:
        "Simple, structured learning experiences for students and organizations.",
      robots: "index, follow",
      canonical: "https://www.queztlearn.com",
    },
  },
  {
    id: "quezt-labs",
    name: "Quezt Labs",
    tagline: "Agency & product studio",
    description:
      "Our flagship marketing site — MVP sprints, services, and how we ship for founders.",
    domain: "www.queztlabs.tech",
    framework: "nextjs",
    category: "marketing",
    github: { org: "Quezt-Labs", repo: "QueztLabs" },
    featured: true,
    accent: "from-zinc-700/95 via-zinc-800/90 to-black/95",
    seo: {
      title: "Quezt Labs | MVP Development, Web Apps & Growth Solutions",
      description:
        "Founder-led product engineering. We build production-ready web apps, mobile apps, and MVPs for startups. Next.js, React Native, Flutter—plus branding and GTM. Delhi, India.",
      keywords: [
        "MVP development",
        "web app development",
        "mobile app development",
        "React Native",
        "Next.js",
        "product engineering",
        "India startup",
      ],
      ogTitle: "Quezt Labs | MVP Development, Web Apps & Growth Solutions",
      ogDescription:
        "Founder-led product engineering. We build production-ready web apps, mobile apps, and MVPs for startups.",
      ogImage: "https://queztlabs.tech/logo.png",
      twitterTitle: "Quezt Labs | MVP Development, Web Apps & Growth Solutions",
      twitterDescription:
        "Founder-led product engineering. Web apps, mobile apps, MVPs—plus branding and GTM. Delhi, India.",
      robots: "index, follow",
      canonical: "https://queztlabs.tech",
    },
  },
  {
    id: "fit-forward-platform",
    name: "GrindKaro App",
    tagline: "Fitness & digital books",
    description:
      "Member app with PDF reader, catalog, and owned-content flows for the GrindKaro ecosystem.",
    domain: "app.grindkaro.in",
    framework: "vite",
    category: "fitness",
    github: { org: "iamshiv4m", repo: "fit-forward-platform" },
    featured: true,
    accent: "from-orange-600/90 via-amber-600/80 to-yellow-600/85",
    seo: {
      title: "GrindKaro.in",
      description: "Your fitness coaching platform",
      ogTitle: "GrindKaro.in",
      ogDescription: "Your fitness coaching platform",
      ogImage: "https://grindkaro.in/opengraph-image-p98pqg.png",
      robots: "index, follow",
      canonical: "https://app.grindkaro.in",
    },
  },
  {
    id: "lift-stronger",
    name: "Lift Stronger",
    tagline: "Subscriptions & coaching",
    description:
      "Subscription management, tabbed UX, and coaching flows for GrindKaro's training stack.",
    domain: "test.grindkaro.in",
    framework: "vite",
    category: "fitness",
    github: { org: "iamshiv4m", repo: "lift-stronger" },
    featured: false,
    accent: "from-rose-600/90 via-red-600/80 to-orange-600/85",
    seo: {
      title: "Grind Karo — India's Premier Powerlifting Coach",
      description:
        "Build unstoppable strength with science-backed powerlifting programs by Coach Deva — Asian Gold Medalist. 200+ athletes coached.",
      ogTitle: "Grind Karo — India's Premier Powerlifting Coach",
      ogDescription:
        "Build unstoppable strength with proven powerlifting programs. 200+ athletes, 30+ national medalists coached.",
      ogImage:
        "https://lift-stronger.vercel.app/opengraph-image?f1d9f0bde34ec522",
      twitterTitle: "Grind Karo — India's Premier Powerlifting Coach",
      twitterDescription:
        "Build unstoppable strength with proven powerlifting programs. 200+ athletes, 30+ national medalists coached.",
      robots: "index, follow",
      canonical: "https://lift-stronger.vercel.app",
    },
  },
  {
    id: "grind-karo-admin",
    name: "GrindKaro Admin",
    tagline: "Operations dashboard",
    description:
      "Admin console for purchases, content, and day-to-day ops across the GrindKaro platform.",
    domain: "admin.grindkaro.in",
    framework: "vite",
    category: "fitness",
    github: { org: "Quezt-Labs", repo: "Grind-karo-Admin" },
    featured: false,
    accent: "from-slate-600/90 via-slate-700/85 to-slate-900/95",
    seo: {
      title: "Grind Karo Admin",
      description:
        "Internal operations dashboard for GrindKaro — purchases, content, and platform management.",
      robots: "noindex, nofollow",
      canonical: "https://admin.grindkaro.in",
    },
  },
  {
    id: "grindgear-power-platform",
    name: "GrindGear Power",
    tagline: "Powerlifting gear store",
    description:
      "E-commerce for competition-grade powerlifting gear — belts, sleeves, wraps, and more.",
    domain: "grindgear-power-platform.vercel.app",
    framework: "vite",
    category: "fitness",
    github: { org: "iamshiv4m", repo: "grindgear-power-platform" },
    featured: false,
    accent: "from-emerald-600/90 via-green-600/80 to-teal-700/90",
    seo: {
      title: "GrindGear — Competition-Grade Powerlifting Gear",
      description:
        "Premium powerlifting gear built for serious athletes. Competition-approved belts, knee sleeves, wrist wraps and more.",
      ogTitle: "GrindGear — Built for Strength",
      ogDescription:
        "Competition-grade powerlifting gear trusted by serious athletes.",
      ogImage: "https://lovable.dev/opengraph-image-p98pqg.png",
      robots: "index, follow",
    },
  },
  {
    id: "100x-iron-forge",
    name: "100x Iron Forge",
    tagline: "Powerlifting team India",
    description:
      "Team India powerlifting presence with motion-rich branding and competition focus.",
    domain: "100x-iron-forge.vercel.app",
    framework: "vite",
    category: "fitness",
    github: { org: "iamshiv4m", repo: "100x-iron-forge" },
    featured: false,
    accent: "from-neutral-700/95 via-stone-800/90 to-zinc-900/95",
    seo: {
      title: "100X Team India | Powerlifting",
      description:
        "100X Team India — elite powerlifting team representing India.",
      ogTitle: "100X Team India | Powerlifting",
      ogDescription: "100X Team India — India",
      robots: "index, follow",
    },
  },
  {
    id: "velo-coach",
    name: "Velo Coach",
    tagline: "AI pose coaching",
    description:
      "Real-time pose detection, rep counting, and live session coaching in the browser.",
    domain: "velo-coach.vercel.app",
    framework: "vite",
    category: "fitness",
    github: { org: "iamshiv4m", repo: "velo-coach" },
    featured: false,
    accent: "from-fuchsia-600/90 via-purple-600/80 to-violet-700/90",
    seo: {
      title: "VELO — AI Gym Coach",
      description:
        "VELO — AI-powered gym coaching with real-time form analysis and rep counting",
      ogTitle: "VELO — AI Gym Coach",
      ogDescription:
        "Real-time exercise detection, rep counting, and form analysis",
      robots: "index, follow",
    },
  },
  {
    id: "swift-checkout-flow",
    name: "Swift Checkout",
    tagline: "Checkout experience",
    description:
      "Focused checkout flow — fast, minimal, and optimized for conversion experiments.",
    domain: "swift-checkout-flow.vercel.app",
    framework: "vite",
    category: "commerce",
    github: { org: "iamshiv4m", repo: "swift-checkout-flow" },
    featured: false,
    accent: "from-sky-600/90 via-blue-600/80 to-indigo-700/90",
    seo: {
      title: "Swift Checkout Flow",
      description: "A fast and seamless checkout experience",
      ogTitle: "Swift Checkout Flow",
      ogDescription: "A fast and seamless checkout experience",
      robots: "index, follow",
    },
  },
  {
    id: "royce7",
    name: "Royce7",
    tagline: "Premium fitness center",
    description:
      "Premium fitness center landing page for North East Delhi with full social meta cards.",
    domain: "royce7.vercel.app",
    framework: "vite",
    category: "marketing",
    github: { org: "iamshiv4m", repo: "royce7-genesis-page" },
    featured: false,
    accent: "from-amber-700/90 via-yellow-800/85 to-orange-900/90",
    seo: {
      title: "Royce 7 — Premium Fitness Center | North East Delhi",
      description:
        "Royce 7 — premium fitness center in North East Delhi. Strength training, coaching, and community.",
      ogTitle: "Royce 7 — Premium Fitness Center",
      ogDescription:
        "Premium fitness center in North East Delhi — strength, coaching, community.",
      ogImage: "https://royce7.vercel.app/og-image.png",
      twitterTitle: "Royce 7 — Premium Fitness Center",
      twitterDescription:
        "Premium fitness center in North East Delhi — strength, coaching, community.",
      canonical: "https://royce7fitness.com/",
    },
  },
  {
    id: "test",
    name: "FreshMart Demo",
    tagline: "Next.js i18n sandbox",
    description:
      "Grocery demo storefront with next-intl — categories, best sellers, and localization patterns.",
    domain: "test-gilt-beta-55.vercel.app",
    framework: "nextjs",
    category: "marketing",
    github: { org: "iamshiv4m", repo: "test" },
    featured: false,
    accent: "from-indigo-600/85 via-violet-600/75 to-purple-700/85",
    seo: {
      title: "FreshMart — Asia Center 24",
      description:
        "FreshMart at Asia Center 24 — fresh groceries delivered fast. Explore categories, best sellers and latest arrivals.",
      ogTitle: "FreshMart — Asia Center 24",
      ogDescription:
        "FreshMart at Asia Center 24 — fresh groceries delivered fast. Explore categories, best sellers and latest arrivals.",
      ogImage:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=500&fit=crop",
      twitterTitle: "FreshMart — Asia Center 24",
      twitterDescription:
        "Fresh groceries delivered fast — categories, best sellers, latest arrivals.",
      robots: "index, follow",
    },
  },
];

export const portfolioStats = [
  { label: "Live products", value: `${vercelProjects.length}+` },
  {
    label: "SEO-ready",
    value: `${vercelProjects.filter((p) => p.seo.description).length}`,
  },
  {
    label: "Open Graph",
    value: `${vercelProjects.filter((p) => p.seo.ogTitle || p.seo.ogImage).length}`,
  },
  { label: "Stacks", value: "Next.js & Vite" },
];

export function projectUrl(domain: string) {
  return domain.startsWith("http") ? domain : `https://${domain}`;
}

export function hasRichSeo(seo: ProjectSeo) {
  return Boolean(
    seo.ogImage || seo.keywords?.length || seo.twitterTitle || seo.canonical,
  );
}
