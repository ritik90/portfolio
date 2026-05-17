import ServiceMateEndToEndDiagram from "./ServiceMateEndToEndDiagram";
import ServiceMateOrchestrationDiagram from "./ServiceMateOrchestrationDiagram";
import ServiceMateExamplesDiagram from "./ServiceMateExamplesDiagram";
import ServiceMateEvaluationDiagram from "./ServiceMateEvaluationDiagram";

const stack = [
  "Python",
  "LangGraph",
  "LangChain",
  "GPT-4",
  "GPT-4o mini",
  "Agentic RAG",
  "Vector Databases",
  "Databricks Vector Store",
  "Azure CosmosDB",
  "Chainlit",
  "Azure App Service",
  "Prompt Engineering",
];

const challenges = [
  {
    title: "One assistant for multiple service use cases",
    detail:
      "Service workers should not need separate bots for diagnostics, procedures, manuals, SOPs, telematics, and expert knowledge. The system needed one unified query experience.",
  },
  {
    title: "Free-form query understanding",
    detail:
      "Dealer staff may ask incomplete, informal, or follow-up questions. The assistant needed to rephrase the query using chat history before retrieval.",
  },
  {
    title: "Brand-aware retrieval",
    detail:
      "Many answers depend on the specific brand or vehicle model. The orchestration checks whether brand information is present and asks follow-up questions when it is missing.",
  },
  {
    title: "Right vector DB selection",
    detail:
      "Different knowledge sources were stored separately. The agent classified the query and selected the correct vector database or combined documents for retrieval.",
  },
  {
    title: "Out-of-context query handling",
    detail:
      "The workflow detects unrelated questions and avoids sending irrelevant prompts into retrieval and generation pipelines.",
  },
  {
    title: "LLM cost and quality trade-off",
    detail:
      "The system used rule-based LLM selection, using GPT-4 for complex rephrasing/classification and GPT-4o mini for lighter extraction and response tasks.",
  },
  {
    title: "Hallucination control",
    detail:
        "The assistant was designed to answer from retrieved service context rather than generic model knowledge. If the query was unrelated, missing brand context, or had insufficient retrieval support, the workflow used fallback or follow-up paths.",
    },
    {
    title: "RAG evaluation",
    detail:
        "Evaluation focused on retrieval relevance, answer grounding, query classification accuracy, brand extraction, follow-up handling, and response usefulness for service advisors.",
    },
];

const lifecycle = [
  "Collected knowledge sources such as service manuals, user manuals, SOPs, telematics data, and expert mail/forum content",
  "Prepared documents for retrieval and stored them across use-case-specific vector databases",
  "Built query rephrasing using raw query and chat history",
  "Added unrelated-query handling to avoid incorrect retrieval",
  "Built brand extraction and brand follow-up logic",
  "Classified queries into diagnostic, procedural, general service, or combined categories",
  "Selected the right vector DB or combined document sources based on agent decision",
  "Retrieved relevant context from the selected knowledge base",
  "Generated contextual, brand-specific responses for service workers",
  "Deployed the assistant with a conversational UI for dealer/service advisor usage",
];

