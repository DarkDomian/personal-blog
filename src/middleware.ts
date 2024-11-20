import i18nConfig from '@/i18n/i18n.config';
import { i18nRouter } from 'next-i18n-router';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = i18nRouter(request, i18nConfig)
  const locale = response.headers.get('x-next-i18n-router-locale') || 'en';
  response.headers.set('X-NEXT-INTL-LOCALE', locale)
  // 'x-next-i18n-router-locale' => { name: 'x-next-i18n-router-locale', value: 'nb' }
  return response;
}

// only applies this middleware to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};

// WE CAN DELETE ALL THINGS BELLOW IF ALL WORK FINE

// import createMiddleware from 'next-intl/middleware';
// import {routing} from './i18n/routing';
 
// export default createMiddleware(routing);
 
// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(de|en)/:path*']
// };