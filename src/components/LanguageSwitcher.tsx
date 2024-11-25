"use client";

import { useCurrentLocale } from "next-i18n-router/client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import i18nConfig from "@/i18n/i18n.config";


import { PiTranslate } from "react-icons/pi";

type LanguageChangerProps = {
  iconClass?: string;
};

const LanguageChanger: React.FC<LanguageChangerProps> = ({}) => {
  const currentLocale = useCurrentLocale(i18nConfig);
  const router = useRouter();
  const currentPathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleLanguageChange(lang: string) {
    if (lang === currentLocale) return;

    // Set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${lang};expires=${date.toUTCString()};path=/`;

    // Redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push(`/${lang}${currentPathname}`);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${lang}`));
    }

    router.refresh();
  }

  return (
    <div className="relative flex-1 justify-center flex-col h-full">
      <div className="h-full aspect-square">
        <PiTranslate
          className="switcher"
          aria-haspopup="true"
          // tabIndex={0}
          aria-expanded={isOpen}
          aria-label="Change Language"
          onClick={() => setIsOpen(!isOpen)}
          // onFocus={() => setIsOpen(!isOpen)}
          // onBlur={() => setIsOpen(!isOpen)}
        />
      </div>
      <ul className={`absolute transition-all duration-500 w-full ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-0 -translate-y-20 pointer-events-none"
        }`}>
        {i18nConfig.locales.map((locale) => (
          <li
            key={locale}
            className={`text-center text-sm font-medium cursor-pointerw-full mt-1 rounded-full aspect-square ${
              currentLocale === locale
                ? "text-dark-100 dark:text-light-900 bg-light-50 dark:bg-dark-800 cursor-default shadow"
                : "bg-light-300 dark:bg-dark-700 hover:bg-light-500 dark:hover:bg-dark-300 shadow"
            }`}
            role="menuitem"
          >
            <button
              onClick={() => {setIsOpen(!isOpen); handleLanguageChange(locale);}}
              disabled={currentLocale === locale}
              className="w-full h-full rounded-full"
            >
              {locale.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageChanger;
