import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dreamlayout.mnsithub.com",
        pathname: "/php/builzaphp/**",
      },
    ],
  },
};

export default nextConfig;
