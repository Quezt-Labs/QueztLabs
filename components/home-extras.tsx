"use client";

import dynamic from "next/dynamic";

const ScrollProgress = dynamic(
  () =>
    import("@/components/ui/scroll-progress").then((m) => ({
      default: m.ScrollProgress,
    })),
  { ssr: false },
);

const BackToTop = dynamic(
  () =>
    import("@/components/ui/back-to-top").then((m) => ({
      default: m.BackToTop,
    })),
  { ssr: false },
);

export function HomeExtras() {
  return (
    <>
      <ScrollProgress />
      <BackToTop />
    </>
  );
}
