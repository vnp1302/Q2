/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  exportPathMap: async (defaultPathMap, { dev, dir, outDir, distDir, buildId }) => ({
    "/": { page: "/" },
    "/about": { page: "/about" },
    "/contact": { page: "/contact" },
    "/faq": { page: "/faq" },
    "/how-to-buy": { page: "/how-to-buy" },
    "/login-signup": { page: "/login-signup" },
    "/partners": { page: "/partners" },
    "/roadmap": { page: "/roadmap" },
    "/amp": { page: "/amp" },
    "/admin": { page: "/admin" },
  }),
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/about.html",
      },
      {
        source: "/contact",
        destination: "/contact.html",
      },
      {
        source: "/faq",
        destination: "/faq.html",
      },
      {
        source: "/how-to-buy",
        destination: "/how-to-buy.html",
      },
      {
        source: "/login-signup",
        destination: "/login-signup.html",
      },
      {
        source: "/partners",
        destination: "/partners.html",
      },
      {
        source: "/roadmap",
        destination: "/roadmap.html",
      },
      {
        source: "/amp",
        destination: "/amp.html",
      },
    ]
  },
}

module.exports = nextConfig
