import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // disable es lint
  eslint: {
    ignoreDuringBuilds: true,
  },
} as NextConfig;

export default nextConfig;
