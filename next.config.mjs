/** @type {import('next').NextConfig} */
const nextConfig = {
  //DvlprChris config
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
  //DvlprChris config
};

export default nextConfig;
