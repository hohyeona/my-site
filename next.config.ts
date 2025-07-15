import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['framerusercontent.com'], // 여기에 외부 도메인 추가
  },
};

module.exports = nextConfig;
