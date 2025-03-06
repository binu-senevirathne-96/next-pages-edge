import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout
      title="About | Culinary Canvas"
      description="Learn more about Culinary Canvas and our food philosophy."
    >
      <div className="space-y-8 max-w-3xl mx-auto">
        <section>
          <h1 className="text-4xl font-bold text-amber-800 dark:text-amber-100 mb-4">
            About Culinary Canvas
          </h1>
          <div className="prose dark:prose-invert prose-amber">
            <p>
              Culinary Canvas is a food blog dedicated to celebrating the art of cooking and the joy
              of sharing delicious meals. We believe that cooking is both a creative expression and
              a way to connect with our cultural heritage and loved ones.
            </p>
            <p>
              Our recipes focus on seasonal ingredients, traditional techniques with modern twists,
              and the stories behind the dishes we love. Whether you&apos;re a beginner cook or an
              experienced chef, we hope to inspire your culinary adventures.
            </p>
            <h2>Our Food Philosophy</h2>
            <ul>
              <li>Cook with the seasons for the best flavor and sustainability</li>
              <li>Respect traditional techniques while embracing innovation</li>
              <li>Share the cultural context and stories behind recipes</li>
              <li>Make cooking accessible to all skill levels</li>
              <li>Celebrate the joy of sharing food with others</li>
            </ul>
            <h2>Technical Details</h2>
            <p>
              This blog is built with modern web technologies to provide a fast, responsive
              experience:
            </p>
            <ul>
              <li>Next.js 15 with Edge Runtime for performance</li>
              <li>React 19 for interactive UI components</li>
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS for beautiful, responsive design</li>
              <li>Static Site Generation for fast page loads</li>
            </ul>
            <p>We hope you enjoy exploring our recipes and food stories. Happy cooking!</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
