// 'use client';

// import { useCurrentLocale } from "next-i18n-router/client"

// import { useRouter } from 'next/navigation';
// import { usePathname } from 'next/navigation';
// import i18nConfig from '@/i18n/i18n.config';
// import { ChangeEvent } from 'react';

// export default function LanguageChanger() {
//   const currentLocale = useCurrentLocale(i18nConfig)
//   const router = useRouter();
//   const currentPathname = usePathname();

//   const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     const newLocale = e.target.value;

//     // set cookie for next-i18n-router
//     const days = 30;
//     const date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

//     // redirect to the new locale path
//     if (
//       currentLocale === i18nConfig.defaultLocale &&
//       !i18nConfig.prefixDefault
//     ) {
//       router.push('/' + newLocale + currentPathname);
//     } else {
//       router.push(
//         currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
//       );
//     }

//     router.refresh();
//   };

//   return (
//     // <div className="language-selector">
//     //   <input
//     //     type="radio"
//     //     id="en"
//     //     name="language"
//     //     value="en"
//     //     checked={currentLocale === 'en'}
//     //     onClick={(e) => handleChange(e)}
//     //     className="language-option"
//     //   />
//     //   <label htmlFor="en" className="language-label">English</label>

//     //   <input
//     //     type="radio"
//     //     id="nb"
//     //     name="language"
//     //     value="nb"
//     //     checked={currentLocale === 'nb'}
//     //     onClick={() => handleChange}
//     //     className="language-option"
//     //   />
//     //   <label htmlFor="nb" className="language-label">Norsk</label>

//     //   <input
//     //     type="radio"
//     //     id="ja"
//     //     name="language"
//     //     value="ja"
//     //     checked={currentLocale === 'ja'}
//     //     onClick={() => handleChange}
//     //     className="language-option"
//     //   />
//     //   <label htmlFor="ja" className="language-label">日本語</label>

//     //   <input
//     //     type="radio"
//     //     id="ru"
//     //     name="language"
//     //     value="ru"
//     //     checked={currentLocale === 'ru'}
//     //     onClick={() => handleChange}
//     //     className="language-option"
//     //   />
//     //   <label htmlFor="ru" className="language-label">Русский</label>
//     // </div>

//     // English Norsk 日本語 Русский

//     <select onChange={handleChange} value={currentLocale} className="bg-light-200 dark:bg-dark-600 border-none" >
//       <option value="en" className="border-none">EN</option>
//       <option value="nb">NB</option>
//       <option value="ja">JA</option>
//       <option value="ru">RU</option>
//       {/* <input type="radio" value="en">English</input>
//       <input type="radio" value="nb">Norsk</input>
//       <input type="radio" value="ja">日本語</input>
//       <input type="radio" value="ru">Русский</input> */}
//     </select>
//   );
// }
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
          // className={iconClass}
          className="switcher"
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-label="Change Language"
          onClick={() => setIsOpen(!isOpen)}
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
                ? "text-dark-100 dark:text-light-900 bg-light dark:bg-dark cursor-default shadow"
                : "bg-light-300 dark:bg-dark-700 hover:bg-light-500 dark:hover:bg-dark-300 shadow"
            }`}
          >
            <button
              onClick={() => {setIsOpen(!isOpen); handleLanguageChange(locale);}}
              disabled={currentLocale === locale}
              className="w-full h-full"
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
