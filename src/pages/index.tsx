import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import BlogList from "@/components/BlogList";
import { BlogPost } from "@/types";
import { fetchAllPosts } from "@/utils/api";

export const config = {
  runtime: "experimental-edge",
};

interface HomeProps {
  featuredPosts: BlogPost[];
}

export default function Home({ featuredPosts }: HomeProps) {
  return (
    <Layout>
      <div className="space-y-10">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Edge Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A simple blog built with Next.js and Edge Runtime to demonstrate SSG
            with Edge.
          </p>
        </section>

        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Featured Posts
            </h2>
            <Link
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View all posts
            </Link>
          </div>
          <BlogList posts={featuredPosts} />
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
    console.error("Error in getStaticProps:", error);

    // Return empty array in case of error
    return {
      props: {
        featuredPosts: [],
      },
      revalidate: 60, // Try again sooner if there was an error
    };
  }
};
