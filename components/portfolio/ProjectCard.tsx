import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  sizes?: string;
}

export default function ProjectCard({ project, priority = false, sizes = "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw" }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_10px_36px_-26px_rgba(15,23,42,0.25)] transition duration-300 motion-safe:hover:-translate-y-1 hover:shadow-[0_22px_45px_-25px_rgba(15,23,42,0.28)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={project.thumbnail}
          alt={`Screen mockup of ${project.name}`}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.035]"
          priority={priority}
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
          {project.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
        <p className="mt-3 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">My role:</span> {project.contribution}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              {tech}
            </li>
          ))}
        </ul>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} live website (opens in a new tab)`}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-md text-sm font-semibold text-orange-700 underline-offset-4 transition-colors hover:text-orange-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
        >
          Visit live project <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
