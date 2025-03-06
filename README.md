# Next.js Edge Runtime Hello World with Pages Router

A simple "Hello World" application built with Next.js 15, React 19, TypeScript, and Tailwind CSS. This project intentionally uses the **Pages Router** (not App Router) with Edge Runtime to demonstrate how to build a modern web application with Edge functions.

## Project Purpose

This project was specifically created to **verify compatibility and support of all packages with the Pages Router and experimental-edge runtime**, rather than migrating to the App Router. It serves as a reference implementation for teams that need to maintain Pages Router projects while leveraging modern features like Edge Runtime.

## Features

- **Pages Router Architecture**: Uses the traditional Next.js Pages Router instead of the newer App Router
- **Edge Runtime**: Demonstrates the use of Edge Runtime for faster, more efficient server-side rendering
- **Package Information Display**: Shows all dependencies and devDependencies used in the project
- **GetStaticProps with Edge**: Uses GetStaticProps with Edge Runtime to fetch static data
- **Responsive Design**: Built with Tailwind CSS for a responsive, mobile-first design
- **Dark Mode Support**: Automatically adapts to the user's preferred color scheme
- **Turbopack**: Uses Turbopack for faster development builds
- **Package Compatibility**: Verifies that modern packages work with Pages Router and experimental-edge runtime

## Why Pages Router?

This project intentionally uses the Pages Router instead of the App Router for several reasons:

1. **Edge Runtime Compatibility**: The Pages Router has more mature support for Edge Runtime
2. **Package Compatibility**: To verify that all packages work correctly with Pages Router and experimental-edge runtime
3. **Simpler Mental Model**: Pages Router follows a more traditional routing approach
4. **Established Patterns**: Well-established patterns for data fetching and layouts
5. **API Routes Structure**: Cleaner separation of API routes in the Pages Router

> **Important**: This project was specifically created to test and demonstrate compatibility of modern packages with the Pages Router and experimental-edge runtime, rather than migrating to the App Router which might introduce additional compatibility challenges.

> **Note**: If you're interested in migrating to the App Router in the future, refer to the official [Next.js App Router Migration Guide](https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration).

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

## Environment Variables

This project uses environment variables for configuration. Create a `.env.local` file in the root directory with the following variables:

```bash
# Server Configuration
PORT=3000
NODE_ENV=development

# API Configuration (optional)
API_URL=http://localhost:3000/api

# Feature Flags
ENABLE_ANALYTICS=false
```

You can also use different environment files for different environments:

- `.env.development` - Used during development
- `.env.production` - Used in production
- `.env.test` - Used during testing

> **Note**: Never commit your `.env` files to version control. The `.env*` pattern is already included in the `.gitignore` file.

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
├── public/                  # Static assets
├── src/
│   ├── common/              # Common functions
│   │   └── packages.ts      # Package data functions
│   ├── components/          # React components
│   │   ├── Layout.tsx       # Layout component (Pages Router pattern)
│   │   └── PackageList.tsx  # Package list component
│   ├── pages/               # Next.js Pages Router directory (not app/)
│   │   ├── _app.tsx         # Custom App component (Pages Router specific)
│   │   ├── _document.tsx    # Custom Document component (Pages Router specific)
│   │   ├── index.tsx        # Home page with Edge Runtime
│   │   ├── 404.tsx          # Custom 404 page
│   │   ├── _error.tsx       # Custom error page (Pages Router specific)
│   │   └── api/             # API routes (Pages Router pattern)
│   │       ├── hello.ts     # Hello API route
│   │       └── packages.ts  # Packages API endpoint
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # Type definitions
│   └── middleware.ts        # Next.js middleware
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies
└── other config files       # Various configuration files
```

## Key Differences Between Pages Router and App Router

| Feature        | Pages Router                           | App Router                         |
| -------------- | -------------------------------------- | ---------------------------------- |
| Directory      | `/pages`                               | `/app`                             |
| Data Fetching  | `getStaticProps`, `getServerSideProps` | React Server Components, `fetch()` |
| Layouts        | `_app.js`, `_document.js`              | `layout.js`                        |
| Error Handling | `_error.js`, `getInitialProps`         | `error.js`                         |
| Loading States | Custom implementation                  | `loading.js`                       |
| Route Handlers | API Routes in `/pages/api`             | Route Handlers in `/app/api`       |

## Edge Runtime

This project demonstrates the use of Next.js Edge Runtime, which allows your application to run on the edge of the network, closer to your users. This results in faster page loads, lower latency, and reduced server costs.

To use Edge Runtime in a Next.js page, add the following configuration:

```typescript
export const config = {
  runtime: 'experimental-edge',
};
```
