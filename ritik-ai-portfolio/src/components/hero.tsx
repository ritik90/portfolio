"use client";

import Link from "next/link";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const proofCards = [
  {
    icon: GraduationCap,
    title: "MSc Data Science",
    subtitle: "Trinity College Dublin · Dublin, Ireland",
    logo: "/logos/trinity.jpg",
  },
  {
    icon: BriefcaseBusiness,
    title: "Former Data Scientist",
    subtitle: "TVS Motor Company · Production AI systems",
    logo: "/logos/tvs.webp",
  },
  {
    icon: TrendingUp,
    title: "€1.5M+ monthly impact",
    subtitle: "Revenue generated through deployed ML systems",
  },
];

const selectedProjects = [
  {
    title: "Multi-Agent RAG System",
    meta: "LangGraph · Gemini · GPT-4o · Azure",
  },
  {
    title: "Lead Classification Engine",
    meta: "€1.5M+ revenue · MLflow · Databricks",
  },
  {
    title: "Website Hyper-Personalisation",
    meta: "FastAPI · GCP · Vertex AI · A/B Testing",
  },
];

const skills = [
  "Generative AI",
  "LLMs",
  "RAG",
  "LangGraph",
  "NLP",
  "MLOps",
  "FastAPI",
  "Azure",
  "GCP",
  "Databricks",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 md:pt-32">
      <div className="absolute inset-0 bg-grid opacity-[0.07]" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-violet/10 blur-[140px]" />
      <div className="absolute right-0 top-24 h-[320px] w-[320px] rounded-full bg-cyan/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65 }}
            className="order-2 lg:order-1 lg:pt-4"
          >
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan/20 via-violet/10 to-transparent blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.5rem] bg-white/[0.04]">
                  <img
                    src="/profile.jpeg"
                    alt="Ritik Saxena"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>

                <div className="mt-4 rounded-[1.25rem] border border-white/10 bg-black/25 p-5">
                <p className="text-xl font-semibold tracking-[-0.025em] text-white">
                    Ritik Saxena
                </p>

                <p className="mt-1.5 text-base font-medium text-cyan">
                    AI Engineer · Data Scientist
                </p>

                <p className="mt-4 flex items-center gap-2 text-sm text-white/50">
                    <MapPin size={14} />
                    Dublin, Ireland
                </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="order-1 lg:order-2"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan">
              <span className="h-2 w-2 rounded-full bg-cyan" />
              Open to AI Engineer · GenAI Engineer · Data Scientist roles
            </div>

            <h1 className="max-w-3xl font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-4xl">
            Building production-ready AI systems with measurable impact.
            </h1>

            <div className="mt-5 flex flex-wrap gap-2">
            {["GenAI Systems", "Agentic RAG", "NLP", "MLOps", "Cloud AI"].map((item) => (
                <span
                key={item}
                className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1.5 text-sm font-medium text-cyan"
                >
                {item}
                </span>
            ))}
            </div>

            <div className="mt-6 max-w-2xl rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
            <p className="text-sm leading-7 text-white/68 md:text-base">
                I’m an{" "}
                <span className="font-semibold text-white">
                AI Engineer and Data Scientist
                </span>{" "}
                with{" "}
                <span className="font-semibold text-cyan">
                3+ years of experience
                </span>{" "}
                building production-ready systems across ML, NLP, Generative AI, and MLOps.
            </p>

            <p className="mt-3 text-sm leading-7 text-white/58 md:text-base">
                My work spans{" "}
                <span className="text-white">agentic RAG assistants</span>,{" "}
                <span className="text-white">transformer-based NLP pipelines</span>,{" "}
                <span className="text-white">predictive ML engines</span>,{" "}
                <span className="text-white">personalization systems</span>, scalable APIs,
                cloud deployment, and monitoring.
            </p>
            </div>

            <div className="mt-4 max-w-2xl rounded-[1.5rem] border border-cyan/15 bg-cyan/[0.045] p-5">
            <p className="text-sm leading-7 text-white/62 md:text-base">
                Currently pursuing{" "}
                <span className="font-semibold text-white">
                MSc Data Science at Trinity College Dublin
                </span>
                , after building business-facing AI systems at{" "}
                <span className="font-semibold text-white">
                TVS Motor Company
                </span>{" "}
                across sales intelligence, customer engagement, service workflows, model
                monitoring, and MLOps.
            </p>
            </div>

            <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
            {
                title: "Production AI Systems",
                description:
                "Built agentic RAG, NLP, and ML systems designed for real users, reliable retrieval, scalable APIs, and cloud deployment.",
            },
            {
                title: "Full ML Lifecycle",
                description:
                "Experience across data analysis, feature engineering, model development, deployment, monitoring, CI/CD, and MLOps.",
            },
            {
                title: "Business Impact",
                description:
                "Focused on AI systems that improve sales, service, customer intelligence, personalization, and decision-making workflows.",
            },
            ].map((item) => (
                <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.055] to-white/[0.025] px-4 py-4 transition hover:-translate-y-1 hover:border-cyan/30 hover:bg-white/[0.06]"
                >
                <p className="text-sm font-semibold leading-5 text-white">
                    {item.title}
                </p>
                <p className="mt-2 text-xs leading-5 text-white/48">
                    {item.description}
                </p>
                </div>
            ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href={profile.resume}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan/35 hover:bg-white/[0.07]"
              >
                <Download size={16} />
                Resume
              </Link>

              <Link
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-semibold text-white/75 transition hover:border-white/20 hover:text-white"
              >
                <Mail size={16} />
                Contact
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16 }}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {proofCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan/25 hover:bg-white/[0.055]"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white p-2">
                  {card.logo ? (
                    <img
                      src={card.logo}
                      alt={card.title}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <Icon size={22} className="text-cyan" />
                  )}
                </div>

                <h3 className="text-base font-semibold leading-6 text-white">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/52">
                  {card.subtitle}
                </p>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="mt-5 rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:max-w-xs">
              <p className="text-sm font-semibold text-cyan">
                Selected systems
              </p>
              <p className="mt-2 text-sm leading-6 text-white/50">
                A quick preview of the strongest AI and ML systems in my portfolio.
              </p>
            </div>

            <div className="grid flex-1 gap-3 md:grid-cols-3">
              {selectedProjects.map((project) => (
                <Link
                  key={project.title}
                  href={
                        project.title === "Website Hyper-Personalisation"
                            ? "/projects/website-hyper-personalisation"
                            : "#projects"
                        }
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan/30 hover:bg-white/[0.055]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold leading-5 text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-5 text-white/45">
                        {project.meta}
                      </p>
                    </div>

                    <ArrowRight
                      size={15}
                      className="shrink-0 text-white/25 transition group-hover:translate-x-1 group-hover:text-cyan"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
          className="mt-5 flex flex-wrap justify-center gap-2"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-sm text-white/55"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}