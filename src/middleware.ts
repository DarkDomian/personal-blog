// // import { NextResponse, type NextRequest } from "next/server";

// // import { match as matchLocale } from "@formatjs/intl-localematcher";
// // import { i18n } from "./i18n-config";
// // import Negotiator from "negotiator";

// // import { cookies } from "next/headers";

// // async function getLocale(request: NextRequest): Promise<string> {

// //   // Negotiator expects plain object so we need to transform headers
// //   const negotiatorHeaders: Record<string, string> = {};
// //   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

// //   // @ts-expect-error locales are readonly
// //   const locales: string[] = i18n.locales;

// //   // Use negotiator and intl-localematcher to get best locale
// //   const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
// //     locales
// //   );

// //   let locale = ''
// //   try {
// //     locale = matchLocale(languages, locales, i18n.defaultLocale);
// //     console.log("Matched locale:", locale);
// //   } catch (error) {
// //     locale = i18n.defaultLocale;
// //     console.warn("Matching locale failed, defaulting to:", i18n.defaultLocale, "Error: ", error);
// //   }

// //   return locale;
// // }

// // export async function middleware(request: NextRequest) {
// //   const cookieStore = await cookies();
// //   const lang = cookieStore.get("lang");

// //   const { pathname } = request.nextUrl;
// //   const defaultLocale = i18n.defaultLocale;

// //   // check the cookies value
// //   if (lang?.value && lang.value !== defaultLocale) {
// //     return NextResponse.redirect(
// //       new URL(
// //         `/${lang.value}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
// //         request.url
// //       )
// //     );
// //   } else if (lang?.value && lang.value === "en") {
// //     return NextResponse.redirect(
// //       new URL(`${pathname.replace(`/${defaultLocale}`, "")}`, request.url)
// //     );
// //   }

// //   const locale = await getLocale(request);

// //   cookieStore.set('lang', locale, { maxAge: 60 * 60 * 24 * 7 })

// //   // check the user's pref
// //   if (locale && locale !== defaultLocale) {
// //     return NextResponse.redirect(
// //       new URL(
// //         `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
// //         request.url
// //       )
// //     );
// //   } else if (locale && locale === "en") {
// //     return NextResponse.redirect(
// //       new URL(`${pathname.replace(`/${defaultLocale}`, "")}`, request.url)
// //     );
// //   }
// // }

// // // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
// // // // If you have one
// // // if (
// // //   [
// // //     '/manifest.json',
// // //     '/favicon.ico',
// // //     // Your other files in `public`
// // //   ].includes(pathname)
// // // )
// // //   return

// // // Check if there is any supported locale in the pathname
// // // const pathnameIsMissingLocale = i18n.locales.every(
// // //   (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
// // // );

// // export const config = {
// //   // Matcher ignoring `/_next/` and `/api/`
// //   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// // };





// import { NextResponse, type NextRequest } from "next/server";
// import { match as matchLocale } from "@formatjs/intl-localematcher";
// import { i18n } from "./i18n-config";
// import Negotiator from "negotiator";

// export function getLocale(request: NextRequest): string {
//   // Преобразуем заголовки для Negotiator
//   const negotiatorHeaders: Record<string, string> = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

//   const locales = [...i18n.locales];
//   const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);

//   let locale = '';
//   try {
//     locale = matchLocale(languages, locales, i18n.defaultLocale);
//   } catch {
//     locale = i18n.defaultLocale;
//   }

//   return locale;
// }

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const defaultLocale = i18n.defaultLocale;
//   const lang = request.cookies.get("lang")?.value;

//   // Проверка: если куки `lang` совпадает с текущим префиксом URL, пропустить редирект
//   if (lang && pathname.startsWith(`/${lang}`)) {
//     return NextResponse.next();
//   }

//   // Проверка на язык в URL: если нет куки `lang`, определить язык
//   const locale = lang || getLocale(request);

//   // Устанавливаем куки `lang`, если он не был задан
//   const response = NextResponse.next();
//   if (!lang) {
//     response.cookies.set("lang", locale, { maxAge: 60 * 60 * 24 * 7 });
//   }

//   // Редиректим на нужный язык, если URL не содержит префикс с языком
//   if (locale !== defaultLocale && !pathname.startsWith(`/${locale}`)) {
//     return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
//   } else if (locale === defaultLocale && pathname.startsWith(`/${defaultLocale}`)) {
//     // Если это язык по умолчанию, убираем префикс из URL
//     return NextResponse.redirect(new URL(pathname.replace(`/${defaultLocale}`, ''), request.url));
//   }


//   // Проверяем, существует ли путь, если нет, пропускаем обработку middleware
//   if (!pathname.startsWith("/_next")) {
//     // Next.js автоматически отдает 404 для несуществующих страниц
//     return NextResponse.next();
//   }

//   return response;
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-expect-error locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  // if (
  //   [
  //     '/manifest.json',
  //     '/favicon.ico',
  //     // Your other files in `public`
  //   ].includes(pathname)
  // )
  //   return

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
