/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '192.168.1.56:3000'],
    },
  },
};

module.exports = nextConfig;
