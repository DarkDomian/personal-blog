"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
// import Image from "next/image";

const ThemeSwitch: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // using sceleton for renderung time
  if (!mounted)
    return (
      // <div className={`${size} bg-neutral-600 animate-pulse rounded-full`}></div>
      <div className="h-10 w-10 bg-light-500 dark:bg-dark-400 animate-pulse rounded-full"></div>
    );

  if (resolvedTheme === "dark") {
    return (
      <div className="aspect-square h-full">
        <FiSun
          onClick={() => setTheme("light")}
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") {
          //     setTheme("light");
          //   }}
          // }
          className="switcher"
          aria-haspopup="false"
          // tabIndex={0}
          aria-label="Change Language"
        />
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div className="aspect-square h-full">
        <FiMoon
          onClick={() => setTheme("dark")}
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") {
          //     setTheme("dark");
          //   }}
          // }
          className="switcher"
          aria-haspopup="false"
          // tabIndex={0}
          aria-label="Change Language"
        />
      </div>
    );
  }
};
export default ThemeSwitch;
