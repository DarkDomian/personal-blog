import Link from "next/link";
import ThemeSwitch from "./ThemeSwitcher";
import LanguageSwitch from "./LanguageSwitcher";

import MyLogo from "@/components/MyLogo";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export async function Header({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Header" });

  return (
    <header className="bg-light-200 dark:bg-dark-600 shadow">
      <nav className="container flex px-2 py-2 gap-5 items-center md:justify-between">
        <Link
          href="/"
          className="font-bold text-9xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary "
        >
          <MyLogo
            className="fill-dark hover:fill-dark-300 hover:dark:fill-light-50 dark:fill-light-300"
            size="40px"
            alt="A beautiful logo of my application"
          />
        </Link>
        <div className="flex gap-5">
          <Link href="/" className="animated-link">{t("home")}</Link>
          <Link href="/blog" className="animated-link">{t("blog")}</Link>
          <ThemeSwitch switchClass="w-6 h-6 theme-switcher" sceletonClass="w-6 h-6 bg-neutral-600 animate-pulse rounded-full"/>
          <LanguageSwitch />
        </div>
      </nav>
    </header>
  );
}
