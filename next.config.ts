import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["api.tl-base.kz"],
  },
};

export default nextConfig;
