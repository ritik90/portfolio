import { skillGroups, logos } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { LogoMark } from "@/components/logo-mark";

const platformCards = [
  {
    name: "Microsoft Azure",
    logo: logos.azure,
    description: "Azure App Service, CosmosDB, production GenAI deployment.",
  },
  {
    name: "Google Cloud",
    logo: logos.gcp,
    description: "Vertex AI, Cloud Run, BigQuery, scalable ML serving.",
  },
  {
    name: "Databricks",
    logo: logos.databricks,
    description: "ML workflows, vector search, monitoring, model pipelines.",
  },
  {
    name: "MLflow",
    logo: logos.mlflow,
    description: "Model registry, experiment tracking, MLOps lifecycle.",
  },
];

export function TechStack() {
  return (
    <section id="stack" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
        eyebrow="Tech Stack"
        title="Tools for building production AI."
        description="My stack covers LLM orchestration, machine learning, backend APIs, cloud platforms, model tracking, monitoring, and deployment."
        />

        <div className="mb-6 grid gap-4 md:grid-cols-4">
          {platformCards.map((platform, index) => (
            <Reveal key={platform.name} delay={index * 0.06}>
              <div className="group min-h-full rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-cyan/30 hover:bg-white/[0.06]">
                <LogoMark src={platform.logo} alt={`${platform.name} logo`} size="md" />

                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {platform.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/52">
                  {platform.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08}>
              <div className="glass-card rounded-[2rem] p-6 transition hover:border-violet/25">
                <h3 className="font-display text-xl font-semibold text-white">
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-white/62 transition hover:border-cyan/40 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}