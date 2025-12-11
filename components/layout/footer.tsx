import Link from "next/link";
import { company, navigation } from "@/lib/data";
import { Twitter, Linkedin, Github, Dribbble } from "lucide-react";

/**
 * Site footer with navigation links and social icons
 */
export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-lg tracking-tight">
                {company.name}
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs leading-relaxed">
              {company.tagline}. Crafting exceptional digital experiences
            </p>
            {/* <div className="flex gap-4 mt-6">
              <a
                href={company.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={company.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={company.social.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Dribbble"
              >
                <Dribbble className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Navigation Links */}
          {navigation.footer.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/70">
            Crafted with care in India
          </p>
        </div>
      </div>
    </footer>
  );
}
