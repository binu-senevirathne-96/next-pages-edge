import React from "react";
import Link from "next/link";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400">
            {post.title}
          </h2>
        </Link>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.publishedAt}</span>
          <span className="mx-2">•</span>
          <span>{post.readingTime}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          Read more
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
