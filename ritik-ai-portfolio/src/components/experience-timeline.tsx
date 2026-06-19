import { experiences, logos } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { LogoMark } from "@/components/logo-mark";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
        eyebrow="Experience"
        title="Building production AI systems in industry."
        description="My industry work spans agentic RAG systems, NLP pipelines, lead scoring engines, personalization models, MLOps, monitoring, and cloud deployment."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-violet via-cyan to-transparent md:block" />

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <Reveal key={`${experience.company}-${experience.role}`} delay={index * 0.1}>
                <article className="glass-card relative rounded-[2rem] p-6 transition hover:border-cyan/25 hover:bg-white/[0.045] md:ml-16 md:p-7">
                  <div className="absolute -left-[4.35rem] top-8 hidden md:block">
                    <LogoMark src={logos.tvs} alt="TVS Motor Company logo" size="md" />
                  </div>

                  <div className="flex gap-4 md:hidden">
                    <LogoMark src={logos.tvs} alt="TVS Motor Company logo" size="md" />
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                        {experience.role}
                      </h3>
                      <p className="mt-1 text-violet-200">{experience.company}</p>
                    </div>
                  </div>

                  <div className="hidden flex-col justify-between gap-4 md:flex md:flex-row">
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                        {experience.role}
                      </h3>
                      <p className="mt-1 text-violet-200">{experience.company}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-white/60">{experience.period}</p>
                      <p className="mt-1 text-sm text-white/38">{experience.location}</p>
                    </div>
                  </div>

                  <div className="mt-4 md:hidden">
                    <p className="text-sm text-white/60">{experience.period}</p>
                    <p className="mt-1 text-sm text-white/38">{experience.location}</p>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-white/58">
                    {experience.summary}
                  </p>

                  <ul className="mt-5 grid gap-3">
                    {experience.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-white/62"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}