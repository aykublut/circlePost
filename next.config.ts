import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // tüm hostlara izin verir
        pathname: "/**", // tüm yollar
      },
    ],
  },
};

export default nextConfig;
