import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");

  // プロジェクトデータは実際のデータに置き換えてください
  const projects = [
    { id: 1, title: "Project 1", description: "Description 1" },
    { id: 2, title: "Project 2", description: "Description 2" },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
      <p className="mb-8">{t("description")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              {t("viewProject")}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
