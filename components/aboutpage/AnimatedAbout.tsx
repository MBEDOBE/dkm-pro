"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

/* ----------‑‑‑  CONSTANTS & TYPES  ‑‑‑---------- */

const tabs = [
  "Skill",
  "Experience",
  "Education",
  "Other",
  "Languages",
] as const;
const skillSubTabs = ["Web Development", "Data Handling & Analysis"] as const;

type Tab = (typeof tabs)[number];
type SkillSubTab = (typeof skillSubTabs)[number];

interface Skill {
  title: string;
  description: string;
  subtitle?: string;
}

interface SkillCategory {
  category: SkillSubTab;
  skills: Skill[];
}

interface TimelineItem {
  title: string;
  subtitle?: string;
  description: string;
}

interface SimpleItem {
  title: string;
  description: string;
}

interface TabContent {
  Skill: SkillCategory[];
  Experience: TimelineItem[];
  Education: TimelineItem[];
  Other: SimpleItem[];
  Languages: SimpleItem[];
}

/* ----------‑‑‑  DATA  ‑‑‑---------- */

const tabContent: TabContent = {
  Skill: [
    {
      category: "Web Development",
      skills: [
        {
          title: "React Js",
          description: "Building modern and responsive frontend applications.",
        },
        {
          title: "MERN Stack",
          description:
            "Developing full‑stack web apps using MongoDB, Express, React, and Node.js.",
        },
        {
          title: "Tailwind CSS, Bootstrap",
          description: "Rapid UI styling with utility‑first CSS.",
        },
        {
          title: "HTML5 / CSS3 / Sass",
          description: "Crafting clean and accessible web pages.",
        },
        {
          title: "JavaScript / TypeScript",
          description: "Dynamic and type‑safe client‑side logic.",
        },
        {
          title: "CMS (WordPress)",
          description: "Building and managing content‑heavy websites.",
        },
      ],
    },
    {
      category: "Data Handling & Analysis",
      skills: [
        {
          title: "Data Analysis",
          description:
            "Analyzing and visualizing data with Python (Pandas, NumPy, Seaborn).",
        },
        {
          title: "Data Entry",
          description:
            "Accurate, fast entry and processing of large datasets (80+ WPM).",
        },
        {
          title: "Data Scraping",
          description:
            "Extracting data via Python (Beautiful Soup, Selenium, Scrapy).",
        },
      ],
    },
  ],
  Experience: [
    {
      title: "Software Engineer",
      subtitle: "Freelance | 2019 – Present",
      description:
        "Built full‑stack applications (MERN, PHP, C#), POS systems, and delivered maintenance support.",
    },
    {
      title: "Field Enumerator",
      subtitle: "Vision Fund | Mar 2021",
      description:
        "Conducted household interviews; entered survey data using ODK.",
    },
    {
      title: "Supervisor – Population & Housing Census",
      subtitle: "Ghana Statistical Service | Jun–Jul 2021",
      description: "Supervised census teams, performed quality checks.",
    },
    {
      title: "Data Entry Clerk",
      subtitle: "Electoral Commission Ghana | Mar–May 2012",
      description: "Entered & verified voter registration data in Excel.",
    },
    {
      title: "Field Enumerator",
      subtitle: "World Vision Ghana – Saboba AP | Aug 2018",
      description: "Community‑level interviews for development assessments.",
    },
    {
      title: "Data Entry Clerk",
      subtitle: "World Vision Ghana – Saboba AP | May 2015 & Aug 2016",
      description: "Processed evaluation survey data; ensured validation.",
    },
  ],
  Education: [
    {
      title: "ALX | Certified Software Engineer",
      subtitle: "2022 – 2023",
      description: "Intensive full‑stack & systems program.",
    },
    {
      title: "Udacity | Data Analyst Nanodegree",
      subtitle: "2022",
      description: "Data wrangling, EDA, stats with Python & SQL.",
    },
    {
      title: "Udacity | React Nanodegree",
      subtitle: "Nov 2021",
      description: "Advanced React app architecture & testing.",
    },
    {
      title: "Coursera | Google Project Management",
      subtitle: "Sep 2021",
      description: "Agile, stakeholder & project planning.",
    },
    {
      title: "Coursera | Google UX Design",
      subtitle: "Jul 2021",
      description: "User‑centred design, prototyping, testing.",
    },
    {
      title: "Coursera | Google IT Support",
      subtitle: "May 2021",
      description: "Networking, OS, sysadmin fundamentals.",
    },
  ],
  Languages: [
    { title: "Likpakpaanl", description: "Native" },
    { title: "English", description: "Fluent" },
    { title: "French", description: "Fluent" },
  ],
  Other: [
    {
      title: "Attention to Detail",
      description: "Accuracy in data entry and QA tasks.",
    },
    {
      title: "Organizational Skills",
      description: "Manage multiple projects & deadlines.",
    },
    {
      title: "Communication",
      description: "Present technical ideas to non‑technical audiences.",
    },
  ],
};

