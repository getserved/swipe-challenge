/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgs.swipejobs.com',
        port: '',
        pathname: '/js/job-category/**',
      },
    ],
  },
}

module.exports = nextConfig
