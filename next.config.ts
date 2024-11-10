import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.gdgyonsei.moveto.kr",
        port: "",
        pathname: "/projects/**",
      },
    ],
  },
};

export default nextConfig;
