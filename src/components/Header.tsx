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
    <header className="bg-light-200 dark:bg-dark-600 shadow h-[56px]">
      <nav className="flex py-2 px-2 md:px-10 items-center md:justify-between h-full">
        <Link
          href="/"
          className="font-bold text-9xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary "
        >
          <MyLogo
            className="fill-dark hover:fill-dark-300 hover:dark:fill-light-50 dark:fill-light-300 h-full"
            size="40px"
            alt="Demian Domozhirov logo"
          />
        </Link>
        <div className="flex items-center h-full gap-5">
          <Link href="/" className="animated-link">{t("home")}</Link>
          <Link href="/blog" className="animated-link">{t("blog")}</Link>
          <ThemeSwitch />
          <LanguageSwitch />
        </div>
      </nav>
    </header>
  );
}
