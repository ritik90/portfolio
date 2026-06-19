const orchestrationSteps = [
  {
    title: "Raw Query",
    detail: "User asks free-form service question",
    model: "User input",
  },
  {
    title: "Query Rephrasing",
    detail: "Uses raw query + chat history to create standalone query",
    model: "GPT-4",
  },
  {
    title: "Unrelated Query Check",
    detail: "Detects out-of-context or irrelevant questions",
    model: "GPT-4o mini",
  },
  {
    title: "Brand Extraction",
    detail: "Extracts brand/model from query or history",
    model: "GPT-4o mini",
  },
  {
    title: "Brand Follow-up",
    detail: "If brand is missing, asks user to specify brand",
    model: "Rule-based",
  },
  {
    title: "Query Classification",
    detail: "Classifies as diagnostic, procedural, general, or combined",
    model: "GPT-4",
  },
  {
    title: "Vector DB Routing",
    detail: "Chooses the right document source or combined retrieval path",
    model: "Agent decision",
  },
  {
    title: "Context Retrieval",
    detail: "Retrieves relevant documents from selected DB",
    model: "Vector search",
  },
  {
    title: "Response Generation",
    detail: "Generates contextual service answer from retrieved context",
    model: "GPT-4o mini",
  },
];

export default function ServiceMateOrchestrationDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1220px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            LangGraph Orchestration Flow
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            The agent moves through rephrasing, context checks, brand extraction,
            classification, retrieval, and grounded response generation.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {orchestrationSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
                  {index + 1}
                </div>
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-500">
                  {step.model}
                </span>
              </div>

              <h4 className="text-sm font-semibold text-neutral-900">
                {step.title}
              </h4>
              <p className="mt-2 text-xs leading-5 text-neutral-500">
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-[1fr_44px_1fr_44px_1fr] items-center">
          <DecisionNode
            title="Is query unrelated?"
            yes="Return safe unrelated response"
            no="Continue to brand extraction"
          />
          <ArrowRight />
          <DecisionNode
            title="Is brand available?"
            yes="Continue to classification"
            no="Ask user to specify brand"
          />
          <ArrowRight />
          <DecisionNode
            title="Which query type?"
            yes="Diagnostic / Procedural / General / Both"
            no="Route to fallback response"
          />
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-cyan-300 bg-cyan-50 p-5 text-sm text-cyan-900">
          GPT-4 is used for higher-reasoning steps such as rephrasing and query
          classification. GPT-4o mini is used for lighter steps such as brand
          extraction and response support. The LLM selection is rule-based.
        </div>
      </div>
    </div>
  );
}

function DecisionNode({
  title,
  yes,
  no,
}: {
  title: string;
  yes: string;
  no: string;
}) {
  return (
    <div className="rounded-2xl border-2 border-cyan-300 bg-cyan-50 p-5 text-center shadow-sm">
      <p className="text-sm font-semibold text-neutral-900">{title}</p>
      <div className="mt-4 grid gap-2">
        <div className="rounded-xl border border-cyan-200 bg-white px-3 py-2 text-xs text-neutral-700">
          Yes: {yes}
        </div>
        <div className="rounded-xl border border-cyan-200 bg-white px-3 py-2 text-xs text-neutral-700">
          No: {no}
        </div>
      </div>
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