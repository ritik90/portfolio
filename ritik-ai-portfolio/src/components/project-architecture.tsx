"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import type { ArchitectureStep } from "@/lib/project-details";

type ProjectArchitectureProps = {
  title: string;
  description: string;
  steps: ArchitectureStep[];
};

export function ProjectArchitecture({
  title,
  description,
  steps,
}: ProjectArchitectureProps) {
  return (
    <section className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold text-cyan">Architecture</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.035em] text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/56">
            {description}
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl md:p-6">
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="relative"
              >
                <div className="min-h-full rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.055] to-white/[0.025] p-4 transition hover:-translate-y-1 hover:border-cyan/30">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/10 text-sm font-semibold text-cyan">
                    {index + 1}
                  </div>

                  <h3 className="text-base font-semibold leading-6 text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/52">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <>
                    <ArrowRight
                      size={18}
                      className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-cyan/50 md:block"
                    />
                    <ArrowDown
                      size={18}
                      className="mx-auto mt-2 text-cyan/50 md:hidden"
                    />
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}