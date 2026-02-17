import { createContentlayerPlugin } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  reactStrictMode: true,
  transpilePackages: ['react-tweet'],
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  swcMinify: true,
};

const withContentlayer = createContentlayerPlugin({
  configPath: 'contentlayer.config.ts',
});

export default withContentlayer(nextConfig);
