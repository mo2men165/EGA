import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

// This function handles the redirects and sets up the locale
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Redirect root path `/` to default locale
  if (pathname === '/' || pathname === '') {
    const defaultLocale = routing.locales[0]; // usually 'en'
    const url = new URL(`/${defaultLocale}`, request.url);
    return NextResponse.redirect(url);
  }
  
  // Use intlMiddleware for other paths
  return createMiddleware(routing)(request);
}

// Make sure this matcher is correctly configured
export const config = {
  // Match all paths except static assets, api routes, etc.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};