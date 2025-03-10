# Next.js 15 Edge Runtime Implementation Notes with Pages Router

This document outlines the implementation of a Next.js 15 Hello World application using the **Pages Router** (not App Router) with Edge Runtime, React 19, TypeScript, and other modern web technologies. This project was specifically created to verify compatibility and support of all packages with the Pages Router and experimental-edge runtime, rather than migrating to the App Router.

## Core Technologies

- **Next.js 15 Pages Router**: Using the traditional file-based routing system, not the newer App Router
- **React 19**: Latest React version with improved performance
- **TypeScript**: For type safety and better developer experience
- **Edge Runtime**: For faster, more efficient server-side rendering
- **Turbopack**: For faster development builds
- **ESLint 9**: For code quality and consistency
- **Tailwind CSS 4**: For responsive design

## Application Theme

This application is implemented as a simple Hello World app that:

- Displays package information from the project
- Uses a clean blue color scheme
- Demonstrates Edge Runtime capabilities with Pages Router
- Showcases Next.js Pages Router architecture (not App Router)
- Verifies package compatibility with experimental-edge runtime

## Pages Router vs App Router

This project intentionally uses the **Pages Router** architecture instead of the newer App Router for several reasons:

1. **Edge Runtime Compatibility**: The Pages Router has more mature support for Edge Runtime
2. **Package Compatibility**: To verify that all packages work correctly with Pages Router and experimental-edge runtime
3. **Simpler Mental Model**: Pages Router follows a more traditional routing approach
4. **Established Patterns**: Well-established patterns for data fetching and layouts
5. **API Routes Structure**: Cleaner separation of API routes in the Pages Router

> **Important**: This project was specifically created to test and demonstrate compatibility of modern packages with the Pages Router and experimental-edge runtime, rather than migrating to the App Router which might introduce additional compatibility challenges.

> **Note**: If you're interested in migrating to the App Router in the future, refer to the official [Next.js App Router Migration Guide](https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration).

### Key Differences Between Pages Router and App Router

| Feature        | Pages Router                           | App Router                         |
| -------------- | -------------------------------------- | ---------------------------------- |
| Directory      | `/pages`                               | `/app`                             |
| Data Fetching  | `getStaticProps`, `getServerSideProps` | React Server Components, `fetch()` |
| Layouts        | `_app.js`, `_document.js`              | `layout.js`                        |
| Error Handling | `_error.js`, `getInitialProps`         | `error.js`                         |
| Loading States | Custom implementation                  | `loading.js`                       |
| Route Handlers | API Routes in `/pages/api`             | Route Handlers in `/app/api`       |

## Project Structure

```
next-pages-edge/
├── public/              # Static assets
├── src/
│   ├── common/          # Common functions
│   │   └── packages.ts  # Package data functions
│   ├── components/      # React components
│   │   ├── Layout.tsx   # Layout component (Pages Router pattern)
│   │   └── PackageList.tsx # Package list component
│   ├── pages/           # Next.js Pages Router directory (not app/)
│   │   ├── _app.tsx     # Custom App component (Pages Router specific)
│   │   ├── _document.tsx # Custom Document component (Pages Router specific)
│   │   ├── index.tsx    # Home page with Edge Runtime
│   │   ├── 404.tsx      # Custom 404 page
│   │   ├── _error.tsx   # Custom error page (Pages Router specific)
│   │   └── api/         # API routes (Pages Router pattern)
│   │       ├── hello.ts # Hello API route
│   │       └── packages.ts # Packages API endpoint
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts     # Type definitions
│   └── middleware.ts    # Next.js middleware
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies
└── other config files   # Various configuration files
```

## Useful Scripts

To enhance your development workflow, add these helpful scripts to your `package.json`:

```json
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "check-types": "tsc --noEmit",
  "deep-clean": "rm -rf .next node_modules/.cache",
  "deploy": "vercel deploy --prod"
}
```

- **check-types**: Runs TypeScript type checking without emitting files, useful for catching type errors early
- **deep-clean**: Removes build artifacts and cache directories to resolve stubborn build issues
- **lint**: Runs ESLint to ensure code quality and consistency

## Key Challenges and Solutions

### 1. Edge Runtime Configuration

**Issue**: Configuring Edge Runtime properly in Next.js 15 with Pages Router.

**Solution**:

- Use `experimental-edge` in runtime configuration:
  ```typescript
  export const config = {
    runtime: 'experimental-edge',
  };
  ```
- This must be added to each page that should use the Edge Runtime.

**Note**: The Edge Runtime is still experimental in Next.js 15 with Pages Router, so you'll see warnings like:

```
⚠ You are using an experimental edge runtime, the API might change.
```

### 2. GetStaticProps with Edge Runtime

**Issue**: GetStaticProps is not fully supported with Edge Runtime.

**Error Message**:

```
"getStaticProps" is not yet supported fully with "experimental-edge", detected on /index
```

**Solution**:

- Use static data or mock data for development and build:

```typescript
export async function fetchPackageInfo(): Promise<PackageData> {
  // Static package data for the Hello World app
  const packageData: PackageData = {
    projectName: 'next-pages-edge',
    projectVersion: '0.1.0',
    packages: [
      { name: 'next', version: '15.2.1', type: 'dependency' },
      // ... other packages
    ],
  };

  return packageData;
}
```

