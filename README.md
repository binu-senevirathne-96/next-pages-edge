# Culinary Canvas: A Next.js Food Blog

A food blog application built with Next.js 15, React 19, TypeScript, and Tailwind CSS. This project uses the Pages Router and Edge Runtime to demonstrate how to build a modern web application focused on culinary content.

## Features

- **Food Blog Theme**: Recipe posts, culinary content, and food-focused design
- **Pages Router**: Uses the traditional Next.js Pages Router instead of the App Router
- **Edge Runtime**: Demonstrates the use of Edge Runtime for faster, more efficient server-side rendering
- **Static Site Generation (SSG)**: Pre-renders pages at build time for better performance
- **API Routes**: Includes mock API endpoints for fetching recipe data
- **Middleware**: Implements basic request logging middleware
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
│   ├── components/      # React components
│   ├── data/            # Mock recipe data
│   ├── pages/           # Next.js pages
│   │   ├── api/         # API routes
│   │   ├── blog/        # Recipe pages
│   │   ├── _app.tsx     # Custom App component
│   │   ├── _document.tsx # Custom Document component
│   │   ├── index.tsx    # Home page
│   │   └── about.tsx    # About page
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript types
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

## License

This project is licensed under the MIT License - see the LICENSE file for details.
