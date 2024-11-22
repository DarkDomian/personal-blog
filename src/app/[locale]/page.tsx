import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import type { Viewport } from 'next'


// define the color of browser bar at phone
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#EBEBEB' },
    { media: '(prefers-color-scheme: dark)', color: '#262626' },
  ],
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

// generate static metadata on each page locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "Metadata"});

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: 'https://example.com',
      languages: {
        en: 'https://example.com',
        nb: 'https://example.com/nb',
        ja: 'https://example.com/ja',
        ru: 'https://example.com/ru',
      }
    },
    openGraph: {
      title: "Example Blog Post Title",
      description: "Brief description of the blog post for social media.",
      url: `https://example.com/${locale}`,
      images: [
        {
          url: "https://example.com/images/og-image.jpg",
          alt: "Image description",
        },
      ],
    },
    robots: "index, follow",
  };
}

// page itself
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "HomePage" });
  return (
    <div className="h-full flex flex-1 justify-center items-center ">
      <h1 className="font-bold text-9xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        {t("welcome")}
      </h1>
    </div>
  );
}
