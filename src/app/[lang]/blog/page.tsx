import { getDictionary } from "@/get-dicteonary";
import { Locale } from "@/i18n-config";
import LocaleSwitcher from "../_components/locale-switcher";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    // <div>
    //   <LocaleSwitcher />
    //   <div>
    //     <p>Current locale: {lang}</p>
        // <p>
        //   This text is rendered on the server:{" "}
        //   {dictionary["server-component"].welcome}
        // </p>
    //     <Counter dictionary={dictionary.counter} />
    //   </div>
    // </div>
    <div className="min-h-screen flex flex-col justify-center">
    <main className="h-full flex flex-col gap-5 flex-grow items-center justify-center">
      <h1>The are <b>BLOG</b></h1>
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server: {dictionary["server-component"].welcome}
      </p>
      <LocaleSwitcher />
    </main>
    <footer className="flex py-1 justify-center">@DarkDomian</footer>
  </div>
  );
}
