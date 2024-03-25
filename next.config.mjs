/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "cdn1.opensecrets.org",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
