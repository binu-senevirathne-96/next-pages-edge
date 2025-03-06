import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';

interface ErrorProps {
  statusCode?: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <Layout title={`Error ${statusCode || 'Unknown'} | Edge Blog`} description="An error occurred">
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          {statusCode ? `${statusCode}` : 'Error'}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {statusCode
            ? `An error ${statusCode} occurred on the server`
            : 'An error occurred on the client'}
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
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
