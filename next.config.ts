import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Certificate images load straight from Credly, Kaggle, Coursera and Udemy (see src/content/certifications.ts)
    remotePatterns: [
      { protocol: "https", hostname: "images.credly.com" },
      { protocol: "https", hostname: "storage.googleapis.com", pathname: "/kaggle-learn-certificates/**" },
      { protocol: "https", hostname: "s3.amazonaws.com", pathname: "/coursera_assets/**" },
      { protocol: "https", hostname: "udemy-certificate.s3.amazonaws.com" },
    ],
  },
};

export default nextConfig;
