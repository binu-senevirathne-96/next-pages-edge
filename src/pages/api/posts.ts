import { NextApiRequest, NextApiResponse } from 'next';
import { posts } from '@/data/posts';
import { BlogPostsResponse } from '@/types';

export default function handler(req: NextApiRequest, res: NextApiResponse<BlogPostsResponse>) {
    // Simulate a slight delay to mimic a real API
    setTimeout(() => {
        res.status(200).json({ posts });
    }, 300);
}
