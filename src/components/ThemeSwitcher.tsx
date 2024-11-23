"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
// import Image from "next/image";


type ThemeSwitchProps = {
  switchClass: string;
  sceletonClass: string;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ switchClass, sceletonClass }) => {

  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // using sceleton for renderung time
  if (!mounted)
    return (
      // <div className={`${size} bg-neutral-600 animate-pulse rounded-full`}></div>
      <div className={sceletonClass}></div>
    );

  if (resolvedTheme === "dark") {
    return <FiSun onClick={() => setTheme("light")} className={switchClass}/>;
  }

  if (resolvedTheme === "light") {
    return <FiMoon onClick={() => setTheme("dark")} className={switchClass}/>;
  }
}
export default ThemeSwitch;
