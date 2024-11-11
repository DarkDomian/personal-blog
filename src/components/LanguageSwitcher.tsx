'use client'

import React, { useState } from "react"
import i18n from './i18n'
import { PiTranslate } from "react-icons/pi"

const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);


  const languages = [
    {code: 'en', label: 'EN'},
    {code: 'ru', label: 'RU'}
  ];

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('language', currentLanguage);
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 200);
  }

  
  // const toggleLanguage = () => {
  //   i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  //   localStorage.setItem('language', i18n.language);
  // };

  return(
    <div className="relative flex flex-col justify-center items-center">
      <button onClick={() => setIsOpen(!isOpen)} className="switcher relative">
        <PiTranslate className='text-dark dark:text-light size-8'/>
        <span className="click-effect"></span>
      </button>

      {isOpen && (
        <>
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`switcher mt-1 size-fit relative ${currentLanguage === lang.code ? 'bg-light-800 dark:bg-dark-200 pointer-events-none' : ''}`}
              disabled={currentLanguage === lang.code}
            >
              <p className="text-dark dark:text-light font-medium text-center text-xs">{lang.label}</p>
              <span className="click-effect"></span>
            </button>
          )
          )}
        </>
      )}
      
    </div>
  );
}


export default LanguageSwitcher;