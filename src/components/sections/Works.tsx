"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import Image from "next/image";

const WorkCard = ({
  work,
  index,
}: {
  work: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
  };
  index: number;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const t = useTranslations("works");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-sakura-200 dark:border-gray-700 overflow-hidden group"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-japanese font-bold mb-2 bg-gradient-to-r from-sakura-400 to-sakura-600 dark:from-ai-200 dark:to-ai-400 bg-clip-text text-transparent">
          {work.title}
        </h3>
        <p className="font-jp-gothic text-gray-700 dark:text-gray-300 mb-4">
          {work.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-sakura-50 dark:bg-gray-700/50 border border-sakura-200 dark:border-gray-600 rounded-lg text-sm font-jp-gothic text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={work.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-gradient-to-r from-sakura-400 to-sakura-500 dark:from-ai-500 dark:to-ai-600 text-white font-jp-gothic rounded-lg hover:from-sakura-500 hover:to-sakura-600 dark:hover:from-ai-600 dark:hover:to-ai-700 transition-all hover:shadow-lg"
        >
          {t("viewProject")}
        </a>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const t = useTranslations("works");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const works = t.raw("projects") as {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
  }[];

  return (
    <section
      id="works"
      className="py-20 bg-gradient-to-b from-white via-sakura-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-0.5 bg-gradient-to-r from-sakura-300 to-sakura-400 dark:from-ai-400/30 dark:to-ai-500/30 mx-auto mb-6"></div>
          <h2 className="text-4xl font-japanese font-bold mb-4 bg-gradient-to-r from-sakura-500 to-sakura-700 dark:from-ai-200 dark:to-ai-400 bg-clip-text text-transparent">
            {t("title")}
          </h2>
          <p className="font-jp-gothic text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {works.map((work, index) => (
            <WorkCard key={work.title} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
