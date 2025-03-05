import { NextApiRequest, NextApiResponse } from "next";
import { posts } from "@/data/posts";
import { BlogPostResponse } from "@/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogPostResponse | { error: string }>
) {
  const { slug } = req.query;

  // Find the post with the matching slug
  const post = posts.find((p) => p.slug === slug);

  // If the post is not found, return a 404 error
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  // Simulate a slight delay to mimic a real API
  setTimeout(() => {
    res.status(200).json({ post });
  }, 300);
}
