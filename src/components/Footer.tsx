"use client";

import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gradient-to-b from-white to-sakura-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="w-16 h-0.5 bg-gradient-to-r from-sakura-300 to-sakura-400 dark:from-ai-400/30 dark:to-ai-500/30 mb-6"></div>
          <p className="font-jp-gothic text-gray-600 dark:text-gray-400 text-center">
            © {currentYear} Jun Sugiura. All rights reserved.
          </p>
          <p className="font-jp-gothic text-gray-500 dark:text-gray-500 text-sm mt-2">
            {t("notice")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
