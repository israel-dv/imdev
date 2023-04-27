/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.mensjournal.com']
  },
  pageExtensions: ['page.tsx', 'page.ts', 'tsx', 'ts']
}

module.exports = nextConfig
