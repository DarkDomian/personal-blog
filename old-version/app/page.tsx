"use client";

// import ThemeSwitcher from "@/components/ThemeSwitcher";
import AnimatedLink from "@/components/AnimatedLink";
import LocaleSwitcher from "./[lang]/_components/locale-switcher";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="min-h-screen flex flex-col justify-center">
      <main className="h-full flex flex-col gap-5 flex-grow items-center justify-center">
        <h1>Hello, World!</h1>
        <AnimatedLink />
        <LocaleSwitcher />
      </main>
      <footer className="flex py-1 justify-center">@DarkDomian</footer>
    </div>
  );
}
