import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { DeferredThirdParty } from "@/components/analytics/deferred-third-party";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  weight: ["400", "600"],
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "sans-serif",
  ],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://queztlabs.tech"),
  title: {
    default: "Quezt Labs | MVP Development, Web Apps & Growth Solutions",
    template: "%s | Quezt Labs",
  },
  description:
    "Founder-led product engineering. We build production-ready web apps, mobile apps, and MVPs for startups. Next.js, React Native, Flutter—plus branding and GTM. Delhi, India.",
  keywords: [
    "MVP development",
    "web app development",
    "mobile app development",
    "React Native",
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "product engineering India",
    "startup MVP Delhi",
    "Quezt Labs",
    "AI development",
    "prompt engineering",
    "vibe coding",
    "founder-led engineering",
    "branding and marketing",
    "go-to-market strategy",
  ],
  authors: [{ name: "Quezt Labs", url: "https://queztlabs.tech" }],
  creator: "Quezt Labs",
  publisher: "Quezt Labs",
  alternates: {
    canonical: "https://queztlabs.tech",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://queztlabs.tech",
    siteName: "Quezt Labs",
    title: "Quezt Labs | MVP Development, Web Apps & Growth Solutions",
    description:
      "Founder-led product engineering. We build production-ready web apps, mobile apps, and MVPs for startups. Next.js, React Native, Flutter—plus branding and GTM. Delhi, India.",
    images: [
      {
        url: "https://queztlabs.tech/og-image.jpg",
        width: 512,
        height: 512,
        alt: "Quezt Labs - MVP Development, Web Apps & Growth Solutions",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quezt Labs | MVP Development, Web Apps & Growth Solutions",
    description:
      "Founder-led product engineering. Web apps, mobile apps, MVPs—plus branding and GTM. Delhi, India.",
    images: ["https://queztlabs.tech/og-image.jpg"],
    creator: "@queztlabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  generator: "quezt-labs",
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <Providers>{children}</Providers>
        <Analytics />
        <DeferredThirdParty />
      </body>
    </html>
  );
}
