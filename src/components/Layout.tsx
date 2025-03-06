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
  title = 'Culinary Canvas',
  description = 'A food blog celebrating the art of cooking with recipes, techniques, and culinary inspiration',
}: LayoutProps) {
  return (
    <div className={`${geistSans.variable} font-sans min-h-screen flex flex-col`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-amber-50 dark:bg-amber-900 shadow-sm">
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-amber-800 dark:text-amber-100">
                Culinary Canvas
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-amber-700 dark:text-amber-200 hover:text-amber-900 dark:hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-amber-700 dark:text-amber-200 hover:text-amber-900 dark:hover:text-white"
              >
                Recipes
              </Link>
              <Link
                href="/about"
                className="text-amber-700 dark:text-amber-200 hover:text-amber-900 dark:hover:text-white"
              >
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow bg-amber-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>
      </main>

      <footer className="bg-amber-100 dark:bg-amber-900 border-t border-amber-200 dark:border-amber-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-amber-700 dark:text-amber-200">
            &copy; {new Date().getFullYear()} Culinary Canvas. Built with Next.js and Edge Runtime.
          </p>
        </div>
      </footer>
    </div>
  );
}
