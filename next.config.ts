/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  output: "standalone", // مهم برای Serverless با DB
};

module.exports = nextConfig;
