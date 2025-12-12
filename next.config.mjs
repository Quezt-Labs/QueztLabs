/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Enable compression
  compress: true,
  // Modern browser support - reduce legacy JavaScript
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Optimize package imports to reduce bundle size
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // Set Turbopack root to silence warning about multiple lockfiles
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
