import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Geist } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = 'Hello World',
  description = 'A simple Hello World app built with Next.js and Edge Runtime',
}: LayoutProps) {
  return (
    <div className={`${geistSans.variable} font-sans min-h-screen flex flex-col`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-50 dark:bg-blue-900 shadow-sm">
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-800 dark:text-blue-100">
                Hello World
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-blue-700 dark:text-blue-200 hover:text-blue-900 dark:hover:text-white"
              >
                Home
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>
      </main>

      <footer className="bg-blue-50 dark:bg-blue-900 border-t border-blue-200 dark:border-blue-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-blue-700 dark:text-blue-200 mb-2">
            &copy; {new Date().getFullYear()} Hello World App. Built with Next.js Pages Router and
            Edge Runtime.
          </p>
          <p className="text-center text-sm text-blue-600 dark:text-blue-300 mb-2">
            Created to verify package compatibility with Pages Router and experimental-edge runtime
          </p>
          <p className="text-center text-sm text-blue-600 dark:text-blue-300">
            <a
              href="https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Learn about migrating to App Router
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
