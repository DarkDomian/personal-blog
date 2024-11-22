import {setRequestLocale} from 'next-intl/server';
import { notFound } from 'next/navigation';
import i18nConfig from "@/i18n/i18n.config";

// making the statik 
export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {

  const { locale } = await params

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return ( 
    <>
      {children}    
    </>
  );
}

