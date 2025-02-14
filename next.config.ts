import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    cssChunking: true,
    webVitalsAttribution: ["LCP", "CLS", "INP"],
    reactCompiler: true,
    typedEnv: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
};

export default nextConfig;
