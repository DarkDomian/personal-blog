"use client";

import { FaGithub, FaLinkedin, FaLink, FaTelegram } from "react-icons/fa";

interface AnimatedLinkProps {
  icon?: keyof typeof icons;
  children?: React.ReactNode;
  href?: string;
}

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  link: FaLink,
  telegram: FaTelegram,
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ icon="link", children=icon, href="/404" }) => {
  const IconComponent = icons[icon];
  return (
    <div className="flex flex-row items-center relative group">
        <IconComponent className="group-hover:text-primary mr-2 text-dark-200 dark:text-light-800 transition-colors duration-300"/>
        <a
        href={href}
        className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
        {children || icon}
        </a>
    </div>
  );
};
export default AnimatedLink;