### 3. Data Fetching in Edge Runtime

**Issue**: Edge Runtime has limitations on data fetching methods.

**Solution**:

- Use the native `fetch` API instead of libraries like axios:

```typescript
export default async function handler(_req: NextApiRequest, res: NextApiResponse<PackageData>) {
  try {
    const packageData = await fetchPackageInfo();
    res.status(200).json(packageData);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      projectName: 'next-pages-edge',
      projectVersion: '0.1.0',
      packages: [],
    });
  }
}
```

### 4. Next.js Configuration for Edge

**Issue**: Proper configuration of `next.config.ts` for Edge Runtime compatibility.

**Solution**:

- Configure `next.config.ts` with appropriate settings:
  ```typescript
  const nextConfig = {
    reactStrictMode: true,
    serverExternalPackages: [],
    output: 'standalone',
    images: {
      domains: [],
    },
    experimental: {
      disableOptimizedLoading: true,
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
          ],
        },
      ];
    },
  };
  ```

### 5. Custom Error Pages with Edge Runtime

**Issue**: Custom error pages like 404.tsx may have issues with Edge Runtime.

**Solution**:

- Keep custom error pages (like 404.tsx) as regular pages without Edge Runtime configuration:

  ```typescript
  // src/pages/404.tsx
  import Link from 'next/link';
  import Layout from '@/components/Layout';

  export default function Custom404() {
    return (
      <Layout
        title="404 - Page Not Found | Hello World"
        description="The page you are looking for does not exist."
      >
        {/* Error page content */}
      </Layout>
    );
  }
  ```

### 6. Middleware with Edge Runtime

**Issue**: Configuring middleware to work properly with Edge Runtime.

**Solution**:

- Use the experimental-edge runtime for middleware:

  ```typescript
  export const config = {
    runtime: 'experimental-edge',
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  };

  export function middleware(request: NextRequest) {
    // Simple request logging or header manipulation
    console.log(`Middleware: Accessing ${request.nextUrl.pathname}`);
    return NextResponse.next();
  }
  ```

### 7. Type Definitions for Components

**Issue**: Ensuring proper type definitions for components and data.

**Solution**:

- Create clear interface definitions for all components and data structures:

  ```typescript
  // src/types/index.ts
  export interface PackageInfo {
    name: string;
    version: string;
    type: 'dependency' | 'devDependency';
  }

  export interface PackageData {
    packages: PackageInfo[];
    projectName: string;
    projectVersion: string;
  }

  // src/components/PackageList.tsx
  interface PackageListProps {
    packages: PackageInfo[];
  }

  export default function PackageList({ packages }: PackageListProps) {
    // Component implementation
  }
  ```

## Best Practices

1. **Mock Data Strategy**: Always have mock data available for development and as fallbacks
2. **Error Handling**: Implement robust error handling, especially for data fetching
3. **Progressive Enhancement**: Design your application to work even if some Edge features fail
4. **Type Safety**: Leverage TypeScript to catch potential issues early
5. **Performance Monitoring**: Monitor Edge Runtime performance in production
6. **Development Workflow**: Implement a robust development workflow with the scripts mentioned above

## Limitations to Be Aware Of

1. **Static Generation**: `getStaticProps` has limited support in Edge Runtime
2. **API Access**: Some APIs available in Node.js are not available in Edge Runtime
3. **Build Process**: Edge Runtime may cause expected warnings during build
4. **Third-party Libraries**: Not all libraries are compatible with Edge Runtime
5. **Custom Error Pages**: Some custom error pages may need to avoid using Edge Runtime

## Conclusion

Next.js 15 with Edge Runtime, Pages Router, React 19, and TypeScript offers a powerful combination for building modern web applications. While there are challenges to overcome, the benefits of improved performance and developer experience make it worthwhile. By following the solutions outlined in this document, you can successfully implement these technologies in your projects.

## Package Compatibility with Pages Router and Edge Runtime

This project was specifically created to verify the compatibility of modern packages with the Pages Router and experimental-edge runtime. Here's what we found:

1. **React 19**: Fully compatible with Pages Router and experimental-edge runtime
2. **TypeScript**: Works seamlessly with proper type definitions
3. **Tailwind CSS 4**: No compatibility issues when configured correctly
4. **ESLint 9**: Works well with appropriate configuration
5. **Turbopack**: Compatible with Pages Router and experimental-edge runtime

### Why Not Migrate to App Router?

While the App Router offers many new features, there are several reasons to maintain a Pages Router project:

1. **Established Codebase**: Many projects have a large existing codebase built on Pages Router
2. **Edge Runtime Support**: The Pages Router has more mature support for Edge Runtime
3. **Simpler Mental Model**: Pages Router follows a more traditional and familiar routing approach
4. **API Routes Structure**: Cleaner separation of API routes in the Pages Router
5. **Package Compatibility**: Some packages may not yet be fully compatible with App Router

This project demonstrates that it's possible to use modern packages and features while maintaining a Pages Router architecture, without the need to migrate to the App Router.

## Edge Runtime Configuration

To use Edge Runtime in a Next.js page, add the following configuration:

```typescript
export const config = {
  runtime: 'experimental-edge',
};
```
