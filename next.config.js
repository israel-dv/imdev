/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.mensjournal.com']
  },
  pageExtensions: ['ts, tsx']
}

module.exports = nextConfig
