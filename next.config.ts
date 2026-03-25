import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid failing Vercel builds when local ESLint/Next integration errors (rushstack patch).
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
