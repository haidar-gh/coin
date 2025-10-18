import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'b.wallet.ir',
      },
    ],
  },
};




export default nextConfig;
