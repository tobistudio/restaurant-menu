/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.pexels.com", "images.unsplash.com", "img.freepik.com"],
  },
};

module.exports = nextConfig;
