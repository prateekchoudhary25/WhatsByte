import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // Ensures proper routing
  images: {
    unoptimized: true, // Fixes potential image-related issues on Netlify
  },
};

export default nextConfig;
