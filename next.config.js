// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
    newNextLinkBehavior: true,
    images: { allowFutureImage: true },
  },
};

module.exports = nextConfig;
