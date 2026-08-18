import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // ← Add this to ignore TS errors
  },
  
};

export default nextConfig;
