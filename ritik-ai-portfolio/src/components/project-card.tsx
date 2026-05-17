"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  project: {
    title: string;
    subtitle: string;
    category: string;
    description: string;
    impact: string;
    metrics: string[];
    stack: string[];
    challenges: string[];
    architecture: string[];
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  const projectHref =
    project.title === "Website Hyper-Personalisation"
      ? "/projects/website-hyper-personalisation"
      : "#projects";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <Link
        href={projectHref}
        className="glass-card group block overflow-hidden rounded-[2rem] p-6"
      >
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
              {project.category}
            </div>

            <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
              {project.title}
            </h3>

            <p className="mt-2 text-sm text-violet-200">
              {project.subtitle}
            </p>

            <p className="mt-5 text-sm leading-7 text-white/58">
              {project.description}
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-white/32">
                Impact
              </p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                {project.impact}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-white/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
            <div className="absolute right-4 top-4 text-white/24 transition group-hover:text-cyan">
              <ArrowUpRight size={20} />
            </div>

            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/34">
              System architecture
            </p>

            <div className="grid gap-3">
              {project.architecture.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs text-white/56">
                    {index + 1}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-violet/50 to-cyan/40" />
                  <div className="min-w-[9rem] rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/68">
                    {step}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-3"
                >
                  <p className="text-sm font-semibold text-white">
                    {metric}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-white/34">
                Core challenges
              </p>
              <ul className="space-y-2">
                {project.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="text-sm leading-6 text-white/54"
                  >
                    · {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}