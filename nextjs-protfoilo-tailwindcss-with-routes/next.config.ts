import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "static.wixstatic.com",
      "fiverr-res.cloudinary.com",
      "drive.google.com",
    ], // Allowed external image domain
  },
};

export default nextConfig;
