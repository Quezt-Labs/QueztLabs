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
    /*  { name: "Blog", href: "/blog" }, */
    { name: "Contact", href: "#contact" },
  ],
  footer: [
    {
      title: "Services",
      links: [
        { name: "Mobile Apps", href: "#services" },
        { name: "Web Development", href: "#services" },
        { name: "UI/UX Design", href: "#services" },
        { name: "Consulting", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        /*  { name: "Blog", href: "/blog" }, */
        /*  { name: "Careers", href: "#careers" }, */
        { name: "Contact", href: "#contact" },
      ],
    },
    /* {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    }, */
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────────────────────
export const services = [
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications built with React Native, Swift, and Kotlin for iOS and Android.",
    icon: "smartphone",
    features: [
      "iOS & Android",
      "React Native",
      "Performance Optimized",
      "Offline Support",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern, scalable web applications using Next.js, React, and cutting-edge technologies.",
    icon: "globe",
    features: [
      "Next.js & React",
      "Headless CMS",
      "E-commerce",
      "API Development",
    ],
  },
  /* {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Human-centered design that creates intuitive, beautiful experiences your users will love.",
    icon: "palette",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  }, */
  {
    id: "consulting",
    title: "Tech Consulting",
    description:
      "Strategic guidance to help you make the right technology decisions for your business.",
    icon: "lightbulb",
    features: [
      "Architecture Review",
      "Tech Stack Selection",
      "Team Augmentation",
      "Code Audits",
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
    description: "Perfect for MVPs and small projects",
    price: "₹50K",
    priceNote: "Starting from",
    features: [
      "Single platform (iOS or Android, or Web)",
      "Up to 10 screens/pages",
      "Basic UI/UX design",
      "2 rounds of revisions",
      "30 days post-launch support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    id: "growth",
    name: "Growth",
    description: "For established products ready to scale",
    price: "₹1.5 lakh",
    priceNote: "Starting from",
    features: [
      "Multi-platform (iOS, Android, Web)",
      "Unlimited screens/pages",
      "Premium UI/UX design",
      "Unlimited revisions",
      "Custom integrations",
      "90 days post-launch support",
      "Analytics & monitoring setup",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Custom solutions for complex needs",
    price: "Custom",
    priceNote: "Let's talk",
    features: [
      "Everything in Growth",
      "Dedicated team",
      "Custom infrastructure",
      "SLA guarantees",
      "Priority support",
      "Ongoing development partnership",
      "Training & documentation",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A simple MVP might take 6-8 weeks, while a full-featured product could take 3-6 months. We'll provide a detailed timeline during our discovery phase.",
  },
  {
    question: "Do you work with startups or only established companies?",
    answer:
      "We work with both! From early-stage startups building their first MVP to enterprise companies launching new products, we adapt our approach to fit your stage and needs.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We're experts in React, Next.js, React Native, Swift, Kotlin, Node.js, and various cloud platforms. We choose the best tech stack for each project based on requirements, not trends.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We believe in radical transparency. You'll have access to a dedicated Slack channel, weekly video calls, and a project dashboard with real-time updates. You're never left wondering about progress.",
  },
  {
    question: "What happens after the project launches?",
    answer:
      "Every project includes post-launch support (duration varies by tier). We also offer ongoing maintenance and development partnerships for continued growth.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "We frequently embed with client teams for seamless collaboration. We can lead, augment, or consult—whatever works best for your organization.",
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
