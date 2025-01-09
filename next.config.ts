import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    useLightningcss: true,
    cssChunking: true,
    webVitalsAttribution: ["LCP", "CLS", "INP"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
};

export default nextConfig;
