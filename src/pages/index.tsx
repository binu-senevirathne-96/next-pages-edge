import React from 'react';
import Layout from '@/components/Layout';

export const config = {
  runtime: 'experimental-edge',
  regions: 'all',
};

export default function Home() {
  return (
    <Layout
      title="Hello World - Edge Runtime"
      description="A simple Hello World page running on Next.js Edge Runtime"
    >
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6">Hello World!</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
          This is a simple page running on Next.js with the experimental Edge Runtime. Edge
          functions run closer to your users for improved performance.
        </p>
        <div className="p-6 bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
            Edge Runtime Benefits
          </h2>
          <ul className="text-left text-gray-700 dark:text-gray-300 space-y-2">
            <li className="flex items-center">
              <span className="mr-2">✅</span> Faster page loads
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span> Lower latency
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span> Reduced server costs
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span> Global distribution
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/api/hello"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Node.js API
          </a>
          <a
            href="/api/edge-hello"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Try Edge API
          </a>
        </div>
      </div>
    </Layout>
  );
}
