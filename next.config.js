/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["photos.smugmug.com"],
    formats: ["image/webp"],


  }
}

module.exports = nextConfig
