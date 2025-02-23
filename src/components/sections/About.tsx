"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("about");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const expertiseItems = t.raw("expertiseItems") as string[];
  const qualificationItems = t.raw("qualificationItems") as string[];
  const hobbies = t.raw("hobbyItems") as { icon: string; text: string }[];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white via-sakura-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="w-20 h-0.5 bg-gradient-to-r from-sakura-300 to-sakura-400 dark:from-ai-400/30 dark:to-ai-500/30 mx-auto mb-6"></div>
            <h2 className="text-4xl font-japanese font-bold mb-4 bg-gradient-to-r from-sakura-500 to-sakura-700 dark:from-ai-200 dark:to-ai-400 bg-clip-text text-transparent">
              {t("title")}
            </h2>
            <p className="font-jp-gothic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t("description")}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-sakura-200 dark:border-gray-700">
              <h3 className="text-2xl font-japanese font-bold mb-4 bg-gradient-to-r from-sakura-400 to-sakura-600 dark:from-ai-200 dark:to-ai-400 bg-clip-text text-transparent">
                {t("expertise")}
              </h3>
              <ul className="list-none space-y-3 font-jp-gothic">
                {expertiseItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sakura-400 dark:bg-ai-400 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-sakura-200 dark:border-gray-700">
              <h3 className="text-2xl font-japanese font-bold mb-4 bg-gradient-to-r from-sakura-400 to-sakura-600 dark:from-ai-200 dark:to-ai-400 bg-clip-text text-transparent">
                {t("languages")}
              </h3>
              <div className="space-y-6 font-jp-gothic">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">
                      {t("japanese")}
                    </span>
                    <span className="text-sakura-500 dark:text-ai-400">
                      {t("native")}
                    </span>
                  </div>
                  <div className="h-2 bg-sakura-50 dark:bg-gray-700 rounded-full">
                    <div className="h-full w-full bg-gradient-to-r from-sakura-400 to-sakura-500 dark:from-ai-400 dark:to-ai-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">
                      {t("english")}
                    </span>
                    <span className="text-sakura-500 dark:text-ai-400">
                      {t("business")}
                    </span>
                  </div>
                  <div className="h-2 bg-sakura-50 dark:bg-gray-700 rounded-full">
                    <div className="h-full w-4/5 bg-gradient-to-r from-sakura-400 to-sakura-500 dark:from-ai-400 dark:to-ai-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-sakura-200 dark:border-gray-700">
              <h3 className="text-2xl font-japanese font-bold mb-4 bg-gradient-to-r from-sakura-400 to-sakura-600 dark:from-ai-200 dark:to-ai-400 bg-clip-text text-transparent">
                {t("qualifications")}
              </h3>
              <ul className="list-none space-y-3 font-jp-gothic">
                {qualificationItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sakura-400 dark:bg-ai-400 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-sakura-200 dark:border-gray-700">
              <h3 className="text-2xl font-japanese font-bold mb-4 bg-gradient-to-r from-sakura-400 to-sakura-600 dark:from-ai-200 dark:to-ai-400 bg-clip-text text-transparent">
                {t("hobbies")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.text}
                    className="flex items-center gap-2 bg-sakura-50 dark:bg-gray-700/50 px-4 py-2 rounded-lg border border-sakura-200 dark:border-gray-600"
                  >
                    <span className="text-sakura-500 dark:text-ai-400">
                      {hobby.icon}
                    </span>
                    <span className="font-jp-gothic text-gray-700 dark:text-gray-300">
                      {hobby.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
