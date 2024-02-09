/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["firebasestorage.googleapis.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
