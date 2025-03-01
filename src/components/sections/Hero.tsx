"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("home");
  const nav = useTranslations("navigation");

  const navigationItems = [
    { href: "#about", text: nav("about") },
    { href: "#skills", text: nav("skills") },
    { href: "#works", text: nav("works") },
    { href: "#career", text: nav("career") },
    { href: "#contact", text: nav("contact") },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white via-sakura-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* <div className="absolute inset-0 bg-[url('/patterns/japanese-pattern.png')] opacity-[0.05] dark:opacity-[0.03]" /> */}
      <div className="absolute inset-0 bg-gradient-to-br from-sakura-200/20 to-sakura-300/20 dark:from-ai-900/20 dark:to-ai-800/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,255,255,0.1)_100%)] dark:bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.2)_100%)]" />

      <div className="container mx-auto px-6 py-24 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <div className="w-24 h-0.5 bg-gradient-to-r from-sakura-300 to-sakura-400 dark:from-ai-400/30 dark:to-ai-500/30 mx-auto mb-8"></div>
            <h1 className="text-5xl md:text-7xl font-japanese font-bold mb-6">
              <span className="text-gray-700 dark:text-gray-300">
                Hello, I&apos;m
              </span>{" "}
              <span className="bg-gradient-to-r from-sakura-400 to-sakura-600 dark:from-ai-200 dark:to-ai-400 bg-clip-text text-transparent">
                Jun
              </span>{" "}
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-sakura-400 to-sakura-300 dark:from-ai-500/30 dark:to-ai-400/30 mx-auto mt-8"></div>
          </div>
          <p className="text-xl md:text-2xl font-jp-gothic text-gray-700 dark:text-gray-300 mb-16">
            {t("description")}
          </p>

          <motion.div
            className="flex flex-col items-center gap-4 max-w-xs mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="w-full px-8 py-3 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-sakura-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-jp-gothic rounded-lg hover:bg-sakura-50 hover:border-sakura-300 dark:hover:bg-gray-700/50 dark:hover:border-ai-700 transition-all relative group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                {item.text}
                <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-sakura-300 to-sakura-400 dark:from-ai-500/50 dark:to-ai-400/50 transform scale-x-0 transition-transform group-hover:scale-x-100" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400 dark:text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