/* ----------‑‑‑  ANIMATION PRESET  ‑‑‑---------- */

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const AnimatedAbout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Skill");
  const [activeSkillTab, setActiveSkillTab] =
    useState<SkillSubTab>("Web Development");

  const currentSkills =
    tabContent.Skill.find((cat) => cat.category === activeSkillTab)?.skills ??
    [];
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 py-12 pt-28 lg:-pt-28 w-full max-w-screen-xl min-h-screen mx-auto"
    >
      {/* ----------  Left: Bio  ---------- */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="space-y-6 lg:w-1/2"
      >
        <header>
          <h2 id="about-heading" className="sr-only">
            About Daniel Mbedobe
          </h2>
          <h1 className="">
            <span className="text-gray-600">Daniel Mbedobe</span>
            <span className="text-orange-500"> Kunji.</span>
          </h1>
          <p className="italic">
            Your vision, my expertise – together, we create magic.
          </p>
        </header>

        <p className="text-justify">
          Hi, I&apos;m D. Mbedobe Kunji, a results‑oriented web developer and
          data specialist with over a decade of experience. I build responsive
          web apps with React, JavaScript, and Tailwind CSS, plus provide
          precise data entry and scraping services. Let&apos;s discuss how my
          skills can benefit your projects.
        </p>

        {/* Stats */}
        <section aria-label="Professional statistics">
          <dl className="flex flex-wrap gap-8 pt-4 text-center">
            {[
              ["10+", "Years Experience"],
              ["10+", "Satisfied Clients"],
              ["13+", "Projects Done"],
            ].map(([num, label], i) => (
              <motion.div key={label} custom={i} variants={fadeInUp}>
                <dt className="text-3xl font-bold text-orange-500">{num}</dt>
                <dd className="text-sm text-gray-400">{label}</dd>
              </motion.div>
            ))}
          </dl>
        </section>
      </motion.div>

      {/* ----------  Right: Tabs  ---------- */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full space-y-6 lg:w-1/2"
      >
        {/* Top-level tabs */}
        <nav aria-label="About section tabs">
          <div className="flex flex-wrap gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm font-semibold rounded ${
                  activeTab === tab
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-gray-300"
                }`}
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        {/* Sub‑tabs for Skill */}
        {activeTab === "Skill" && (
          <nav aria-label="Skill sub-section tabs" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {skillSubTabs.map((sub) => (
                <button
                  key={sub}
                  className={`px-3 py-1 text-xs font-semibold rounded ${
                    activeSkillTab === sub
                      ? "bg-orange-400 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                  onClick={() => setActiveSkillTab(sub)}
                  aria-pressed={activeSkillTab === sub}
                >
                  {sub}
                </button>
              ))}
            </div>
          </nav>
        )}

        {/* Tab content */}
        <motion.div
          key={activeTab === "Skill" ? activeSkillTab : activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          role="tabpanel"
          aria-live="polite"
          className="grid sm:grid-cols-2 gap-6 max-h-[400px] overflow-y-auto pr-2 mt-4"
        >
          {/* ---- Skill ---- */}
          {activeTab === "Skill" &&
            currentSkills.map(({ title, description, subtitle }) => (
              <motion.div
                key={title}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="p-4 bg-gray-900 border-l-4 border-orange-500 rounded"
              >
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
                {subtitle && (
                  <p className="text-xs italic text-gray-500">{subtitle}</p>
                )}
              </motion.div>
            ))}

          {/* ---- Timeline‑style tabs ---- */}
          {(activeTab === "Experience" || activeTab === "Education") &&
            (tabContent[activeTab] as TimelineItem[]).map(
              ({ title, subtitle, description }) => (
                <motion.div
                  key={title}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="p-4 bg-gray-900 border-l-4 border-orange-500 rounded"
                >
                  <h3 className="font-semibold text-white">{title}</h3>
                  {subtitle && (
                    <p className="text-xs italic text-gray-400">{subtitle}</p>
                  )}
                  <p className="text-sm text-gray-400">{description}</p>
                </motion.div>
              )
            )}

          {/* ---- Other simple lists ---- */}
          {activeTab === "Languages" &&
            tabContent.Languages.map(({ title, description }) => (
              <motion.div
                key={title}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="p-4 bg-gray-900 border-l-4 border-orange-500 rounded"
              >
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
              </motion.div>
            ))}

          {activeTab === "Other" &&
            tabContent.Other.map(({ title, description }) => (
              <motion.div
                key={title}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="p-4 bg-gray-900 border-l-4 border-orange-500 rounded"
              >
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AnimatedAbout;
