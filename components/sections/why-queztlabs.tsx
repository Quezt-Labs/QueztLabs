import { Code2, Rocket, Users, Shield } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionShell } from "@/components/ui/section-shell";
import type { LucideIcon } from "lucide-react";

const differentiators: {
  icon: LucideIcon;
  title: string;
  description: string;
  num: string;
}[] = [
  {
    num: "01",
    icon: Code2,
    title: "Real product experience",
    description:
      "We've scaled products past 100K users. We architect for what breaks in production—not slide decks.",
  },
  {
    num: "02",
    icon: Rocket,
    title: "Ship in weeks",
    description:
      "Building starts week one. MVPs in 6–8 weeks with clear milestones, not endless discovery.",
  },
  {
    num: "03",
    icon: Users,
    title: "Founder-led",
    description:
      "You work with the person who writes code. No account managers or broken telephone.",
  },
  {
    num: "04",
    icon: Shield,
    title: "Production-grade",
    description:
      "Every line is written to ship—not throwaway prototype code you'll rebuild in six months.",
  },
];

export function WhyQueztLabs() {
  return (
    <SectionShell id="why-queztlabs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Quezt Labs"
          title="An agency that actually ships"
          description="We're product engineers who've been founders. We optimize for speed, clarity, and code you can scale."
          align="left"
          className="max-w-2xl"
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.num}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-shadow hover:shadow-md lg:p-8"
              >
                <span className="text-5xl font-bold tracking-tighter text-muted/80">
                  {item.num}
                </span>
                <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-muted">
                  <Icon className="h-5 w-5 text-brand" aria-hidden />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
