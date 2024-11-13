"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeSwitch from "./ThemeSwitcher";

import { usePathname } from 'next/navigation';



export default function Header() {
    // const { locale, asPath } = useRouter();
    // const currentLang = locale || 'en';

    const pathname = usePathname();
    
    
    return (
        <header className="bg-light-200 dark:bg-dark-600 shadow">
            <nav className="container flex px-2 py-2 gap-5">
                <Link href="/en">Home</Link>
                <Link href="/about">About</Link>
                <ThemeSwitch />
                <div className="flex gap-2 "><p>Corrent path is: </p><span className="text-primary dark:text-secondary font-bold">{pathname}</span></div>
            </nav>
        </header>
    )
}