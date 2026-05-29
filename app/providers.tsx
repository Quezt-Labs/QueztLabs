"use client";

import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SmoothScrollProvider>{children}</SmoothScrollProvider>;
}
