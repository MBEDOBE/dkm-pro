import ProjectCard from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";

/** A visible grid replaces the one-slide-at-a-time portfolio carousel. */
export default function PortfolioContent() {
  return (
    <section
      aria-labelledby="portfolio-title"
      className="mx-auto w-full max-w-7xl px-5 pt-8 pb-16 sm:px-8 sm:pt-10 sm:pb-20 lg:px-10 lg:pt-12 lg:pb-24"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.19em] text-orange-700">
          Selected work &amp; more
        </p>
        <h1
          id="portfolio-title"
          className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
        >
          Projects built for{" "}
          <span className="text-orange-600">real needs.</span>
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          A collection of websites and applications I have designed or
          developed. Explore the work, the technology behind it, and the live
          projects.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            priority={project.id === 1}
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        ))}
      </div>
    </section>
  );
}
