import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Add serverExternalPackages for Edge runtime
  serverExternalPackages: [],
  // Configure Vercel deployment
  output: 'standalone',
  // Configure image domains if needed
  images: {
    domains: [],
  },
  // Disable experimental Edge runtime warnings
  experimental: {
    // This helps with Edge runtime compatibility
    disableOptimizedLoading: true,
  },
  // Add custom headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
