/** Category-based cover overlays so the blog grid doesn’t feel like the same 4 stock photos. */

export const categoryCoverOverlay: Record<string, string> = {
  "AI & Tools":
    "bg-gradient-to-br from-violet-600/50 via-indigo-600/30 to-transparent",
  Engineering:
    "bg-gradient-to-br from-slate-700/40 via-blue-600/25 to-transparent",
  Culture:
    "bg-gradient-to-br from-amber-500/35 via-orange-500/20 to-transparent",
  Design:
    "bg-gradient-to-br from-fuchsia-600/35 via-pink-500/20 to-transparent",
  "Hot Take":
    "bg-gradient-to-br from-rose-600/40 via-red-500/20 to-transparent",
};

export function coverOverlayFor(category: string) {
  return (
    categoryCoverOverlay[category] ??
    "bg-gradient-to-br from-violet-600/30 to-transparent"
  );
}
