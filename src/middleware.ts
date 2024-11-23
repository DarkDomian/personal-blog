import i18nConfig from '@/i18n/i18n.config';
import { i18nRouter } from 'next-i18n-router';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // forming a response
  const response = i18nRouter(request, i18nConfig)
  // taking the locale defined by a router
  const locale = response.headers.get('x-next-i18n-router-locale') || 'en';
  // set taken locale to header wich work with next-intl
  response.headers.set('X-NEXT-INTL-LOCALE', locale)
  
  return response;
}

// only applies this middleware to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};
