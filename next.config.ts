import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-2e7feb392f3f454ca2a10a34bf12aa89.r2.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "seo-cms.hyphen.digital",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
