/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      },
    ],
  },
  /**
   * On Windows, a corrupted webpack filesystem cache under `.next` can cause
   * `Cannot find module './NNNN.js'` at runtime. Disabling webpack's persistent
   * cache in **development only** avoids stale chunk references (slightly slower cold compiles).
   */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;
