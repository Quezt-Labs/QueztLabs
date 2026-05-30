"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function MermaidDiagram({
  chart,
  className,
}: {
  chart: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      if (!containerRef.current) return;
      setError(null);

      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: "neutral",
          securityLevel: "loose",
          fontFamily: "inherit",
        });

        const id = `mmd-${Math.random().toString(36).slice(2, 9)}`;
        const { svg } = await mermaid.render(id, chart.trim());

        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          const svgEl = containerRef.current.querySelector("svg");
          if (svgEl) {
            svgEl.style.maxWidth = "100%";
            svgEl.style.height = "auto";
          }
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Diagram failed to render");
        }
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) {
    return (
      <div
        className={cn(
          "my-8 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive",
          className,
        )}
      >
        Diagram error: {error}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "not-prose my-10 w-full max-w-full overflow-x-auto rounded-2xl border border-border/70 bg-card p-4 shadow-sm sm:p-6",
        "[&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full",
        className,
      )}
      ref={containerRef}
      aria-label="Diagram"
    />
  );
}
