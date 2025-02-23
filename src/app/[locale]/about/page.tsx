import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
      <p className="mb-4">{t("description")}</p>
      <div className="prose">
        <p>{t("bio")}</p>
      </div>
    </main>
  );
}
