import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { company, navigation, calBookingUrl } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-0 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={`${company.name} logo`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-xl font-semibold">{company.name}</span>
            </Link>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-background/65">
              {company.tagline}. Founder-led engineering for web, mobile, and
              MVPs — shipped on real infrastructure.
            </p>
            <div className="mt-8 space-y-3 text-sm text-background/65">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" />
                {company.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {company.address}
              </p>
            </div>
          </div>

          {navigation.footer.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-background/50">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-background/50">
              Start a project
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-background/65">
              Tell us what you&apos;re building. We&apos;ll reply within one
              business day.
            </p>
            <a
              href={calBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Book strategy call
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-background/15 py-8 text-sm text-background/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Crafted in India · Vercel · Next.js</p>
        </div>
      </div>
    </footer>
  );
}
