import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout
      title="About | Edge Blog"
      description="Learn more about Edge Blog and how it was built."
    >
      <div className="space-y-8 max-w-3xl mx-auto">
        <section>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Edge Blog
          </h1>
          <div className="prose dark:prose-invert">
            <p>
              Edge Blog is a simple blog application built with Next.js 15,
              React 18, TypeScript, and Tailwind CSS. It uses the Pages Router
              and Edge Runtime to demonstrate how to build a modern web
              application.
            </p>
            <p>
              This blog was created as a demonstration of using Edge Runtime
              with Static Site Generation (SSG) in Next.js. The Edge Runtime
              allows you to run your code at the edge, closer to your users,
              resulting in faster response times and improved performance.
            </p>
            <h2>Technologies Used</h2>
            <ul>
              <li>Next.js 15</li>
              <li>React 18</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Edge Runtime</li>
              <li>Pages Router</li>
              <li>Turbopack</li>
            </ul>
            <h2>Features</h2>
            <ul>
              <li>Static Site Generation (SSG)</li>
              <li>Edge Runtime</li>
              <li>Responsive Design</li>
              <li>Dark Mode Support</li>
              <li>API Routes</li>
              <li>Middleware</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
