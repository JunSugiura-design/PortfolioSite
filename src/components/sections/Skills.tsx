"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const skillCategories = [
  "programming",
  "web_dev",
  "ml_ai",
  "soft_skills",
] as const;

const getSkillLevelText = (level: number): string => {
  if (level >= 85) return "Advanced";
  if (level >= 75) return "Intermediate";
  return "Beginner";
};

const getSkillDots = (level: number): string => {
  const totalDots = 5;
  const filledDots = Math.round((level / 100) * totalDots);
  return "●".repeat(filledDots) + "○".repeat(totalDots - filledDots);
};

const getSkillLevelColor = (level: number): string => {
  if (level >= 85) return "text-sakura-600 dark:text-ai-400";
  if (level >= 75) return "text-sakura-500 dark:text-ai-300";
  return "text-sakura-400 dark:text-ai-200";
};

const SkillBar = ({
  name,
  level,
  index,
}: {
  name: string;
  level: number;
  index: number;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const t = useTranslations("skills");

  const getSkillLevelText = (level: number): string => {
    if (level >= 85) return t("level.advanced");
    if (level >= 75) return t("level.intermediate");
    return t("level.beginner");
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-jp-gothic text-gray-700 dark:text-gray-300">
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`text-sm font-jp-gothic ${getSkillLevelColor(level)}`}
        >
          {getSkillDots(level)}
        </motion.span>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({
  category,
  categoryIndex,
}: {
  category: (typeof skillCategories)[number];
  categoryIndex: number;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const t = useTranslations("skills");
  const items = t.raw(`items.${category}`) as { name: string; level: number }[];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
      className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-sakura-200 dark:border-gray-700"
    >
      <h3 className="text-2xl font-japanese font-bold mb-6 bg-gradient-to-r from-sakura-400 to-sakura-600 dark:from-ai-200 dark:to-ai-400 bg-clip-text text-transparent">
        {t(`categories.${category}`)}
      </h3>
      <div className="space-y-4">
        {items.map((skill, index) => (
          <SkillBar key={skill.name} {...skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const t = useTranslations("skills");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="skills"
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category}
              category={category}
              categoryIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
