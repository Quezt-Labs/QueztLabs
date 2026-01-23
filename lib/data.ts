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
// COMPANY INFORMATION
// ─────────────────────────────────────────────────────────────────────────────
export const company = {
  name: "Quezt Labs",
  tagline: "We build digital products that matter",
  email: "hello@queztlabs.tech",
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
    { name: "Services", href: "#services" },
    /*  { name: "Work", href: "#portfolio" }, */
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "Support", href: "#support" },
    /*  { name: "Contact", href: "#contact" }, */
  ],
  footer: [
    {
      title: "Services",
      links: [
        { name: "MVP Development", href: "#services" },
        { name: "Web Applications", href: "#services" },
        { name: "Mobile Apps", href: "#services" },
        { name: "Product Engineering", href: "#services" },
        { name: "30-Day MVP Sprint", href: "#mvp-sprint" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Why QueztLabs", href: "#why-queztlabs" },
        { name: "Process", href: "#process" },
        { name: "Pricing", href: "#pricing" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "FAQ", href: "#faq" },
        { name: "Support", href: "#support" },
        { name: "Book Strategy Call", href: "#contact" },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────────────────────
export const services = [
  {
    id: "mvp-development",
    title: "MVP Development",
    description:
      "Get to market in 6-8 weeks with a production-ready MVP that validates your idea and attracts early customers.",
    icon: "smartphone",
    features: [
      "Fast time-to-market",
      "Validate product-market fit",
      "Production-ready code",
      "Scalable foundation",
    ],
  },
  {
    id: "web-apps",
    title: "Web Applications",
    description:
      "Build scalable web apps that handle growth. From SaaS dashboards to e-commerce platforms, we ship what works.",
    icon: "globe",
    features: [
      "SaaS platforms",
      "E-commerce solutions",
      "Real-time features",
      "Enterprise-ready",
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description:
      "Native iOS and Android apps that users love. Built for performance, designed for scale, shipped on time.",
    icon: "smartphone",
    features: [
      "iOS & Android native",
      "React Native cross-platform",
      "App Store optimization",
      "Performance-first",
    ],
  },
  {
    id: "product-engineering",
    title: "Product Engineering",
    description:
      "Scale your product with architecture that grows. We build systems that handle millions of users, not just prototypes.",
    icon: "lightbulb",
    features: [
      "System architecture",
      "Performance optimization",
      "Team scaling support",
      "Technical leadership",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO / CASE STUDIES
// ─────────────────────────────────────────────────────────────────────────────
export const caseStudies = [
  {
    id: "fintech-mobile-app",
    title: "FinFlow",
    subtitle: "Mobile Banking Reimagined",
    description:
      "A next-generation mobile banking app with real-time analytics, AI-powered insights, and seamless transactions.",
    longDescription:
      "FinFlow is a comprehensive mobile banking solution designed for the modern user. We built a secure, intuitive platform that handles millions of transactions daily while providing personalized financial insights.",
    client: "FinTech Innovations Inc.",
    industry: "Finance",
    services: ["Mobile App", "UI/UX Design", "Backend Development"],
    metrics: [
      { label: "App Downloads", value: "2M+" },
      { label: "User Rating", value: "4.9★" },
      { label: "Daily Transactions", value: "500K+" },
    ],
    image: "/mobile-banking-app-interface-dark-mode.jpg",
    color: "#2563eb",
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "Artisan Market",
    subtitle: "Connecting Creators & Collectors",
    description:
      "A premium marketplace platform for artisan goods with advanced search, AR previews, and secure payments.",
    longDescription:
      "Artisan Market connects skilled craftspeople with appreciative collectors worldwide. Features include 3D product previews, AI-powered recommendations, and a streamlined checkout experience.",
    client: "Artisan Collective",
    industry: "E-commerce",
    services: ["Web Development", "Mobile App", "UI/UX Design"],
    metrics: [
      { label: "Monthly GMV", value: "$5M+" },
      { label: "Active Sellers", value: "10K+" },
      { label: "Conversion Rate", value: "4.2%" },
    ],
    image: "/ecommerce-marketplace-platform-minimal-design.jpg",
    color: "#059669",
    featured: true,
  },
  {
    id: "health-wellness-app",
    title: "VitalSync",
    subtitle: "Your Health Companion",
    description:
      "A comprehensive health and wellness app with wearable integration, personalized plans, and telehealth features.",
    longDescription:
      "VitalSync brings together fitness tracking, nutrition planning, mental wellness, and telehealth consultations in one elegant app. Deep integration with wearables provides real-time health insights.",
    client: "HealthTech Solutions",
    industry: "Healthcare",
    services: ["Mobile App", "Backend Development", "Integrations"],
    metrics: [
      { label: "Active Users", value: "500K+" },
      { label: "Health Goals Met", value: "89%" },
      { label: "Telehealth Sessions", value: "100K+" },
    ],
    image: "/health-wellness-app-fitness-tracking-clean-interfa.jpg",
    color: "#dc2626",
    featured: true,
  },
  {
    id: "saas-dashboard",
    title: "DataPulse",
    subtitle: "Analytics Made Simple",
    description:
      "An enterprise analytics dashboard with real-time data visualization, custom reports, and team collaboration.",
    longDescription:
      "DataPulse transforms complex data into actionable insights. We built a powerful yet intuitive analytics platform that helps teams make data-driven decisions faster.",
    client: "Enterprise Analytics Co.",
    industry: "SaaS",
    services: ["Web Development", "UI/UX Design", "Data Engineering"],
    metrics: [
      { label: "Enterprise Clients", value: "200+" },
      { label: "Data Points Processed", value: "1B+/day" },
      { label: "Time Saved", value: "40%" },
    ],
    image: "/analytics-dashboard-data-visualization-dark-theme.jpg",
    color: "#7c3aed",
    featured: false,
  },
];

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
      "We choose the best stack for your product. Typically Next.js or React for web, React Native for mobile, Node.js or Python for backend. We're not married to any technology—we use what makes sense for your use case.",
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
// BLOG POSTS
// ─────────────────────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    id: "building-scalable-react-native-apps",
    title: "Building Scalable React Native Apps: Lessons from the Trenches",
    excerpt:
      "After shipping dozens of React Native apps, here are the architectural patterns and practices that consistently lead to success.",
    content: `
# Building Scalable React Native Apps: Lessons from the Trenches

After years of building React Native applications for clients across industries, we've learned what separates apps that scale gracefully from those that become maintenance nightmares.

## Start with a Solid Architecture

The foundation of any scalable app is its architecture. We recommend a feature-based folder structure that groups related components, hooks, and utilities together.

\`\`\`
src/
├── features/
│   ├── auth/
│   ├── dashboard/
│   └── settings/
├── shared/
│   ├── components/
│   ├── hooks/
│   └── utils/
└── navigation/
\`\`\`

## State Management Done Right

Don't reach for Redux by default. For many apps, a combination of React Context, React Query, and Zustand provides a simpler, more performant solution.

## Performance from Day One

- Use FlatList for long lists, never ScrollView
- Implement proper image caching
- Profile early and often with Flipper
- Consider Hermes for Android

## The Testing Pyramid

We follow a testing strategy that emphasizes:
1. Unit tests for business logic
2. Integration tests for features
3. E2E tests for critical user flows

## Conclusion

Building scalable React Native apps isn't magic—it's about making good decisions consistently. Start with these foundations, and you'll be well on your way.
    `,
    author: "Alex Rivera",
    authorRole: "Lead Mobile Engineer",
    authorAvatar: "/software-engineer-headshot.png",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Engineering",
    image: "/react-native-mobile-development-code.jpg",
    featured: true,
  },
  {
    id: "design-systems-worth-building",
    title: "Design Systems Worth Building: A Practical Guide",
    excerpt:
      "How to create a design system that actually gets used, without over-engineering or under-delivering.",
    content: `
# Design Systems Worth Building: A Practical Guide

A design system is only valuable if people use it. Here's how we approach building systems that teams actually adopt.

## Start Small, Think Big

Don't try to systematize everything at once. Start with the components you use most: buttons, inputs, cards, typography.

## Document as You Go

Every component should have:
- Usage guidelines
- Code examples
- Accessibility notes
- Do's and don'ts

## Make Adoption Easy

The easier it is to use your system, the more it will be used. Provide:
- Copy-paste code snippets
- Figma components that match code 1:1
- Clear upgrade paths

## Conclusion

The best design system is one that grows with your product. Start simple, iterate based on real usage, and always prioritize developer and designer experience.
    `,
    author: "Jordan Kim",
    authorRole: "Design Director",
    authorAvatar: "/professional-designer-headshot.png",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Design",
    image: "/design-system-ui-kit.png",
    featured: true,
  },
  {
    id: "nextjs-performance-optimization",
    title: "Next.js Performance: From Good to Great",
    excerpt:
      "Practical techniques to squeeze every bit of performance out of your Next.js application.",
    content: `
# Next.js Performance: From Good to Great

Next.js gives you great performance out of the box, but there's always room for optimization. Here's how we take apps from good to great.

## Image Optimization

Always use next/image. It handles:
- Lazy loading
- Responsive sizing
- WebP conversion
- Blur placeholders

## Code Splitting

Next.js splits code automatically, but you can help:
- Use dynamic imports for heavy components
- Lazy load below-the-fold content
- Consider route-based code splitting

## Caching Strategies

Leverage ISR (Incremental Static Regeneration) for pages that change infrequently. Use SWR for client-side data fetching with stale-while-revalidate patterns.

## Conclusion

Performance optimization is an ongoing process. Measure, optimize, and measure again.
    `,
    author: "Sam Taylor",
    authorRole: "Senior Engineer",
    authorAvatar: "/developer-headshot.png",
    date: "2024-01-01",
    readTime: "7 min read",
    category: "Engineering",
    image: "/nextjs-performance-lighthouse-metrics.jpg",
    featured: false,
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
