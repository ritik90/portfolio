import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const aboutCards = [
  {
    title: "Generative AI systems",
    text: "Multi-agent RAG, LangGraph workflows, vector search, Gemini, GPT-4o, prompt engineering, and LLM application design.",
  },
  {
    title: "Production machine learning",
    text: "Lead scoring, personalization, NLP pipelines, model serving, REST APIs, monitoring, CI/CD, and explainable ML.",
  },
  {
    title: "Cloud and MLOps",
    text: "Azure, GCP, Databricks, MLflow, Docker, FastAPI, Vertex AI, BigQuery, CosmosDB, and production deployment workflows.",
  },
];

export function About() {
  return (
    <section id="about" className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
        eyebrow="About Me"
        title="AI systems builder with production experience."
        description="I work across GenAI, RAG, NLP, machine learning, APIs, cloud deployment, and MLOps to build reliable and scalable intelligent systems."
        />

        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {aboutCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan/25 hover:bg-white/[0.045]"
              >
                <h3 className="font-display text-lg font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/56">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}