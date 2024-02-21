/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["firebasestorage.googleapis.com"],
  // },
  // reactStrictMode: false,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
