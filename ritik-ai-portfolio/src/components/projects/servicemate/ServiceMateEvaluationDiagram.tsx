const ragasMetrics = [
  {
    title: "Faithfulness",
    detail:
      "Checked whether the generated answer was supported by the retrieved documents instead of being invented by the LLM.",
  },
  {
    title: "Answer Relevance",
    detail:
      "Measured whether the response directly answered the service advisor’s query.",
  },
  {
    title: "Context Precision",
    detail:
      "Checked whether the retrieved chunks were actually useful for answering the query.",
  },
  {
    title: "Context Recall",
    detail:
      "Checked whether the retrieval step captured the important information needed to answer correctly.",
  },
];

const humanEvalChecks = [
  "Is the answer technically correct for the vehicle/service context?",
  "Is the response useful for a service advisor?",
  "Is the brand/model context handled correctly?",
  "Does the answer avoid unsupported claims?",
  "Is the response clear for moderately technical dealer staff?",
  "Does the response ask a follow-up when important information is missing?",
];

const hallucinationControls = [
  "Retrieve-first design: the assistant answers only after retrieving context",
  "RAGAS faithfulness checks to detect unsupported generation",
  "Unrelated-query detector blocks non-service questions before retrieval",
  "Brand extraction node checks whether brand/model context is available",
  "Missing-brand flow asks the user to specify the brand before answering",
  "Query classifier routes diagnostic, procedural, and general queries separately",
  "Vector DB routing reduces irrelevant context by selecting the right knowledge source",
  "Fallback response is used when retrieved context is weak or insufficient",
];

const evaluationFlow = [
  "Golden test queries",
  "Expected source/context",
  "RAG pipeline response",
  "RAGAS scoring",
  "Human review",
  "Prompt / retrieval improvement",
];

export default function ServiceMateEvaluationDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1180px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            RAG Evaluation and Hallucination Control
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            ServiceMate was evaluated using automated RAGAS metrics, human
            domain review, edge-case testing, and retrieval-grounded guardrails.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_44px_1fr_44px_1fr] items-stretch">
          <EvaluationColumn
            title="Automated RAG Evaluation"
            subtitle="RAGAS-based checks"
          >
            {ragasMetrics.map((metric) => (
              <MiniCard
                key={metric.title}
                title={metric.title}
                detail={metric.detail}
              />
            ))}
          </EvaluationColumn>

          <ArrowRight />

          <EvaluationColumn
            title="Human Evaluation"
            subtitle="Domain and edge-case review"
          >
            {humanEvalChecks.map((check) => (
              <div
                key={check}
                className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-xs leading-5 text-neutral-700"
              >
                {check}
              </div>
            ))}
          </EvaluationColumn>

          <ArrowRight />

          <EvaluationColumn
            title="Hallucination Controls"
            subtitle="Grounded response generation"
            accent
          >
            {hallucinationControls.slice(0, 6).map((control) => (
              <div
                key={control}
                className="rounded-xl border border-cyan-200 bg-white px-4 py-3 text-xs leading-5 text-neutral-700"
              >
                {control}
              </div>
            ))}
          </EvaluationColumn>
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-cyan-300 bg-cyan-50 p-5">
          <p className="text-sm font-semibold text-cyan-900">
            Evaluation improvement loop
          </p>

          <div className="mt-5 grid grid-cols-[1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr_32px_1fr] items-center">
            {evaluationFlow.map((step, index) => (
              <div key={step} className="contents">
                <div className="rounded-xl border border-cyan-200 bg-white px-4 py-4 text-center text-xs font-medium text-neutral-800">
                  {step}
                </div>
                {index < evaluationFlow.length - 1 && <SmallArrow />}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {hallucinationControls.slice(6).map((control) => (
            <div
              key={control}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700"
            >
              {control}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EvaluationColumn({
  title,
  subtitle,
  children,
  accent = false,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        accent ? "border-cyan-300 bg-cyan-50" : "border-neutral-200 bg-neutral-50"
      }`}
    >
      <div className="mb-5">
        <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>
        <p className="text-xs text-neutral-500">{subtitle}</p>
      </div>

      <div className="space-y-3">{children}</div>
    </div>
  );
}

function MiniCard({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
      <p className="text-sm font-semibold text-neutral-900">{title}</p>
      <p className="mt-2 text-xs leading-5 text-neutral-500">{detail}</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-px w-8 bg-neutral-300" />
      <div className="h-0 w-0 border-y-[6px] border-l-[8px] border-y-transparent border-l-neutral-300" />
    </div>
  );
}

function SmallArrow() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-px w-5 bg-cyan-300" />
      <div className="h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-cyan-300" />
    </div>
  );
}