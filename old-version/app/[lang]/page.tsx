// "use client";

import { getDictionary } from "@/get-dicteonary";
// import { Dictionaries } from "@/dictionaries/dictionaries";
import { Locale } from "@/i18n-config";
import LocaleSwitcher from "./_components/locale-switcher";

import * as React from "react"

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // const [dictionary, setDictionary] = React.useState<Dictionaries | null>(null);

  // React.useEffect(() => {
  //   async function loadDictionary() {
  //     const dict = await getDictionary(lang);
  //     setDictionary(dict);
  //   }
  //   loadDictionary();
  // }, [lang]);
  const dictionary = await getDictionary(lang);

  return (
    <div className="min-h-screen flex flex-col justify-center">
    <main className="h-full flex flex-col gap-5 flex-grow items-center justify-center">
      <h1>The&#39;s page from [lang] derectory</h1>
      <p>Current locale: {lang}</p>
      <p>
        {/* This text is rendered on the server: {dictionary ? dictionary["server-component"].welcome : "loading"} */}
        This text is rendered on the server: {dictionary ? dictionary["server-component"].welcome : "loading"}
      </p>
      <LocaleSwitcher />
    </main>
    <footer className="flex py-1 justify-center">@DarkDomian</footer>
  </div>
  );
}