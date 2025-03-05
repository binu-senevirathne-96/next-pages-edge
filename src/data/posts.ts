import { BlogPost } from "@/types";

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js Edge Runtime",
    slug: "getting-started-with-nextjs-edge-runtime",
    excerpt:
      "Learn how to use the Edge Runtime in Next.js for faster, more efficient server-side rendering.",
    content: `
# Getting Started with Next.js Edge Runtime

Next.js Edge Runtime allows you to run your code at the edge, closer to your users, resulting in faster response times and improved performance.

## What is Edge Runtime?

Edge Runtime is a lightweight JavaScript runtime that runs on the edge of the network, closer to the user. It's designed to be fast and efficient, with a smaller set of APIs compared to Node.js.

## Benefits of Edge Runtime

- **Performance**: Faster response times due to proximity to users
- **Scalability**: Automatically scales based on demand
- **Cost-effective**: Pay only for what you use
- **Global reach**: Deploy your code globally with minimal effort

## How to Use Edge Runtime in Next.js

To use Edge Runtime in Next.js, you need to add the following configuration to your page:

\`\`\`ts
export const config = {
  runtime: 'edge',
}
\`\`\`

This tells Next.js to use the Edge Runtime for this page instead of the default Node.js runtime.

## Limitations

Edge Runtime has some limitations compared to Node.js:

- Limited set of APIs
- No access to the file system
- Limited memory and CPU
- No support for native Node.js modules

Despite these limitations, Edge Runtime is a powerful tool for building fast, efficient web applications.
    `,
    author: "Jane Doe",
    publishedAt: "2023-05-15",
    readingTime: "5 min read",
  },
  {
    id: "2",
    title: "Building a Blog with Next.js and Tailwind CSS",
    slug: "building-a-blog-with-nextjs-and-tailwind",
    excerpt:
      "A step-by-step guide to building a blog with Next.js and Tailwind CSS.",
    content: `
# Building a Blog with Next.js and Tailwind CSS

In this tutorial, we'll build a simple blog using Next.js and Tailwind CSS.

## Setting Up the Project

First, create a new Next.js project with Tailwind CSS:

\`\`\`bash
npx create-next-app my-blog --typescript --tailwind
\`\`\`

## Creating the Blog Posts

We'll store our blog posts as markdown files in the \`/posts\` directory. Each post will have a frontmatter section with metadata like title, date, and author.

## Displaying the Blog Posts

We'll use the \`getStaticProps\` function to fetch the blog posts at build time and display them on the home page.

## Creating the Blog Post Page

We'll use dynamic routes to create a page for each blog post. We'll use the \`getStaticPaths\` function to generate the paths for each post at build time.

## Styling with Tailwind CSS

Tailwind CSS makes it easy to style our blog without writing custom CSS. We'll use Tailwind's utility classes to create a clean, modern design.

## Conclusion

Building a blog with Next.js and Tailwind CSS is a great way to learn these technologies while creating a useful project.
    `,
    author: "John Smith",
    publishedAt: "2023-06-20",
    readingTime: "8 min read",
  },
  {
    id: "3",
    title: "Understanding Static Site Generation (SSG) in Next.js",
    slug: "understanding-ssg-in-nextjs",
    excerpt:
      "A deep dive into Static Site Generation (SSG) in Next.js and when to use it.",
    content: `
# Understanding Static Site Generation (SSG) in Next.js

Static Site Generation (SSG) is a powerful feature in Next.js that allows you to pre-render pages at build time.

## What is SSG?

SSG is a technique where pages are generated at build time rather than at request time. This results in faster page loads and better SEO.

## When to Use SSG

SSG is ideal for pages that don't need to be updated frequently and can be pre-rendered at build time. Examples include:

- Blog posts
- Documentation
- Marketing pages
- Product listings

## How to Use SSG in Next.js

To use SSG in Next.js, you need to export a \`getStaticProps\` function from your page:

\`\`\`tsx
export async function getStaticProps() {
  // Fetch data from an API
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  // Return the data as props
  return {
    props: {
      data,
    },
  }
}
\`\`\`

For dynamic routes, you also need to export a \`getStaticPaths\` function:

\`\`\`tsx
export async function getStaticPaths() {
  // Fetch the list of possible values for id
  const res = await fetch('https://api.example.com/posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time
  return { paths, fallback: false }
}
\`\`\`

## Incremental Static Regeneration (ISR)

Next.js also supports Incremental Static Regeneration (ISR), which allows you to update static pages after they've been built. This is useful for pages that need to be updated occasionally but not on every request.

## Conclusion

SSG is a powerful feature in Next.js that can significantly improve the performance and SEO of your website. By understanding when and how to use it, you can build faster, more efficient web applications.
    `,
    author: "Alice Johnson",
    publishedAt: "2023-07-10",
    readingTime: "6 min read",
  },
];
