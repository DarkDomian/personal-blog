import i18nConfig from "./i18n.config";

// export default async function customRequestConfig( params: { locale: string }) {
//   let { locale } = params;
//   if (!locale || !i18nConfig.locales.includes(locale as string)) {
//     locale = i18nConfig.defaultLocale;
//   }

//   return {
//     locale,
//     messages: (await import(`@/i18n/messages/${locale}.json`)).default,
//   };
// }

import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  // const locale = await getLocaleFromParams();
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !i18nConfig.locales.includes(locale as string)) {
    locale = i18nConfig.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`@/i18n/messages/${locale}.json`)).default
  };
});
