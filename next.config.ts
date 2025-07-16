/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // export 모드에서 최적화 비활성화
  },
};

module.exports = nextConfig;