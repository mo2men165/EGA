import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i182/routing';

// Create the next-intl middleware
const intlMiddleware = createMiddleware({
  ...routing,
  // This function can be removed if not needed
  localePrefix: 'always'
});

// Export a wrapper middleware function that handles the root path
export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Handle the root path '/' first
  if (pathname === '/' || pathname === '') {
    return NextResponse.redirect(new URL('/en', request.url));
  }
  
  // For all other routes, use the next-intl middleware
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)', '/']
};