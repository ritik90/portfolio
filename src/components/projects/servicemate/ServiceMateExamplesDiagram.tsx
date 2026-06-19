const examples = [
  {
    name: "Example 1",
    type: "Diagnostic Query",
    raw: "At this high speed my bike vibrates",
    rephrased: "What should be checked when my scooter starts vibrating at high speed?",
    brand: "Brand detected from context or asked if missing",
    classification: "Diagnostic",
    retrieval: "Diagnostic/service manual documents",
    response:
      "Possible root causes and recommended inspection steps are generated from retrieved service context.",
  },
  {
    name: "Example 2",
    type: "General Service Query",
    raw: "Top speed iQube in eco mode",
    rephrased: "What is the top speed of iQube in Economy mode?",
    brand: "iQube",
    classification: "General Service",
    retrieval: "User manual / product specification documents",
    response:
      "The assistant answers the top-speed question using the retrieved iQube manual context.",
  },
  {
    name: "Example 3",
    type: "Follow-up Query",
    raw: "And in power mode?",
    rephrased: "What is the top speed of iQube in Power mode?",
    brand: "iQube from chat history",
    classification: "General Service",
    retrieval: "User manual / product specification documents",
    response:
      "The assistant uses chat history to resolve the follow-up query and answer for Power mode.",
  },
];

export default function ServiceMateExamplesDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1180px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            Sample ServiceMate Query Examples
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Raw user questions are converted into standalone queries, classified,
            routed to the right source, and answered using retrieved context.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {examples.map((example) => (
            <div
              key={example.name}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm"
            >
              <div className="mb-5 rounded-2xl bg-neutral-900 p-4 text-white">
                <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">
                  {example.name}
                </p>
                <h4 className="mt-1 text-lg font-semibold">{example.type}</h4>
              </div>

              <PipelineBlock label="Raw Query" value={example.raw} />
              <ArrowDown />

              <PipelineBlock label="Rephrased Query" value={example.rephrased} highlight />
              <ArrowDown />

              <PipelineBlock label="Brand Handling" value={example.brand} />
              <ArrowDown />

              <PipelineBlock label="Agent Classification" value={example.classification} highlight />
              <ArrowDown />

              <PipelineBlock label="Retrieval Source" value={example.retrieval} />
              <ArrowDown />

              <PipelineBlock label="Final Response" value={example.response} highlight />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PipelineBlock({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        highlight ? "border-cyan-300 bg-cyan-50" : "border-neutral-200 bg-white"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium leading-6 text-neutral-900">
        {value}
      </p>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="mx-auto my-3 h-5 w-px bg-neutral-300">
      <div className="relative top-4 -left-[3.5px] h-0 w-0 border-x-[4px] border-t-[6px] border-x-transparent border-t-neutral-300" />
    </div>
  );
}