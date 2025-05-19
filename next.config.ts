import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  output: "export",
  images: {
    unoptimized: true, // 👈 Required for static export
  },
};

export default nextConfig;
