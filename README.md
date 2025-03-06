# Next.js Edge Runtime Hello World

A simple "Hello World" application built with Next.js 15, React 19, TypeScript, and Tailwind CSS. This project uses the Pages Router and Edge Runtime to demonstrate how to build a modern web application with Edge functions.

## Features

- **Pages Router**: Uses the traditional Next.js Pages Router instead of the App Router
- **Edge Runtime**: Demonstrates the use of Edge Runtime for faster, more efficient server-side rendering
- **Package Information Display**: Shows all dependencies and devDependencies used in the project
- **GetStaticProps with Edge**: Uses GetStaticProps with Edge Runtime to fetch static data
- **Responsive Design**: Built with Tailwind CSS for a responsive, mobile-first design
- **Dark Mode Support**: Automatically adapts to the user's preferred color scheme
- **Turbopack**: Uses Turbopack for faster development builds

## Prerequisites

- Node.js 20+ (20.16.0 recommended)
- Yarn 1.22+

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/next-pages-edge.git
cd next-pages-edge
```

2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Build and Production

To build the application for production:

```bash
yarn build
```

To start the production server:

```bash
yarn start
```

## Development Workflow

The project includes several helpful scripts:

```bash
yarn check-types   # Run TypeScript type checking
yarn deep-clean    # Clean build artifacts and cache
yarn lint          # Run ESLint for code quality
```

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy your application.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fnext-pages-edge)

## Project Structure

```
next-pages-edge/
├── public/              # Static assets
├── src/
│   ├── common/          # Common functions
│   │   └── packages.ts  # Package data functions
│   ├── components/      # React components
│   │   ├── Layout.tsx   # Layout component
│   │   └── PackageList.tsx # Package list component
│   ├── pages/           # Next.js pages
│   │   ├── _app.tsx     # Custom App component
│   │   ├── _document.tsx # Custom Document component
│   │   ├── index.tsx    # Home page with Edge Runtime
│   │   └── api/         # API routes
│   │       ├── hello.ts # Hello API route
│   │       └── packages.ts # Packages data functions
│   ├── types/           # TypeScript type definitions
│   └── middleware.ts    # Next.js middleware
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore file
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vercel.json          # Vercel configuration
```

## Edge Runtime

This project demonstrates the use of Next.js Edge Runtime, which allows your application to run on the edge of the network, closer to your users. This results in faster page loads, lower latency, and reduced server costs.

To use Edge Runtime in a Next.js page, add the following configuration:

```typescript
export const config = {
  runtime: 'experimental-edge',
};
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
