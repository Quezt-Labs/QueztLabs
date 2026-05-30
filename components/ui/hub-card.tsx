import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { IconBox } from "@/components/ui/icon-box";
import { cn } from "@/lib/utils";

export function HubCard({
  title,
  description,
  href,
  icon: Icon,
  cta,
  className,
}: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  cta: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "card-lift group flex flex-col rounded-2xl border border-border/70 bg-card p-8 shadow-sm",
        className,
      )}
    >
      <IconBox size="lg">
        <Icon className="h-6 w-6" aria-hidden />
      </IconBox>
      <h2 className="mt-5 font-serif text-xl font-semibold tracking-tight">
        {title}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
        {cta}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
