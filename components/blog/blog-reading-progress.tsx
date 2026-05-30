"use client";

import { useEffect, useState } from "react";

export function BlogReadingProgress({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById(targetId);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      const height = el.offsetHeight;
      const viewport = window.innerHeight;
      const end = start + height - viewport;

      if (end <= start) {
        setProgress(100);
        return;
      }

      const scrolled = window.scrollY - start;
      const pct = Math.min(100, Math.max(0, (scrolled / (end - start)) * 100));
      setProgress(pct);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targetId]);

  if (progress <= 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-16 z-40 h-0.5 bg-border/40 lg:top-[4.5rem]"
      aria-hidden
    >
      <div
        className="h-full bg-brand transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
