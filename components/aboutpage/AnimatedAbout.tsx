import Image from "next/image";
import Link from "next/link";

/** Keep previous experience and education details available without making
 * visitors work through nested tabs or a scroll-trapped panel. */
const experience = [
  {
    title: "Software Engineer",
    subtitle: "Freelance | 2019 – Present",
    description: "Built full-stack applications (MERN, PHP, C#), POS systems, and delivered maintenance support.",
  },
  {
    title: "Field Enumerator",
    subtitle: "Vision Fund | Mar 2021",
    description: "Conducted household interviews; entered survey data using ODK.",
  },
  {
    title: "Supervisor – Population & Housing Census",
    subtitle: "Ghana Statistical Service | Jun–Jul 2021",
    description: "Supervised census teams, performed quality checks.",
  },
  {
    title: "Data Entry Clerk",
    subtitle: "Electoral Commission Ghana | Mar–May 2012",
    description: "Entered and verified voter registration data in Excel.",
  },
  {
    title: "Field Enumerator",
    subtitle: "World Vision Ghana – Saboba AP | Aug 2018",
    description: "Community-level interviews for development assessments.",
  },
  {
    title: "Data Entry Clerk",
    subtitle: "World Vision Ghana – Saboba AP | May 2015 & Aug 2016",
    description: "Processed evaluation survey data; ensured validation.",
  },
];

const education = [
  {
    title: "ALX | Certified Software Engineer",
    subtitle: "2022 – 2023",
    description: "Intensive full-stack and systems program.",
  },
  {
    title: "Udacity | Data Analyst Nanodegree",
    subtitle: "2022",
    description: "Data wrangling, EDA, statistics with Python and SQL.",
  },
  {
    title: "Udacity | React Nanodegree",
    subtitle: "Nov 2021",
    description: "Advanced React application architecture and testing.",
  },
  {
    title: "Coursera | Google Project Management",
    subtitle: "Sep 2021",
    description: "Agile, stakeholder, and project planning.",
  },
  {
    title: "Coursera | Google UX Design",
    subtitle: "Jul 2021",
    description: "User-centred design, prototyping, and testing.",
  },
  {
    title: "Coursera | Google IT Support",
    subtitle: "May 2021",
    description: "Networking, operating systems, and sysadmin fundamentals.",
  },
];

const skillGroups = [
  {
    heading: "Websites & interfaces",
    description: "The tools I use for responsive pages, frontend features, and website improvements.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Sass", "WordPress"],
  },
  {
    heading: "Application & data experience",
    description: "Technologies I also use when working on my own business applications or more technical projects.",
    skills: ["MongoDB", "Node.js", "Express", "SQL"],
  },
  {
    heading: "Additional experience",
    description: "Other capabilities from previous professional and technical work.",
    skills: ["Python", "Pandas", "NumPy", "Data analysis", "Data entry", "Web scraping", "Seaborn", "Beautiful Soup", "Selenium", "Scrapy"],
  },
];

const projectTypes = [
  {
    number: "01",
    title: "Small business websites",
    description: "Clear, responsive pages that explain a service, build trust, and make it easy to get in touch.",
  },
  {
    number: "02",
    title: "Landing pages",
    description: "Focused single-page experiences for an idea, organization, campaign, or offering.",
  },
  {
    number: "03",
    title: "Website fixes & redesigns",
    description: "Mobile layout improvements, visual updates, and smaller React or Next.js interface tasks.",
  },
];

