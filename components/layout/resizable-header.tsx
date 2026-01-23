"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { navigation, company } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function ResizableHeader() {
  const navItems = navigation.main.map((item) => ({
    name: item.name,
    link: item.href,
  }));

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <Link
            href="/"
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
          >
            <Image
              src="/logo.png"
              alt={`${company.name} Logo`}
              width={30}
              height={30}
              className="h-8 w-auto"
              priority
            />
            <div className="flex flex-col">
              <span className="font-bold text-foreground leading-tight">
                {company.name}
              </span>
              <span className="text-xs text-muted-foreground leading-none">
                Ship fast. Scale confidently.
              </span>
            </div>
          </Link>
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" as={Link} href="#contact">
              Contact
            </NavbarButton>
            <NavbarButton variant="primary" as={Link} href="#contact">
              Start a Project
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Link
              href="/"
              className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
            >
              <Image
                src="/logo.png"
                alt={`${company.name} Logo`}
                width={30}
                height={30}
                className="h-8 w-auto"
                priority
              />
              <div className="flex flex-col">
                <span className="font-bold text-foreground leading-tight">
                  {company.name}
                </span>
                <span className="text-xs text-muted-foreground leading-none">
                  Ship fast. Scale confidently.
                </span>
              </div>
            </Link>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="block py-2">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4">
              <NavbarButton
                as={Link}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                Contact
              </NavbarButton>
              <NavbarButton
                as={Link}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Start a Project
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
