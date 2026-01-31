"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
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
    <section id="mvp-sprint" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="MVP Sprint"
            title="The 30-Day MVP Sprint"
            description="A structured process that gets you from idea to users in one month"
          />

          <div className="mt-16 space-y-8">
            {sprintWeeks.map((week, index) => (
              <motion.div
                key={index}
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
                }
                whileInView={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, margin: "-100px" }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.5, delay: index * 0.1 }
                }
                className="flex gap-6"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center font-bold">
                  {week.week}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{week.title}</h3>
                  <p className="text-muted-foreground mb-3">
                    {week.description}
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {week.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
