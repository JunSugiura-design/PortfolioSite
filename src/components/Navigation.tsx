"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];

  const navigation = [
    { href: "#about", label: t("about") },
    { href: "#skills", label: t("skills") },
    { href: "#works", label: t("works") },
    { href: "#career", label: t("career") },
    { href: "#contact", label: t("contact") },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-sakura-100 dark:border-gray-800"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-japanese font-bold bg-gradient-to-r from-sakura-400 to-sakura-600 dark:from-ai-200 dark:to-ai-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jun Sugiura
          </motion.div>
          <div className="flex gap-6">
            {navigation.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={handleNavClick}
                className="text-sm font-jp-gothic text-gray-700 dark:text-gray-300 hover:text-sakura-500 dark:hover:text-ai-300 transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sakura-300 to-sakura-400 dark:from-ai-500/50 dark:to-ai-400/50 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="flex gap-4 font-jp-gothic">
            <Link
              href="/en"
              className={`text-gray-700 dark:text-gray-300 hover:text-sakura-500 dark:hover:text-ai-300 transition-colors ${
                currentLocale === "en" ? "text-sakura-500 dark:text-ai-400" : ""
              }`}
            >
              English
            </Link>
            <span className="text-gray-400 dark:text-gray-600">|</span>
            <Link
              href="/ja"
              className={`text-gray-700 dark:text-gray-300 hover:text-sakura-500 dark:hover:text-ai-300 transition-colors ${
                currentLocale === "ja" ? "text-sakura-500 dark:text-ai-400" : ""
              }`}
            >
              日本語
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;
