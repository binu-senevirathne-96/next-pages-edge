import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Custom404() {
  return (
    <Layout
      title="404 - Page Not Found | Hello World"
      description="The page you are looking for does not exist."
    >
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="text-6xl font-bold text-blue-800 dark:text-blue-100 mb-4">404</h1>
        <p className="text-xl text-blue-600 dark:text-blue-300 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </Layout>
  );
}
