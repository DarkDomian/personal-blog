import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export default async function BlogPage({
    params,
}: {
params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
  
    const t = await getTranslations({ locale, namespace: "BlogPage" });
    return (
      <div className="h-full flex flex-1 justify-center items-center ">
        <h1 className="font-bold text-9xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {t("welcome")}
        </h1>
      </div>
    );

}