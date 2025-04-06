import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Handle root path redirection
  if (pathname === '/' || pathname === '') {
    const defaultLocale = routing.locales[0]; 
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }
  
  // Let next-intl handle locale-aware routes
  return createMiddleware(routing)(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};