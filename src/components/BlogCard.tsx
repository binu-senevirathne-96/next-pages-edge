import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white dark:bg-amber-950 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-amber-100 dark:border-amber-800">
      <div className="p-6">
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-semibold text-amber-800 dark:text-amber-100 mb-2 hover:text-amber-600 dark:hover:text-amber-300">
            {post.title}
          </h2>
        </Link>
        <div className="flex items-center text-sm text-amber-600 dark:text-amber-300 mb-4">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.publishedAt}</span>
          <span className="mx-2">•</span>
          <span>{post.readingTime}</span>
        </div>
        <p className="text-amber-700 dark:text-amber-200 mb-4">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-amber-600 dark:text-amber-300 hover:underline"
        >
          Read recipe
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
      </div>
    </div>
  );
}
