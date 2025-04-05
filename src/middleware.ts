import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i182/routing';

// Export a wrapper middleware function that handles the root path
export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log(`Middleware running for path: ${pathname}`);
  
  // Check if we're at the root path
  if (pathname === '/' || pathname === '') {
    console.log('Root path detected, redirecting to /en');
    // Create a URL for redirection
    const url = new URL('/en', request.url);
    return NextResponse.redirect(url);
  }
  
  // For all other routes, use the next-intl middleware
  return createMiddleware(routing)(request);
}

// Make sure to include the root path in the matcher
export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)', '/']
};