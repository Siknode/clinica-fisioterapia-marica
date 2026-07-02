import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost:3000",
    "localhost:3001",
    "*.serveousercontent.com",
    "*.loca.lt"
  ]
};

export default nextConfig;
