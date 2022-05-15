// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  experimental: {
    newNextLinkBehavior: true,
  },
};

module.exports = nextConfig;
