import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // প্রডাকশন বিল্ডের সময় টাইপ এরর ইগ্নোর করার জন্য
    ignoreBuildErrors: true,
  },
};

export default nextConfig; 
