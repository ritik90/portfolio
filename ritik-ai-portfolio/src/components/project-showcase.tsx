"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronRight, Layers3, Gauge, Sparkles } from "lucide-react";
import { profile, projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
        eyebrow="Featured Projects"
        title="Selected AI and ML systems."
        description="A curated set of projects showing architecture, technical depth, deployment thinking, business impact, and production readiness."
        />

        <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="grid gap-4">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={project.title}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "group rounded-[1.75rem] border p-5 text-left transition-all duration-300",
                    isActive
                      ? "border-cyan/30 bg-white/[0.07] shadow-[0_0_0_1px_rgba(6,182,212,0.15)]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                  )}
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span
                      className={cn(
                        "rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]",
                        isActive
                          ? "border-cyan/30 bg-cyan/10 text-cyan"
                          : "border-white/10 bg-white/[0.04] text-white/45"
                      )}
                    >
                      {project.category}
                    </span>

                    <ChevronRight
                      size={18}
                      className={cn(
                        "transition-transform duration-300",
                        isActive
                          ? "translate-x-1 text-cyan"
                          : "text-white/30 group-hover:translate-x-1"
                      )}
                    />
                  </div>

                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-violet-200">{project.subtitle}</p>

                  <p className="mt-4 text-sm leading-6 text-white/52">
                    {project.impact}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="glass-card rounded-[2rem] p-6 md:p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="mb-3 inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                      {activeProject.category}
                    </div>

                    <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
                      {activeProject.title}
                    </h3>

                    <p className="mt-2 text-sm text-violet-200">
                      {activeProject.subtitle}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                      Recruiter takeaway
                    </p>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-white/68">
                      {activeProject.impact}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-7 text-white/58">
                  {activeProject.description}
                </p>

                <div className="grid gap-3 md:grid-cols-3">
                    {activeProject.metrics.map((metric, index) => (
                        <motion.div
                        key={metric}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-4"
                        >
                        <p className="text-sm font-semibold text-white">{metric}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                    <div className="mb-4 flex items-center gap-2">
                      <Layers3 size={16} className="text-cyan" />
                      <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                        Architecture overview
                      </p>
                    </div>

                    <div className="grid gap-3">
                      {activeProject.architecture.map((step, index) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.04 }}
                          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs text-white/65">
                            {index + 1}
                          </div>
                          <div className="h-px flex-1 bg-gradient-to-r from-violet/60 to-cyan/45" />
                          <p className="min-w-[140px] text-sm text-white/72">{step}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                      <div className="mb-4 flex items-center gap-2">
                        <Sparkles size={16} className="text-cyan" />
                        <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                          Tech stack
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {activeProject.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/65 transition hover:border-cyan/30 hover:text-white"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                      <div className="mb-4 flex items-center gap-2">
                        <Gauge size={16} className="text-cyan" />
                        <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                          Core challenges
                        </p>
                      </div>

                      <ul className="space-y-3">
                        {activeProject.challenges.map((challenge) => (
                          <li
                            key={challenge}
                            className="text-sm leading-6 text-white/58"
                          >
                            • {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                href={`/projects/${activeProject.slug}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
                >
                View full case study
                <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                />
                </Link>

                <Link
                    href={profile.resume}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/84 transition hover:border-violet/40 hover:bg-white/[0.06]"
                >
                    Download resume
                </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}