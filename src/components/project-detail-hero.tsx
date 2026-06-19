import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { ProjectDetail } from "@/lib/project-details";

type ProjectDetailHeroProps = {
  project: ProjectDetail;
};

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  return (
    <section className="relative px-4 pb-12 pt-32 md:pt-36">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <div className="absolute left-1/2 top-0 h-[28rem] w-[50rem] -translate-x-1/2 rounded-full bg-cyan/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/56 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold text-cyan">
              {project.category}
            </p>

            <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight tracking-[-0.045em] text-white md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-4 max-w-3xl text-xl font-medium leading-8 text-white/78 md:text-2xl">
              {project.subtitle}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 md:text-lg">
              {project.overview}
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
            <p className="text-sm font-semibold text-cyan">Tech Stack</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm text-white/62"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href="#interview-script"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white"
            >
              Interview explanation
              <ExternalLink size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}