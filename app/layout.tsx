import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@/components/analytics/gtm";
import "./globals.css";

/**
 * Font Configuration
 * - Inter: Clean, modern sans-serif for body text and UI
 * - Playfair Display: Elegant serif for headings and emphasis
 * - Geist Mono: Monospace for code snippets
 */
// Optimize font loading - use 'swap' for better LCP, fallback to system fonts
// 'swap' shows text immediately with fallback, then swaps when font loads
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Better for LCP - shows text immediately
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "sans-serif",
  ],
  adjustFontFallback: true,
  // Only load regular weight initially to reduce font file size
  weight: ["400", "500", "600", "700"],
});

// Defer non-critical fonts - load after initial render
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "optional", // Don't block render
  preload: false,
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "optional",
  preload: false,
  fallback: ["Menlo", "Monaco", "Courier New", "monospace"],
  adjustFontFallback: true,
});

/**
 * SEO Metadata Configuration
 * Update these values to match your brand
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://queztlabs.tech"),
  title: {
    default: "Quezt Labs | Launch Your MVP in 30 Days",
    template: "%s | Quezt Labs",
  },
  description:
    "We help startup founders launch production-ready MVPs in 30 days. Founder-led product engineering for ambitious startups.",
  keywords: [
    "MVP development",
    "Web Applications",
    "Mobile Apps",
    "Product Engineering",
    "Startup Engineering",
    "30-Day MVP",
    "Founder-led Engineering",
  ],
  authors: [{ name: "Quezt Labs" }],
  creator: "Quezt Labs",
  publisher: "Quezt Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://queztlabs.tech",
    siteName: "Quezt Labs",
    title: "Quezt Labs | Launch Your MVP in 30 Days",
    description:
      "We help startup founders launch production-ready MVPs in 30 days. Founder-led product engineering for ambitious startups.",
    images: [
      {
        url: "https://queztlabs.tech/logo.png",
        width: 1200,
        height: 630,
        alt: "Quezt Labs - Launch Your MVP in 30 Days",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quezt Labs | Launch Your MVP in 30 Days",
    description:
      "We help startup founders launch production-ready MVPs in 30 days. Founder-led product engineering.",
    images: [
      {
        url: "https://queztlabs.tech/logo.png",
        width: 1200,
        height: 630,
        alt: "Quezt Labs - Launch Your MVP in 30 Days",
      },
    ],
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
      { url: "/logo.png", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  generator: "quezt-labs",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        {/* Preconnect to Google Fonts - must be in head for proper detection */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch for analytics */}
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
        {/* Critical CSS inline to prevent render-blocking */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical above-the-fold styles */
              body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
              h1 { font-weight: 700; line-height: 1.2; margin: 0; }
              .container { width: 100%; margin: 0 auto; padding: 0 1rem; }
              .text-center { text-align: center; }
              .flex { display: flex; }
              .items-center { align-items: center; }
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <GoogleTagManager />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
