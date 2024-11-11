import Link from "next/link";
import ThemeSwitch from "./ThemeSwitcher";


export default function Header() {
    return (
        <header className="bg-light-200 dark:bg-dark-600 shadow">
            <nav className="container flex px-2 py-2 gap-5">
                <Link href="/">Home</Link>
                <ThemeSwitch />
            </nav>
        </header>
    )
}