function BackgroundList({
  items,
}: {
  items: { title: string; subtitle: string; description: string }[];
}) {
  return (
    <ol className="mt-6 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={`${item.title}-${item.subtitle}`} className="rounded-xl border border-slate-200 bg-white p-5">
          <h4 className="text-base font-semibold text-slate-900">{item.title}</h4>
          <p className="mt-1 text-xs font-medium text-orange-700">{item.subtitle}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

export default function AnimatedAbout() {
  return (
    <>
      <section
        aria-labelledby="about-heading"
        className="relative overflow-hidden bg-[#f8fafc]"
      >
        <div
          className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pt-8 pb-16 sm:px-8 sm:pt-10 sm:pb-20 lg:grid-cols-[1.3fr_0.7fr] lg:px-10 lg:pt-12 lg:pb-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.19em] text-orange-700">
              About me
            </p>
            <h1
              id="about-heading"
              className="mt-4 text-[clamp(2.5rem,5vw,4.25rem)] font-semibold leading-[1.12] tracking-[-0.04em] text-slate-900"
            >
              Hi, I&apos;m Daniel.{" "}
              <span className="text-orange-600">
                I build websites that are easy to use.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              I&apos;m a web developer with experience creating websites and
              applications for schools, organizations, and businesses. I enjoy
              working on practical digital experiences that are clear,
              responsive, and straightforward to maintain.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              For freelance work, I focus on well-defined website projects and
              smaller interface improvements. My wider technical background
              includes React, Next.js, and MongoDB, which I also use in my own
              business projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
              >
                See my work{" "}
                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-orange-400 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
              >
                Discuss a project
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[360px] lg:max-w-none">
            <div className="relative aspect-[422/525] overflow-hidden rounded-[28px] border border-orange-100 bg-[#edf3e8] shadow-[0_25px_65px_-35px_rgba(15,23,42,0.35)]">
              <Image
                src="/assets/pp.webp"
                alt="Portrait of Daniel Mbedobe"
                fill
                sizes="(max-width: 1024px) 360px, 32vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="focus-title"
        className="bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.19em] text-orange-700">
              Good projects to collaborate on
            </p>
            <h2
              id="focus-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Focused work, thoughtfully delivered.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              I especially enjoy projects with a clear goal, manageable scope,
              and useful result.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projectTypes.map((type) => (
              <article
                key={type.number}
                className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-7"
              >
                <p className="text-sm font-semibold text-orange-700">
                  {type.number} /
                </p>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {type.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {type.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="skills-title"
        className="bg-[#f4f6f9] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.19em] text-orange-700">
              Technical background
            </p>
            <h2
              id="skills-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Tools and technologies I work with.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              My skills cover both the websites I build for clients and the more
              technical applications I develop independently.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.heading}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {group.heading}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {group.description}
                </p>
                <ul
                  className="mt-6 flex flex-wrap gap-2"
                  aria-label={`${group.heading} skills`}
                >
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="background-title"
        className="bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.19em] text-orange-700">
              Experience and learning
            </p>
            <h2
              id="background-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              The experience behind my work.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              My background combines software development, technical learning,
              and work that values accuracy, organization, and communication.
            </p>
          </div>
          <div className="mt-10 space-y-4">
            <details
              open
              className="group rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-7"
            >
              <summary className="cursor-pointer list-item rounded-sm text-lg font-semibold text-slate-900 marker:text-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700">
                Professional experience
              </summary>
              <BackgroundList items={experience} />
            </details>
            <details className="group rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-7">
              <summary className="cursor-pointer list-item rounded-sm text-lg font-semibold text-slate-900 marker:text-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700">
                Education and training
              </summary>
              <BackgroundList items={education} />
            </details>
            <details className="group rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-7">
              <summary className="cursor-pointer list-item rounded-sm text-lg font-semibold text-slate-900 marker:text-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700">
                Languages and other strengths
              </summary>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-slate-900">Languages</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                    <li>Likpakpaanl — Native</li>
                    <li>English — Fluent</li>
                    <li>French — Fluent</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Other strengths
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                    <li>Attention to detail and quality checks</li>
                    <li>Organization and deadline management</li>
                    <li>Communicating technical ideas clearly</li>
                  </ul>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-contact-title"
        className="bg-[#172033] py-16 sm:py-20"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.19em] text-orange-300">
              Work together
            </p>
            <h2
              id="about-contact-title"
              className="mt-3 text-3xl font-semibold text-white sm:text-4xl"
            >
              Have a small website project in mind?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Share what you need and we can explore a clear, practical scope.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 w-fit shrink-0 items-center rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Get in touch{" "}
            <span className="ml-2" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
