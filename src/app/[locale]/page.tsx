import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import type { Viewport } from 'next'
import Image from "next/image";


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

  // generate mok data of articles
  const mockArticles = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Article goes here ${i + 1}`,
    link: `/blog/${i + 1}`,
  }));

  const t = await getTranslations({ locale, namespace: "HomePage" });
  return (
    <div className="h-full flex flex-col flex-1 justify-center items-center px-40">
      <p className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary hidden">{t('welcome')}</p>
      <div className="flex md:flex-row md:my-20 items-start justify-between w-full h-auto">
        {/* hard coding the circle width and it's border in h, w, p and Image parameters */}
        <div className="h-[305px] w-[305px] bg-gradient-to-br from-primary to-secondary rounded-full aspect-square justify-center items-center p-[5px]">
          <Image src="/avatar.jpg" alt="Demian's avatar" width={300} height={300} className="rounded-full"/>
        </div>
        {/* typography of welcome section */}
        <div className="max-w-xl container">
          <h1 className="text-3xl font-medium text-dark-300 dark:text-light-300">Aloha, fellow coders! 👋<br /><span className="text-2xl">My name is</span><br /><b className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary selection:text-primary dark:selection:text-secondary ">Demian Domozhirov</b></h1>
          <p className="text-3xl text-light-800 dark:text-dark-200">Harmonizing creativity and technology to craft elegant and reliable software solutions.</p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center gap-10 md:my-20">
        <h2 id="projects" className="text-5xl font-medium hover:">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* <article className="w-40 h-40 bg-dark-400 shadow-footer-light dark:shadow-footer-dark "></article> */}
          {mockArticles.map((article) => (
          <article
            key={article.id}
            className="p-4 border dark:border-dark-900 dark:bg-dark-700  rounded-lg shadow-article hover:shadow-article-hovered transition-shadow duration-300"
          >
            <a
              href={article.link}
              className="block w-full h-full"
              aria-label={`Read more about ${article.title}`}
            >
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde tempora assumenda aut porro itaque iusto corporis? Placeat qui autem itaque, dolor quibusdam iste ad eveniet at ipsam nulla ipsa recusandae voluptates nisi tempora animi consequatur. Minus harum fugiat labore.
              </p>
            </a>
          </article>
        ))}
        </div>
      </div>
    </div>
  );
}
