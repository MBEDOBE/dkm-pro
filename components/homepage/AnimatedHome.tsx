import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { featuredProjects } from "@/data/projects";

const services = [
  {
    number: "01",
    title: "Business websites",
    description: "Professional, responsive websites and landing pages that clearly explain what you offer and help people get in touch.",
    tags: "HTML · CSS · Tailwind",
  },
  {
    number: "02",
    title: "React frontends",
    description: "Interactive interfaces and web application frontends built with reusable components and thoughtful user experiences.",
    tags: "React · JavaScript",
  },
  {
    number: "03",
    title: "Redesigns & improvements",
    description: "Refresh an existing website with clearer layouts, mobile-friendly styling, accessibility considerations, and better usability.",
    tags: "UI improvements · Responsive design",
  },
];

const approach = [
  { number: "01", title: "Understand", description: "Define your audience, goals, and project requirements." },
  { number: "02", title: "Plan", description: "Agree on structure, content, and the best implementation approach." },
  { number: "03", title: "Build", description: "Develop the interface with responsive layouts and reusable code." },
  { number: "04", title: "Refine", description: "Check usability, accessibility, and device behaviour before delivery." },
];

export default function AnimatedHome() {
  return (
    <>
      <section
        aria-labelledby="home-title"
        className="relative overflow-hidden bg-[#f8fafc]"
      >
        <div
          className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-orange-100/55 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-8 sm:px-8 sm:pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10 lg:pb-20 lg:pt-12">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-orange-800 sm:text-sm">
              <span
                className="h-2 w-2 rounded-full bg-orange-600"
                aria-hidden="true"
              />
              Frontend &amp; web developer
            </p>
            <p className="mt-8 text-base font-medium text-slate-600">
              Hi, I&apos;m Daniel Mbedobe.
            </p>
            <h1
              id="home-title"
              className="mt-3 text-[clamp(2.75rem,5.2vw,4.9rem)] font-semibold leading-[1.09] tracking-[-0.045em] text-slate-900"
            >
              Modern websites built{" "}
              <span className="text-orange-600">for your business.</span>
            </h1>
            <p className="mt-7 max-w-[580px] text-base leading-8 text-slate-600 sm:text-lg">
              I design and develop responsive websites, landing pages, and React
              interfaces for businesses and organizations that want a stronger
              online presence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(234,88,12,0.8)] transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
              >
                View my projects <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-orange-400 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
              >
                Discuss a project
              </Link>
            </div>
            <div
              className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-slate-200 pt-6 text-sm font-medium text-slate-500"
              aria-label="Core technologies"
            >
              <span className="text-slate-700">Working with</span>
              <span aria-hidden="true">·</span> React{" "}
              <span aria-hidden="true">·</span> Next.js{" "}
              <span aria-hidden="true">·</span> JavaScript{" "}
              <span aria-hidden="true">·</span> Tailwind CSS
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
            <div
              className="absolute -bottom-5 -right-4 h-[93%] w-[96%] rounded-[30px] border-2 border-orange-200 bg-orange-50"
              aria-hidden="true"
            />
            <div className="relative aspect-[422/525] w-full overflow-hidden rounded-[28px] bg-[#edf3e8] shadow-[0_30px_70px_-32px_rgba(15,23,42,0.35)]">
              <Image
                src="/assets/pp.webp"
                alt="Daniel Mbedobe, frontend and web developer"
                fill
                priority
                sizes="(max-width: 1024px) 420px, 39vw"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 left-4 rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-lg sm:left-7">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-700">
                Design + development
              </p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                Responsive by default
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        aria-labelledby="work-title"
        className="scroll-mt-24 bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.19em] text-orange-700">
                Proof of work
              </p>
              <h2
                id="work-title"
                className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              >
                A few projects I&apos;ve built.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Explore selected websites and web applications, from education
                platforms to hospitality tools.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-md text-sm font-semibold text-orange-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700 sm:self-auto"
            >
              Explore all five projects <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-7">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        tabIndex={-1}
        aria-labelledby="services-title"
        className="scroll-mt-24 bg-[#f4f6f9] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.19em] text-orange-700">
              What I do
            </p>
            <h2
              id="services-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Web development that fits your goals.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              From a new business website to an interface that needs
              improvement, I focus on clear, practical digital experiences.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
              >
                <span
                  className="text-sm font-semibold text-orange-600"
                  aria-hidden="true"
                >
                  {service.number} /
                </span>
                <h3 className="mt-7 text-xl font-semibold tracking-tight text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
                <p className="mt-7 border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
                  {service.tags}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="approach-title"
        className="bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.19em] text-orange-700">
              My approach
            </p>
            <h2
              id="approach-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Simple process. Thoughtful execution.
            </h2>
          </div>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step) => (
              <div
                key={step.number}
                className="border-t-2 border-orange-500 pt-5"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-orange-700">
                  STEP {step.number}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-teaser-title"
        className="bg-[#f4f6f9] py-20 sm:py-24"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.19em] text-orange-700">
              A little about me
            </p>
            <h2
              id="about-teaser-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              A developer who values clarity and usability.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              I&apos;m Daniel, a frontend developer with experience building
              websites and web applications for schools, organizations, and
              businesses. I enjoy turning ideas into interfaces people can
              comfortably use.
            </p>
          </div>
          <Link
            href="/about-daniel-mbedobe"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-orange-500 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
          >
            More about me <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section
        aria-labelledby="contact-cta-title"
        className="bg-[#172033] py-20 text-white sm:py-24"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.19em] text-orange-300">
              Let&apos;s work together
            </p>
            <h2
              id="contact-cta-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Have a website or application in mind?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Tell me what you&apos;re building and we can discuss the best way
              to approach it.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center gap-3 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
