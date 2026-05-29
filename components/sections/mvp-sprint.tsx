"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const sprintWeeks = [
  {
    week: "W1",
    title: "Week 1: Foundation & Architecture",
    description:
      "We finalize your feature set, set up the tech stack, and establish the development environment. By Friday, you have a working prototype of core flows.",
    items: [
      "Tech stack selection & setup",
      "Database schema & API structure",
      "Core user flows working",
    ],
  },
  {
    week: "W2",
    title: "Week 2: Core Features",
    description:
      "We build the essential features that make your product usable. Authentication, main workflows, and basic UI are complete.",
    items: [
      "User authentication & profiles",
      "Primary feature implementation",
      "Responsive UI components",
    ],
  },
  {
    week: "W3",
    title: "Week 3: Polish & Integration",
    description:
      "We integrate third-party services, add payment processing if needed, and polish the user experience. Your product starts looking production-ready.",
    items: [
      "Payment/stripe integration",
      "Email notifications & workflows",
      "UI/UX refinements",
    ],
  },
  {
    week: "W4",
    title: "Week 4: Launch & Handoff",
    description:
      "We deploy to production, set up monitoring, and hand over complete documentation. Your MVP is live and ready for users.",
    items: [
      "Production deployment",
      "Analytics & monitoring setup",
      "Complete code & documentation",
    ],
  },
];

export function MVPSprint() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionShell id="mvp-sprint">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="MVP Sprint"
          title="Idea to live product in 30 days"
          description="A week-by-week sprint — no vague timelines, no mystery phases."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {sprintWeeks.map((week, index) => (
            <motion.article
              key={week.week}
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }
              }
              whileInView={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, margin: "-60px" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.45, delay: index * 0.08 }
              }
              className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
            >
              <span className="inline-flex rounded-lg bg-violet-500/10 px-2.5 py-1 text-sm font-bold text-violet-700">
                {week.week}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{week.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {week.description}
              </p>
              <ul className="mt-4 space-y-2">
                {week.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
