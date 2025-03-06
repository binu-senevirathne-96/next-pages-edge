import { BlogPost, BlogPostsResponse, BlogPostResponse } from '@/types';

// Import posts directly to avoid dynamic imports which can cause issues
import { posts as mockPosts } from '@/data/posts';

// This function simulates fetching all blog posts from an external API
export async function fetchAllPosts(): Promise<BlogPost[]> {
  // In development or during build, return mock data directly
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
    return mockPosts;
  }

  try {
    // This code will never run in development or during build
    const response = await fetch('https://api.example.com/posts');
    const data = (await response.json()) as BlogPostsResponse;
    return data.posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return mockPosts;
  }
}

// This function simulates fetching a single blog post by slug from an external API
export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  // In development or during build, return mock data directly
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
    return mockPosts.find(post => post.slug === slug) || null;
  }

  try {
    // This code will never run in development or during build
    const response = await fetch(`https://api.example.com/posts/${slug}`);
    const data = (await response.json()) as BlogPostResponse;
    return data.post;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return mockPosts.find(post => post.slug === slug) || null;
  }
}
