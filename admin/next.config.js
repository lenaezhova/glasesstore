/** @type {import('next').NextConfig} */

const nextConfig = {
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
      }
    ]
  }
};

module.exports = nextConfig;
