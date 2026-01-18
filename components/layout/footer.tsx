import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { company, navigation } from "@/lib/data";

/**
 * Site footer with navigation links, contact info, and company details
 */
export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20 lg:mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <Link
                href="/"
                className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/logo.png"
                  alt={`${company.name} Logo`}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                  loading="lazy"
                />
                <span className="font-bold text-xl tracking-tight">
                  {company.name}
                </span>
              </Link>
              <p className="text-base text-primary-foreground/70 max-w-md leading-relaxed mb-8">
                {company.tagline}. We help startup founders launch production-ready MVPs in 30 days.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>{company.email}</span>
                </a>
                <div className="flex items-center gap-3 text-base text-primary-foreground/70">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span>{company.address}</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            {navigation.footer.map((group) => (
              <div key={group.title} className="space-y-5">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-primary-foreground mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10 pb-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sm text-primary-foreground/70 text-center sm:text-left">
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-primary-foreground/70">
              <p className="text-center sm:text-right">
                Crafted with care in India
              </p>
              <span className="hidden sm:inline text-primary-foreground/30">•</span>
              <Link
                href="#contact"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-medium"
              >
                Book a Free Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
