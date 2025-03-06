import { GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import PackageList from '@/components/PackageList';
import { PackageData } from '@/types';
import { fetchPackageInfo } from '@/common/packages';

export const config = {
  runtime: 'experimental-edge',
};

interface HomeProps {
  packageData: PackageData;
}

export default function Home({ packageData }: HomeProps) {
  return (
    <Layout>
      <div className="space-y-10">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-100 mb-4">Hello World</h1>
          <p className="text-xl text-blue-700 dark:text-blue-200 max-w-3xl mx-auto">
            A simple Next.js application running on Edge Runtime
          </p>
        </section>

        <section>
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg mb-8">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                Project Information
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-300">
                Details about this Next.js project
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-700">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Project name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                    {packageData.projectName}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Version</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                    {packageData.projectVersion}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Runtime</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                    experimental-edge
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-4">
            Package Dependencies
          </h2>
          <PackageList packages={packageData.packages} />
        </section>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    // Fetch package information
    const packageData = await fetchPackageInfo();

    return {
      props: {
        packageData,
      },
      // Revalidate every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);

    // Return empty data in case of error
    return {
      props: {
        packageData: {
          projectName: 'next-pages-edge',
          projectVersion: '0.1.0',
          packages: [],
        },
      },
      revalidate: 60, // Try again sooner if there was an error
    };
  }
};
