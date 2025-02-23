import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
      <p className="mb-8">{t("description")}</p>

      <form className="max-w-lg">
        <div className="mb-4">
          <label className="block mb-2">{t("name")}</label>
          <input type="text" className="w-full p-2 border rounded" required />
        </div>

        <div className="mb-4">
          <label className="block mb-2">{t("email")}</label>
          <input type="email" className="w-full p-2 border rounded" required />
        </div>

        <div className="mb-4">
          <label className="block mb-2">{t("message")}</label>
          <textarea className="w-full p-2 border rounded h-32" required />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          {t("send")}
        </button>
      </form>
    </main>
  );
}
