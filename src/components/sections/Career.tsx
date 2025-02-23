"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const CareerItem = ({
  career,
  index,
}: {
  career: {
    title: string;
    role: string;
    description: string;
    highlights: string[];
  };
  index: number;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-lg border border-sakura-200 dark:border-gray-700 backdrop-blur-sm"
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-japanese font-bold bg-gradient-to-r from-sakura-400 to-sakura-600 dark:from-ai-200 dark:to-ai-400 bg-clip-text text-transparent">
            {career.title}
          </h3>
          <p className="text-lg font-jp-gothic text-gray-600 dark:text-gray-400">
            {career.role}
          </p>
        </div>
        <p className="font-jp-gothic text-gray-700 dark:text-gray-300">
          {career.description}
        </p>
        <ul className="space-y-2">
          {career.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + (i + 1) * 0.1 }}
              className="flex items-center space-x-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sakura-400 dark:bg-ai-400" />
              <span className="font-jp-gothic text-gray-700 dark:text-gray-300">
                {highlight}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Career = () => {
  const t = useTranslations("career");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const careers = t.raw("positions") as {
    title: string;
    role: string;
    description: string;
    highlights: string[];
  }[];

  return (
    <section
      id="career"
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

        <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
          {careers.map((career, index) => (
            <CareerItem key={career.title} career={career} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
