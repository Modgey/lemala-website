import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

// Applies this middleware to all routes except for static assets and API routes.
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
}; 