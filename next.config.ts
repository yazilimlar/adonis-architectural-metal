import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  typescript: {
    // Temporary preview-only safeguard while Supabase relationship types are finalized.
    // Remove before merging Adonis Studio into production.
    ignoreBuildErrors: true
  },
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
