// "use client";

// import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dicteonary";
import AnimatedLink from "@/components/AnimatedLink";
import LocaleSwitcher from "./_components/locale-switcher";

// import * as React from "react"

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (    
    <div className="min-h-screen flex flex-col justify-center">
      <main className="h-full flex flex-col gap-5 flex-grow items-center justify-center">
        <h1>Hello, World!</h1>
        <h2>The&#39;s page from [lang] derectory</h2>
        <p>Current locale: {lang}</p>
        <p>
          This text is rendered on the server: {dictionary ? dictionary["server-component"].welcome : "loading"}
        </p>
          <AnimatedLink />
        <LocaleSwitcher />
      </main>
      <footer className="flex py-1 justify-center">@DarkDomian</footer>
    </div>
  );
}
