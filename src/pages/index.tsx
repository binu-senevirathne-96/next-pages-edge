import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';
import BlogList from '@/components/BlogList';
import { BlogPost } from '@/types';
import { fetchAllPosts } from '@/utils/api';

export const config = {
    runtime: 'experimental-edge',
};

interface HomeProps {
    featuredPosts: BlogPost[];
}

export default function Home({ featuredPosts }: HomeProps) {
    return (
        <Layout>
            <div className="space-y-10">
                <section className="text-center">
                    <h1 className="text-4xl font-bold text-amber-800 dark:text-amber-100 mb-4">
                        Welcome to Culinary Canvas
                    </h1>
                    <p className="text-xl text-amber-700 dark:text-amber-200 max-w-3xl mx-auto">
                        Discover delicious recipes, cooking techniques, and culinary inspiration for
                        your kitchen adventures.
                    </p>
                </section>

                <section>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-100">
                            Featured Recipes
                        </h2>
                        <Link
                            href="/blog"
                            className="text-amber-600 dark:text-amber-300 hover:underline"
                        >
                            View all recipes
                        </Link>
                    </div>
                    <BlogList posts={featuredPosts} />
                </section>

                <section className="bg-amber-100 dark:bg-amber-900 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-100 mb-4">
                        Cooking with the Seasons
                    </h2>
                    <p className="text-amber-700 dark:text-amber-200 mb-4">
                        Our recipes celebrate seasonal ingredients at their peak of flavor. From
                        spring&apos;s tender asparagus to autumn&apos;s hearty squashes, cooking
                        with the seasons connects us to nature&apos;s rhythm and brings the freshest
                        flavors to your table.
                    </p>
                    <Link
                        href="/about"
                        className="inline-flex items-center text-amber-600 dark:text-amber-300 hover:underline"
                    >
                        Learn more about our philosophy
                        <svg
                            className="ml-1 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </Link>
                </section>
            </div>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    try {
        // Fetch posts from the API (this will fail during build with Edge runtime)
        const allPosts = await fetchAllPosts();

        // Get the first 3 posts as featured posts
        const featuredPosts = allPosts.slice(0, 3);

        return {
            props: {
                featuredPosts,
            },
            // Revalidate every hour
            revalidate: 3600,
        };
    } catch (error) {
        console.error('Error in getStaticProps:', error);

        // Return empty array in case of error
        return {
            props: {
                featuredPosts: [],
            },
            revalidate: 60, // Try again sooner if there was an error
        };
    }
};
