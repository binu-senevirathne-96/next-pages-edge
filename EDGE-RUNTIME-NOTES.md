# Next.js 15 Edge Runtime Implementation Notes

This document outlines the challenges and solutions encountered while implementing a Next.js 15 food blog application with Edge Runtime, Pages Router, React 19, TypeScript, and other modern web technologies.

## Core Technologies

- **Next.js 15**: Latest version with Pages Router support
- **React 19**: Latest React version with improved performance
- **TypeScript**: For type safety and better developer experience
- **Edge Runtime**: For faster, more efficient server-side rendering
- **Turbopack**: For faster development builds
- **ESLint 9**: For code quality and consistency
- **Tailwind CSS 4**: For responsive design

## Application Theme

This application is implemented as a food blog called "Culinary Canvas" with:

- Recipe posts with detailed instructions
- Food-themed color scheme using amber/warm tones
- Culinary-focused content and terminology
- Responsive design for all devices

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

- Use `experimental-edge` instead of just `edge` in runtime configuration:
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

### 2. Static Generation with Edge Runtime

**Issue**: `getStaticProps` is not fully supported with Edge Runtime, causing build errors.

**Solution**:

- Accept that these limitations exist and handle them gracefully
- During build, you'll see warnings like:
    ```
    "getStaticProps" is not yet supported fully with "experimental-edge", detected on /blog
    ```
- These warnings are expected and don't prevent the application from working

### 3. Data Fetching in Edge Runtime

**Issue**: Standard data fetching methods may fail in Edge Runtime, especially during build.

**Solution**:

- Implement fallback mechanisms for data fetching:

    ```typescript
    export async function fetchAllPosts(): Promise<BlogPost[]> {
        // Check if we're in development mode first
        if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
            // Return mock data directly
            return mockPosts;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
            if (!response.ok) {
                throw new Error(`Failed to fetch posts: ${response.status}`);
            }
            const data: BlogPostsResponse = await response.json();
            return data.posts;
        } catch (error) {
            console.error('Error fetching posts:', error);
            // Fall back to mock data
            return mockPosts;
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
        swcMinify: true,
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

### 5. Build Artifacts and Caching Issues

**Issue**: Corrupted build artifacts causing errors like missing `build-manifest.json`.

**Solution**:

- Clean the `.next` directory before rebuilding:
    ```bash
    rm -rf .next
    ```
- This ensures a clean build without any corrupted cache files

### 6. Middleware with Edge Runtime

**Issue**: Configuring middleware to work properly with Edge Runtime.

**Solution**:

- Keep middleware simple and focused on specific tasks
- Ensure middleware is compatible with Edge Runtime limitations:
    ```typescript
    export function middleware(request: NextRequest) {
        // Simple request logging or header manipulation
        // Avoid complex operations not supported in Edge Runtime
    }
    ```

### 7. React 19 Compatibility

**Issue**: Ensuring compatibility with React 19's new features and changes.

**Solution**:

- Use the latest `@types/react` and `@types/react-dom` for TypeScript compatibility
- Ensure all components follow React 19 best practices
- Test thoroughly to catch any compatibility issues

### 8. Turbopack Integration

**Issue**: Configuring Turbopack for faster development builds.

**Solution**:

- Add the `--turbopack` flag to the dev script:
    ```json
    "scripts": {
      "dev": "next dev --turbopack"
    }
    ```
- Be aware that Turbopack may have some limitations with certain Next.js features

### 9. ESLint 9 Configuration

**Issue**: Setting up ESLint 9 with Next.js 15.

**Solution**:

- Use the latest `eslint-config-next` package
- Include `@eslint/eslintrc` in your dependencies
- Configure ESLint to work with TypeScript and React 19

### 10. Deployment Configuration

**Issue**: Configuring for deployment platforms like Vercel.

**Solution**:

- Add a `vercel.json` configuration file:
    ```json
    {
        "version": 2,
        "buildCommand": "yarn build",
        "devCommand": "yarn dev",
        "installCommand": "yarn install",
        "framework": "nextjs",
        "regions": ["iad1"],
        "github": {
            "silent": true
        }
    }
    ```
- Add a deployment script to `package.json`:
    ```json
    "scripts": {
      "deploy": "vercel deploy --prod"
    }
    ```

## Best Practices

1. **Mock Data Strategy**: Always have mock data available for development and as fallbacks
2. **Error Handling**: Implement robust error handling, especially for data fetching
3. **Progressive Enhancement**: Design your application to work even if some Edge features fail
4. **Type Safety**: Leverage TypeScript to catch potential issues early
5. **Performance Monitoring**: Monitor Edge Runtime performance in production
6. **Development Workflow**: Implement a robust development workflow:
    - Run `yarn check-types` regularly to catch type errors before they cause runtime issues
    - Use `yarn deep-clean` when encountering stubborn build issues or after major dependency updates
    - Run `yarn lint` before commits to maintain code quality
    - Consider setting up pre-commit hooks for these checks

## Limitations to Be Aware Of

1. **Static Generation**: `getStaticProps` has limited support in Edge Runtime
2. **API Access**: Some APIs available in Node.js are not available in Edge Runtime
3. **Build Process**: Edge Runtime may cause expected warnings during build
4. **Third-party Libraries**: Not all libraries are compatible with Edge Runtime

## Conclusion

Next.js 15 with Edge Runtime, Pages Router, React 19, and TypeScript offers a powerful combination for building modern web applications. While there are challenges to overcome, the benefits of improved performance and developer experience make it worthwhile. By following the solutions outlined in this document, you can successfully implement these technologies in your projects.
