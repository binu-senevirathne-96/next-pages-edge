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
  title = 'Edge Runtime Demo',
  description = 'A simple demo of Next.js with Edge Runtime',
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
                Edge Runtime Demo
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

      <footer className="bg-blue-50 dark:bg-blue-900 border-t border-blue-100 dark:border-blue-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-blue-700 dark:text-blue-200">
            &copy; {new Date().getFullYear()} Edge Runtime Demo. Built with Next.js and Edge
            Runtime.
          </p>
        </div>
      </footer>
    </div>
  );
}