export default function ServiceMateCaseStudy() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
              Agentic RAG · LangGraph · Service Intelligence
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              ServiceMate AI
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              A generalized agentic RAG chatbot built to assist dealership
              service workers by understanding free-form service queries,
              identifying brand context, routing to the right knowledge source,
              retrieving relevant documents, and generating contextual service
              guidance from trusted internal sources.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <InfoCard
            eyebrow="Problem"
            title="Service advisors lacked quick access to trusted knowledge"
            detail="Dealer service workers often had limited access to the right servicing best practices, official manuals, SOPs, and expert guidance during real service situations."
          />

          <InfoCard
            eyebrow="Solution"
            title="One agentic assistant for many knowledge sources"
            detail="ServiceMate understands free-form queries, rephrases them with chat history, extracts brand context, classifies the query, chooses the right vector DB, retrieves context, and generates a grounded response."
          />

          <InfoCard
            eyebrow="Business Goal"
            title="Improve service quality and reduce resolution time"
            detail="The system helps service workers answer diagnostic, procedural, and general service questions faster using authentic internal knowledge sources."
          />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Architecture"
            title="End-to-End ServiceMate AI Architecture"
            description="A multi-source RAG architecture where the agent decides the right knowledge source before retrieval and response generation."
          />
          <ServiceMateEndToEndDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="LangGraph Orchestration"
            title="Agentic Query Orchestration Workflow"
            description="The orchestration layer rephrases the query, handles out-of-context questions, extracts brand information, classifies query type, retrieves context, and generates the final response."
          />
          <ServiceMateOrchestrationDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
            <SectionHeader
            eyebrow="Evaluation"
            title="RAGAS Evaluation, Human Review, and Hallucination Control"
            description="ServiceMate was evaluated using automated RAG metrics, human domain review, edge-case testing, and retrieval-grounded guardrails to reduce hallucinations and improve answer reliability."
            />
            <ServiceMateEvaluationDiagram />
        </div>
        </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Examples"
            title="Sample ServiceMate Query Flows"
            description="Examples from diagnostic and general service scenarios showing how raw user questions are rephrased, classified, retrieved, and answered."
          />
          <ServiceMateExamplesDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="System Lifecycle"
              title="From Service Documents to Dealer Assistant"
              description="The project covers knowledge preparation, vector database routing, LangGraph orchestration, retrieval, response generation, and deployment."
            />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="space-y-4">
              {lifecycle.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-semibold text-neutral-950">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-neutral-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Challenges Solved"
            title="Key Agentic RAG and Product Challenges"
            description="ServiceMate was not just a chatbot. It required query understanding, routing, brand awareness, retrieval control, and grounded answer generation."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
            Interview Explanation Script
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            How I would explain ServiceMate AI in an interview
          </h2>

          <div className="mt-6 space-y-5 text-neutral-300">
            <p>
              “ServiceMate AI was built as a generalized assistant for dealership
              service workers. The problem was that service advisors often did
              not have quick access to best-practice servicing knowledge from
              official manuals, SOPs, telematics, expert communications, and
              internal documents.”
            </p>

            <p>
              “Instead of building separate bots for every use case, I worked on
              an agentic RAG system that could understand a free-form user query,
              rephrase it using chat history, identify whether the query was
              relevant, extract the brand, classify the query type, and select the
              right vector database or document source.”
            </p>

            <p>
              “The orchestration was built using LangGraph. The key nodes were
              query rephrasing, unrelated query handling, brand extraction,
              follow-up for missing brand, query classification, document
              retrieval, and final response generation.”
            </p>

            <p>
              “For example, if a service worker asks, ‘At high speed my bike
              vibrates,’ the system can rephrase it into a clearer diagnostic
              query, identify the brand if available, classify it as diagnostic,
              retrieve relevant documents, and generate possible root causes and
              recommended checks.”
            </p>

            <p>
              “We used GPT-4 for more complex reasoning tasks like rephrasing and
              classification, while GPT-4o mini was used for lighter tasks like
              brand extraction and response support. The model selection was
              rule-based to balance quality, latency, and cost.”
            </p>

            <p>
              “The value of the project was that it converted scattered service
              knowledge into a single assistant that could provide contextual,
              brand-specific, and source-grounded guidance to service workers.”
            </p>
            <p>
            “For evaluation, I would not treat this like a normal chatbot. I evaluated it
            across the full RAG pipeline: whether the query was rephrased correctly,
            whether unrelated queries were blocked, whether the brand was extracted or
            requested when missing, whether the query was classified into the right service
            category, whether the correct vector DB was selected, whether the retrieved
            documents were relevant, and whether the final answer was grounded in those
            documents.”
            </p>

            <p>
            “To reduce hallucinations, the assistant followed a retrieve-first design. It
            did not directly answer service questions from the LLM alone. It first routed
            the query, retrieved context from manuals, SOPs, telematics, or expert sources,
            and then generated an answer based on that context. For missing brand or weak
            context cases, the system used follow-up or fallback responses instead of
            inventing an answer.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
      <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
      <p className="mt-4 text-neutral-300">{detail}</p>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-neutral-300">{description}</p>
    </div>
  );
}