"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState, useRef } from "react";
import { ArrowRight, Check, X, Clock, Code, Rocket, Shield, Send, Loader2 } from "lucide-react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";

export default function LaunchPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      "project-type": formData.get("project-type"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Redirect to thank you page
        window.location.href = "/thank-you";
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Launch Your MVP in{" "}
                <span className="font-serif italic">30 Days</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Production-ready code. Real features. Shipped to users. Not a
                prototype—a product.
              </p>

              <div className="max-w-xl mx-auto mb-10">
                <div className="bg-card border border-border rounded-2xl p-6 text-left space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">For: Startup founders</p>
                      <p className="text-sm text-muted-foreground">
                        First-time founders, non-technical founders, small
                        funded teams ready to ship
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-muted-foreground">
                        Not for: Enterprise clients
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Large corporations, complex enterprise systems, or
                        projects requiring 6+ month timelines
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="#contact">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">
                You're stuck. We get it.
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-3">
                    You have an idea, not a product
                  </h3>
                  <p className="text-muted-foreground">
                    You've validated the concept, maybe even have early
                    customers waiting. But turning wireframes into working code
                    feels impossible.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-3">
                    Freelancers disappear mid-project
                  </h3>
                  <p className="text-muted-foreground">
                    You hired someone promising, but communication dropped,
                    deadlines slipped, and now you're left with half-finished
                    code you can't use.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-3">
                    Agencies take 6 months and $50K+
                  </h3>
                  <p className="text-muted-foreground">
                    You need to move fast, but agencies want endless discovery
                    phases, multiple rounds of revisions, and budgets that
                    don't match your runway.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">
                The 30-Day MVP Sprint
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-16">
                A structured process that gets you from idea to users in one
                month
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center font-bold">
                    W1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Week 1: Foundation & Architecture
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      We finalize your feature set, set up the tech stack, and
                      establish the development environment. By Friday, you
                      have a working prototype of core flows.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Tech stack selection & setup
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Database schema & API structure
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Core user flows working
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center font-bold">
                    W2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Week 2: Core Features
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      We build the essential features that make your product
                      usable. Authentication, main workflows, and basic UI are
                      complete.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        User authentication & profiles
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Primary feature implementation
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Responsive UI components
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center font-bold">
                    W3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Week 3: Polish & Integration
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      We integrate third-party services, add payment processing
                      if needed, and polish the user experience. Your product
                      starts looking production-ready.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Payment/stripe integration
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Email notifications & workflows
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        UI/UX refinements
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center font-bold">
                    W4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Week 4: Launch & Handoff
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      We deploy to production, set up monitoring, and hand over
                      complete documentation. Your MVP is live and ready for
                      users.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Production deployment
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Analytics & monitoring setup
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Complete code & documentation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">
                What You Get
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-12">
                Tangible deliverables, not promises
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Code className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Production-Ready Codebase
                  </h3>
                  <p className="text-muted-foreground">
                    Clean, documented code in a private GitHub repository. You
                    own everything.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Rocket className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Deployed Product
                  </h3>
                  <p className="text-muted-foreground">
                    Your MVP live on production servers, ready for real users.
                    Not a demo—a working product.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Shield className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Complete Documentation
                  </h3>
                  <p className="text-muted-foreground">
                    Setup guides, API documentation, and architecture notes. You
                    can hand this to any developer.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Clock className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    30 Days of Support
                  </h3>
                  <p className="text-muted-foreground">
                    Post-launch support for bug fixes and critical updates. We
                    make sure it works, not just ships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">
                Built by a Founder Who Codes
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-12">
                Real products, real results
              </p>

              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2">
                    Internal Product: SaaS Analytics Platform
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Built a complete analytics dashboard in 28 days. Handles
                    100K+ events daily, real-time dashboards, custom reporting.
                    Still running in production after 2 years.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="px-3 py-1 rounded-full bg-accent/30">
                      Next.js
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent/30">
                      PostgreSQL
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent/30">
                      Real-time
                    </span>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2">
                    Freelance Project: E-commerce MVP
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Launched a marketplace MVP for a first-time founder in 30
                    days. Product catalog, search, cart, checkout, and admin
                    panel. First sale within 48 hours of launch.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="px-3 py-1 rounded-full bg-accent/30">
                      React
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent/30">
                      Stripe
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent/30">
                      MVP
                    </span>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2">
                    Personal Project: Mobile App
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Built and launched a React Native app in 25 days. iOS and
                    Android, backend API, user authentication, and push
                    notifications. 500+ active users in first month.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="px-3 py-1 rounded-full bg-accent/30">
                      React Native
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent/30">
                      Node.js
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent/30">
                      Mobile
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-center text-muted-foreground mt-12">
                Most client work is under NDA. Let's discuss your project in
                detail.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-12">
                One package. One price. Everything included.
              </p>

              <div className="max-w-2xl mx-auto">
                <div className="p-8 rounded-2xl bg-card border-2 border-accent">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-2">30-Day MVP Sprint</h3>
                    <div className="text-5xl font-bold mb-2">$15,000</div>
                    <p className="text-muted-foreground">Starting from</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <p>Production-ready MVP in 30 days</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <p>Complete codebase ownership</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <p>Deployed to production</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <p>30 days post-launch support</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <p>Complete documentation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <p>Direct access to founder/developer</p>
                    </div>
                  </div>

                  <Button size="lg" className="w-full" asChild>
                    <Link href="#contact">
                      Book a Free Strategy Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  <p className="text-sm text-muted-foreground text-center mt-6">
                    Custom requirements? Let's discuss. Pricing may vary for
                    complex integrations or additional features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">
                Why QueztLabs
              </h2>

              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-3">
                    Founder-Led, Not Agency-Led
                  </h3>
                  <p className="text-muted-foreground">
                    You work directly with me—a founder who still codes. No
                    account managers, no handoffs, no broken telephone. I've built
                    products that scaled to millions of users. I know what breaks
                    and how to avoid it.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-3">
                    Real Product Engineering Experience
                  </h3>
                  <p className="text-muted-foreground">
                    I've shipped MVPs that became million-dollar businesses.
                    I've scaled systems that handle millions of users. I've made
                    every mistake you're trying to avoid. Your MVP is built
                    with production-ready patterns from day one.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-3">
                    Not a Body-Shopping Agency
                  </h3>
                  <p className="text-muted-foreground">
                    I don't outsource to junior developers or offshore teams.
                    You get senior-level engineering, thoughtful architecture,
                    and code quality that scales. No shortcuts, no technical
                    debt, no surprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2">
                    Is 30 days really enough?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, if you're focused on an MVP—not a full product. We
                    prioritize core features that validate your idea. You can
                    always add more later. Most founders overestimate what they
                    need for launch.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2">
                    Who owns the code?
                  </h3>
                  <p className="text-muted-foreground">
                    You do. 100%. The codebase is yours from day one. You get
                    full access to the GitHub repository, all documentation, and
                    complete IP ownership. No strings attached.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2">
                    What tech stack do you use?
                  </h3>
                  <p className="text-muted-foreground">
                    We choose the best stack for your product. Typically Next.js
                    or React for web, React Native for mobile, Node.js or Python
                    for backend. We're not married to any technology—we use
                    what makes sense for your use case.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2">
                    What happens after 30 days?
                  </h3>
                  <p className="text-muted-foreground">
                    You get 30 days of post-launch support for bug fixes and
                    critical updates. After that, you can hire us for ongoing
                    development, or take the codebase to any developer. We
                    document everything so the transition is smooth.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2">
                    What if I need changes during development?
                  </h3>
                  <p className="text-muted-foreground">
                    We build in weekly check-ins. If you need to adjust
                    features or priorities, we discuss it together. Small
                    changes are fine. Major scope changes may extend the
                    timeline—we'll be transparent about that.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2">
                    Do you work with non-technical founders?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolutely. Most of our clients are non-technical founders.
                    We explain technical decisions in plain English, provide
                    clear documentation, and make sure you understand what
                    you're getting. You don't need to code to work with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Ship Your MVP?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Book a free 30-minute strategy call. We'll discuss your product,
                timeline, and whether the 30-day sprint is right for you. No
                sales pitch—just a real conversation.
              </p>
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="#contact">
                  Book Your Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-6">
                Limited slots available. We only take on 2-3 projects per month
                to ensure quality.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">
                Book Your Free Strategy Call
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Tell us about your product. We'll get back to you within 24
                hours.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 p-8 rounded-2xl bg-card border border-border"
              >
                  {error && (
                    <div className="p-4 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                      {error}
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Your Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@startup.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2"
                    >
                      Startup Name
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your startup name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="project-type"
                      className="block text-sm font-medium mb-2"
                    >
                      What are you building? *
                    </label>
                    <Input
                      type="text"
                      id="project-type"
                      name="project-type"
                      placeholder="e.g., SaaS platform, Mobile app, Marketplace"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Tell us about your product *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="What problem are you solving? What stage are you at? What's your timeline?"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Request Strategy Call
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
