/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SEED DATA - Content Configuration
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * This file contains all the seed content for the website.
 * Update these values to customize the site for your brand.
 *
 * In a production environment, you might want to:
 * - Fetch this data from a CMS (Contentful, Sanity, etc.)
 * - Store in a database
 * - Use MDX files for blog content
 */

// ─────────────────────────────────────────────────────────────────────────────
// CAL.COM BOOKING
// ─────────────────────────────────────────────────────────────────────────────
export const calBookingUrl =
  process.env.NEXT_PUBLIC_CAL_URL ||
  "https://calendly.com/admin-queztlabs/your-free-strategy-call";

// ─────────────────────────────────────────────────────────────────────────────
// COMPANY INFORMATION
// ─────────────────────────────────────────────────────────────────────────────
export const company = {
  name: "Quezt Labs",
  tagline: "Ship your MVP in weeks, not months",
  email: "admin@queztlabs.tech",
  /*  phone: "+1 (555) 123-4567", */
  address: "Delhi, India",
  /* social: {
    twitter: "https://twitter.com/queztlabs",
    linkedin: "https://linkedin.com/company/queztlabs",
    github: "https://github.com/queztlabs",
    dribbble: "https://dribbble.com/queztlabs",
  }, */
};

// ─────────────────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────────────────
export const navigation = {
  main: [
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/blog" },
    { name: "Tools", href: "/tools" },
    { name: "Case Studies", href: "/case-studies" },
  ],
  footer: [
    {
      title: "Services",
      links: [
        { name: "View All Services", href: "/#services" },
        { name: "30-Day MVP Sprint", href: "/#mvp-sprint" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/#about" },
        { name: "Live Portfolio", href: "/work" },
        { name: "Why QueztLabs", href: "/#why-queztlabs" },
        { name: "Process", href: "/#process" },
        { name: "Contact", href: "/#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Tools & Extensions", href: "/tools" },
        { name: "Resource Hub", href: "/resources" },
        { name: "FAQ", href: "/#faq" },
        { name: "Book Strategy Call", href: "/#contact" },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES - Tech + Business Solutions (PW LeapX style)
// ─────────────────────────────────────────────────────────────────────────────
export const services = [
  // Technical Development
  {
    id: "web-mvp-development",
    slug: "web-mvp-development",
    category: "tech" as const,
    title: "Web & MVP Development",
    description:
      "Ship your MVP in weeks with Next.js, React, and Node. We build production-ready web apps that scale from day one.",
    icon: "code",
    features: ["Next.js & React", "6–8 week delivery", "Scalable architecture"],
    deliverables: [
      "Production-ready MVP in 6–8 weeks",
      "Modern stack (Next.js, React, Node)",
      "Responsive UI/UX for all devices",
      "Clean, maintainable codebase",
      "Edtech, Fintech, SaaS, Healthcare",
    ],
  },
  {
    id: "app-development",
    slug: "app-development",
    category: "tech" as const,
    title: "Mobile & Desktop App Development",
    description:
      "Mobile apps for iOS and Android, plus desktop apps for Windows, macOS, and Linux. React Native, Flutter, Electron, Tauri—one team, all platforms.",
    icon: "smartphone",
    features: [
      "iOS & Android",
      "Windows, macOS, Linux",
      "React Native / Flutter / Electron",
    ],
    deliverables: [
      "Mobile apps for iOS and Android (React Native, Flutter)",
      "Desktop apps for Windows, macOS, Linux (Electron, Tauri)",
      "App Store and Play Store deployment",
      "Push notifications, offline support, auto-updates",
      "Native integrations and performance optimization",
    ],
  },
  {
    id: "chatbot-automation",
    slug: "chatbot-automation",
    category: "tech" as const,
    title: "Chatbot & Automation",
    description:
      "AI-powered chatbots and workflow automation that handle support, qualify leads, and free your team.",
    icon: "message-square",
    features: ["AI chatbots", "Workflow automation", "CRM integrations"],
    deliverables: [
      "AI-powered chatbots and virtual assistants",
      "Process automation and workflows",
      "CRM and tool integrations",
      "Natural language processing",
      "24/7 automated customer support",
    ],
  },
  {
    id: "backend-integration",
    slug: "backend-integration",
    category: "tech" as const,
    title: "Backend & System Integration",
    description:
      "APIs, microservices, and integrations that power your product. Secure, scalable, and built to last.",
    icon: "server",
    features: ["REST & GraphQL APIs", "Microservices", "Integrations"],
    deliverables: [
      "RESTful and GraphQL API design",
      "Microservices architecture",
      "Payment, auth, and third-party integrations",
      "Database design and optimization",
      "Secure authentication and authorization",
    ],
  },
  {
    id: "documentation",
    slug: "documentation",
    category: "tech" as const,
    title: "Technical Documentation",
    description:
      "API docs, user guides, and developer documentation that make your product easy to adopt and integrate.",
    icon: "file-text",
    features: ["API docs", "User guides", "Developer docs"],
    deliverables: [
      "API documentation (OpenAPI, Swagger)",
      "User guides and onboarding docs",
      "Developer integration guides",
      "README and setup instructions",
      "Changelog and versioning",
    ],
  },
  {
    id: "tech-planning",
    slug: "tech-planning",
    category: "tech" as const,
    title: "Tech Planning & Infrastructure",
    description:
      "Cloud architecture, DevOps, and infrastructure that scale. AWS, GCP, Vercel—we pick the right stack.",
    icon: "settings",
    features: ["Cloud architecture", "CI/CD", "Infrastructure"],
    deliverables: [
      "Cloud architecture (AWS, GCP, Vercel)",
      "CI/CD pipelines and automation",
      "Infrastructure as Code",
      "Monitoring and scaling strategies",
      "Cost optimization",
    ],
  },
  // Brand & Go-to-Market
  {
    id: "branding-marketing",
    slug: "branding-marketing",
    category: "business" as const,
    title: "Branding and Marketing",
    description:
      "Brand identity, positioning, and digital growth strategies that help founders stand out and acquire users.",
    icon: "megaphone",
    features: ["Brand identity", "Positioning", "Growth strategies"],
    deliverables: [
      "Brand identity and visual design",
      "Market positioning and messaging",
      "Digital marketing strategy",
      "Content and SEO",
      "Growth experiments and analytics",
    ],
  },
  {
    id: "gtm-consultation",
    slug: "gtm-consultation",
    category: "business" as const,
    title: "GTM & Consultation",
    description:
      "Go-to-market strategy and founder advisory for Indian startups. Product-market fit, pricing, and launch planning.",
    icon: "trending-up",
    features: ["GTM strategy", "Product-market fit", "Founder advisory"],
    deliverables: [
      "Go-to-market strategy and planning",
      "Product-market fit validation",
      "Pricing and positioning advice",
      "Indian startup ecosystem expertise",
      "Founder advisory and mentorship",
    ],
  },
];

// Case studies → content/case-studies/*.md (see lib/case-studies.ts)
// Blog posts → content/blog/*.md (see lib/blog.ts)

// ─────────────────────────────────────────────────────────────────────────────
// PROCESS STEPS
// ─────────────────────────────────────────────────────────────────────────────
export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your vision, goals, and challenges. Through workshops and research, we uncover insights that shape the perfect solution.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We craft a comprehensive roadmap including technical architecture, design direction, and project milestones tailored to your needs.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our designers create beautiful, intuitive interfaces. We iterate based on feedback until every pixel feels right.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Our engineers bring designs to life with clean, scalable code. Regular demos keep you in the loop throughout.",
  },
  {
    number: "05",
    title: "Launch & Beyond",
    description:
      "We handle deployment, monitoring, and ongoing support. Your success is our success—we're here for the long haul.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    quote:
      "Quezt Labs transformed our vision into a product that exceeded all expectations. Their attention to detail and technical expertise is unmatched.",
    author: "Sarah Chen",
    role: "CEO",
    company: "FinTech Innovations",
    avatar: "/professional-woman-headshot.png",
  },
  {
    id: 2,
    quote:
      "Working with Quezt Labs was a game-changer. They didn't just build an app—they became true partners in our growth journey.",
    author: "Marcus Johnson",
    role: "Founder",
    company: "Artisan Collective",
    avatar: "/professional-man-headshot.png",
  },
  {
    id: 3,
    quote:
      "The team's ability to understand complex healthcare requirements while delivering a beautiful, user-friendly product was impressive.",
    author: "Dr. Emily Roberts",
    role: "CTO",
    company: "HealthTech Solutions",
    avatar: "/professional-woman-doctor-headshot.png",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PRICING TIERS
// ─────────────────────────────────────────────────────────────────────────────
export const pricingTiers = [
  {
    id: "starter",
    name: "Starter",
    description:
      "Perfect for startups and MVPs. Launch fast, build trust, and validate your idea with professional quality.",
    price: "1,999",
    priceNote: "Starting from",
    features: [
      "One platform of your choice (iOS, Android, or Web)",
      "Up to 10 screens with clean, modern design",
      "Professional UI/UX that users will love",
      "2 rounds of revisions to get it perfect",
      "30 days of support after launch",
      "Free consultation & detailed project roadmap",
      "Direct access to our team—no middlemen",
      "Quick turnaround—see results in weeks",
    ],
    cta: "Start Your Project",
    highlighted: false,
  },
  {
    id: "growth",
    name: "Growth",
    description: "Scale your product across all platforms",
    price: "4,999",
    priceNote: "Starting from",
    features: [
      "All platforms: iOS, Android & Web together",
      "Unlimited screens—build as big as you need",
      "Premium design with advanced interactions",
      "Unlimited revisions until you're 100% happy",
      "Custom API integrations & third-party services",
      "90 days of dedicated post-launch support",
      "Analytics dashboard & performance monitoring",
    ],
    cta: "Scale Your Product",
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Dedicated team for your mission-critical needs",
    price: "Custom",
    priceNote: "Let's discuss",
    features: [
      "Everything in Growth, plus more",
      "Dedicated team working exclusively for you",
      "Custom infrastructure & architecture",
      "SLA-backed performance guarantees",
      "24/7 priority support & rapid response",
      "Long-term partnership & continuous development",
      "Team training & comprehensive documentation",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    question: "Is 30 days really enough for an MVP?",
    answer:
      "Yes, if you're focused on an MVP—not a full product. We prioritize core features that validate your idea. You can always add more later. Most founders overestimate what they need for launch.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do. 100%. The codebase is yours from day one. You get full access to the GitHub repository, all documentation, and complete IP ownership. No strings attached.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "React, Next.js, and Astro on the frontend; Node.js and NestJS on the backend; Drizzle with PostgreSQL, MongoDB, and SQL where it fits; Redis and Kafka for cache and messaging; React Native for mobile; plus Vercel, AWS, and GCP for deploy. We pick what your product needs—not a one-size-fits-all template.",
  },
  {
    question: "What happens after 30 days?",
    answer:
      "You get 30 days of post-launch support for bug fixes and critical updates. After that, you can hire us for ongoing development, or take the codebase to any developer. We document everything so the transition is smooth.",
  },
  {
    question: "What if I need changes during development?",
    answer:
      "We build in weekly check-ins. If you need to adjust features or priorities, we discuss it together. Small changes are fine. Major scope changes may extend the timeline—we'll be transparent about that.",
  },
  {
    question: "Do you work with non-technical founders?",
    answer:
      "Absolutely. Most of our clients are non-technical founders. We explain technical decisions in plain English, provide clear documentation, and make sure you understand what you're getting. You don't need to code to work with us.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CLIENT LOGOS
// ─────────────────────────────────────────────────────────────────────────────
export const clientLogos = [
  { name: "TechCorp", logo: "/client-logo-2.png" },
  { name: "InnovateCo", logo: "/innovation-company-logo-minimal.jpg" },
  { name: "StartupHub", logo: "/startup-company-logo-minimal.jpg" },
  { name: "DigitalFirst", logo: "/digital-agency-logo-minimal.jpg" },
  { name: "FutureWorks", logo: "/future-tech-company-logo-minimal.jpg" },
  { name: "CloudNine", logo: "/cloud-company-logo-minimal.jpg" },
  // New/featured clients (added per request)
  {
    name: "Inverted (Javelin)",
    logo: "/clients/javelin.svg",
    url: "https://javelin.inverted.in/",
    blurb:
      "Internal issue-tracking and lifecycle tool for streamlined engineering workflows — built for reliability and scale.",
    screenshots: ["https://javelin.inverted.in/"],
  },
  {
    name: "TestForce",
    logo: "https://www.testforce.online/favicon.ico",
    url: "https://www.testforce.online/",
    blurb:
      "A platform for students to practise and compete — realtime tests and analytics for educators and learners.",
    screenshots: ["https://www.testforce.online/"],
  },
  {
    name: "Grind Karo",
    logo: "https://www.grindkaro.in/favicon.ico",
    url: "https://www.grindkaro.in/",
    blurb:
      "Performance-first powerlifting coaching platform helping athletes train smarter and win competitions.",
    screenshots: ["https://www.grindkaro.in/"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────────────────────────────────────
export const stats = [
  { label: "Projects Delivered", value: "150+" },
  { label: "Happy Clients", value: "80+" },
  { label: "Team Members", value: "25" },
  { label: "Years Experience", value: "8+" },
];
