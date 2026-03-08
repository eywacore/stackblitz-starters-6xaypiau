/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Unsplash görselleri için
  },
  eslint: {
    ignoreDuringBuilds: true, // ESLint uyarılarını görmezden gel
  },
  typescript: {
    ignoreBuildErrors: true, // TypeScript hatalarını görmezden gel (geçici)
  },
}

module.exports = nextConfig
