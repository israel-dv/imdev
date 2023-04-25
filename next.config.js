/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.mensjournal.com']
  },
  pageExtensions: ['page.ts, page.tsx']
}

module.exports = nextConfig
