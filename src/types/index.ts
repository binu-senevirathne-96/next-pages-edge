export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readingTime: string;
}

export interface BlogPostsResponse {
  posts: BlogPost[];
}

export interface BlogPostResponse {
  post: BlogPost;
}
