import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Layout from '@/components/Layout';
import { BlogPost } from '@/types';
import { fetchAllPosts, fetchPostBySlug } from '@/utils/api';

export const config = {
  runtime: 'experimental-edge',
};

interface BlogPostPageProps {
  post: BlogPost;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <Layout title={`${post.title} | Edge Blog`} description={post.excerpt}>
      <article className="prose dark:prose-invert lg:prose-lg mx-auto">
        <header className="mb-8 not-prose">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.publishedAt}</span>
            <span className="mx-2">•</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div
          className="prose dark:prose-invert lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />
      </article>
    </Layout>
  );
}

// Helper function to format the markdown content
function formatContent(content: string): string {
  // In a real app, you would use a markdown parser like remark or marked
  // For simplicity, we'll just do some basic formatting
  return content
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gm, '<em>$1</em>')
    .replace(/\n/gm, '<br />')
    .replace(/```([\s\S]*?)```/g, (match, p1) => `<pre><code>${p1}</code></pre>`)
    .replace(/- (.*)/gm, '<li>$1</li>')
    .replace(/<li>(.*)<\/li>/gm, match => `<ul>${match}</ul>`);
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // Fetch all posts to get the slugs
    const posts = await fetchAllPosts();

    // Get the paths we want to pre-render based on posts
    const paths = posts.map(post => ({
      params: { slug: post.slug },
    }));

    return {
      paths,
      fallback: 'blocking', // Show a loading state while the page is being generated
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);

    // Return empty paths in case of error
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export const getStaticProps: GetStaticProps<BlogPostPageProps, Params> = async ({ params }) => {
  try {
    if (!params) {
      return {
        notFound: true,
      };
    }

    // Fetch the post with the matching slug
    const post = await fetchPostBySlug(params.slug);

    // If the post is not found, return 404
    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
      },
      // Revalidate every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error(`Error in getStaticProps for slug ${params?.slug}:`, error);

    return {
      notFound: true,
    };
  }
};
