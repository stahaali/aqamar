import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["better-sqlite3", "@prisma/adapter-better-sqlite3"],
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
