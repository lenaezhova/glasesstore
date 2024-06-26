/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: false,
    styledComponents: {
      minify: true,
      displayName: false
    }
  },
  experimental: {
    appDir: true
  },
  sassOptions: {
    prependData: '@use "src/styles/mixins" as *;'
  },
  reactStrictMode: false,
  images: {
    domains: ['*.joytech.store'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.slingacademy.com'
      },
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com'
      },
      {
        protocol: 'http',
        hostname: 'localhost'
      },
      {
        protocol: 'https',
        hostname: 'glasesstoreserver.vercel.app'
      }
    ]
  }
};

module.exports = nextConfig;
