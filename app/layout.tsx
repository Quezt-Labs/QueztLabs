import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

/**
 * Font Configuration
 * - Inter: Clean, modern sans-serif for body text and UI
 * - Playfair Display: Elegant serif for headings and emphasis
 * - Geist Mono: Monospace for code snippets
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: false, // Only preload primary font
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
});

/**
 * SEO Metadata Configuration
 * Update these values to match your brand
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://queztlabs.tech"),
  title: {
    default: "Quezt Labs | Premium Digital Products & Mobile Apps",
    template: "%s | Quezt Labs",
  },
  description:
    "We craft exceptional mobile apps, web products, and digital experiences. A technology studio focused on turning ambitious ideas into reality.",
  keywords: [
    "mobile app development",
    "web development",
    "digital products",
    "technology studio",
    "UI/UX design",
    "software development",
  ],
  authors: [{ name: "Quezt Labs" }],
  creator: "Quezt Labs",
  publisher: "Quezt Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://queztlabs.tech",
    siteName: "Quezt Labs",
    title: "Quezt Labs | Premium Digital Products & Mobile Apps",
    description:
      "We craft exceptional mobile apps, web products, and digital experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quezt Labs - Premium Digital Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quezt Labs | Premium Digital Products & Mobile Apps",
    description:
      "We craft exceptional mobile apps, web products, and digital experiences.",
    images: ["/og-image.png"],
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
  other: {
    // Resource hints for performance
    "dns-prefetch": "https://vitals.vercel-insights.com",
  },
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
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
