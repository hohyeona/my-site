/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Image optimization API 제거
  },
  // typedRoutes 제거도 필요하다면
  experimental: {
    typedRoutes: false,
  },
}

module.exports = nextConfig
