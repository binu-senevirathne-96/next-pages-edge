import { GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import BlogList from '@/components/BlogList';
import { BlogPost } from '@/types';
import { fetchAllPosts } from '@/utils/api';

export const config = {
    runtime: 'experimental-edge',
};

interface BlogIndexProps {
    posts: BlogPost[];
}

export default function BlogIndex({ posts }: BlogIndexProps) {
    return (
        <Layout
            title="Recipes | Culinary Canvas"
            description="Explore our collection of delicious recipes for every occasion."
        >
            <div className="space-y-8">
                <section className="text-center">
                    <h1 className="text-4xl font-bold text-amber-800 dark:text-amber-100 mb-4">
                        Recipes
                    </h1>
                    <p className="text-xl text-amber-700 dark:text-amber-200 max-w-3xl mx-auto">
                        Explore our collection of delicious recipes, cooking techniques, and
                        culinary inspiration.
                    </p>
                </section>

                <section>
                    <BlogList posts={posts} />
                </section>
            </div>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
    try {
        // Fetch posts from the API (this will fail during build with Edge runtime)
        const allPosts = await fetchAllPosts();

        return {
            props: {
                posts: allPosts,
            },
            // Revalidate every hour
            revalidate: 3600,
        };
    } catch (error) {
        console.error('Error in getStaticProps:', error);

        // Return empty array in case of error
        return {
            props: {
                posts: [],
            },
            revalidate: 60, // Try again sooner if there was an error
        };
    }
};
