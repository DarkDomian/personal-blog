// will use it if add some translated matirial to footer
// import { setRequestLocale } from "next-intl/server";
// import { getTranslations } from "next-intl/server";

// all of icons
import { SlSocialLinkedin } from "react-icons/sl";
import { LiaTelegram } from "react-icons/lia";
import { FiGithub } from "react-icons/fi";
import { TbBrandLeetcode } from "react-icons/tb";
import { LuMail } from "react-icons/lu";

// { params }: { params: { locale: string } }
export async function Footer() {
  // const { locale } = params;

  // setRequestLocale(locale);

  // const t = await getTranslations({ locale, namespace: "Header" });

  return (
    //   <footer className="border-t border-light-500 dark:border-dark-300 h-[200px] flex items-center justify-center bg-gradient-to-br from-dark-400 to-dark-800">
    <footer className="h-fit flex justify-between items-center dark:shadow-footer-dark shadow-footer-light py-4 px-4 md:px-10 text-dark-100 dark:text-light-900">
      <p>Demian Domozhirov © 2024</p>
      <div className="flex flex-row gap-3 items-end h-fit">
        <a href="https://github.com/darkdomian">
          <FiGithub className="social-media-link hover:stroke-primary" />
        </a>
        <a href="https://t.me/DarkVib">
          <LiaTelegram className="social-media-link hover:fill-primary" />
        </a>
        <a href="https://www.linkedin.com/in/darkdomian/">
          <SlSocialLinkedin className="social-media-link hover:fill-primary" />
        </a>
        <a href="https://leetcode.com/u/DarkDomian/">
          <TbBrandLeetcode className="social-media-link hover:stroke-primary" />
        </a>
        <a href="mailto:darkdomian@gmail.com">
          <LuMail className="ocial-media-link hover:stroke-primary cursor-pointer" />
        </a>
      </div>
    </footer>
  );
}
