/** Deterministic cover palettes — unique per slug, tuned by category. */

const categoryHue: Record<string, number> = {
  "AI & Tools": 285,
  Engineering: 250,
  Culture: 45,
  Design: 320,
  "Hot Take": 15,
};

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return Math.abs(h);
}

export type CoverPalette = {
  from: string;
  via: string;
  to: string;
  accent: string;
  pattern: number;
};

export function coverPaletteFor(slug: string, category: string): CoverPalette {
  const h = hashString(slug);
  const baseHue = categoryHue[category] ?? 285;
  const hue1 = (baseHue + (h % 24)) % 360;
  const hue2 = (hue1 + 28 + (h % 18)) % 360;
  const hue3 = (hue1 + 55) % 360;
  const light = 0.52 + (h % 8) / 100;
  const chroma = 0.14 + (h % 6) / 100;

  return {
    from: `oklch(${light} ${chroma} ${hue1})`,
    via: `oklch(${light + 0.08} ${chroma * 0.85} ${hue2})`,
    to: `oklch(${0.94} 0.03 ${hue3})`,
    accent: `oklch(${0.38} 0.16 ${hue1})`,
    pattern: h % 4,
  };
}

export function coverInitials(title: string): string {
  const words = title.trim().split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return (words[0]?.slice(0, 2) ?? "QL").toUpperCase();
}
