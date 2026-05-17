const examples = [
  {
    name: "Example 1",
    raw: "My vehicle makes vibration noise at high speed and service centre did not resolve it.",
    output: "Negative sentiment",
    entities: ["Vehicle vibration", "High speed", "Service centre"],
    cluster: "Vibration / unresolved service issue",
    businessUse: "Prioritise follow-up",
  },
  {
    name: "Example 2",
    raw: "Battery range has dropped and charging takes longer than usual.",
    output: "Negative / concern sentiment",
    entities: ["Battery range", "Charging time"],
    cluster: "Battery / charging issue",
    businessUse: "Route to EV service specialist",
  },
  {
    name: "Example 3",
    raw: "Service was completed quickly and the advisor explained the issue clearly.",
    output: "Positive sentiment",
    entities: ["Service completed", "Advisor explanation"],
    cluster: "Positive service experience",
    businessUse: "Customer satisfaction signal",
  },
];

export default function BertSampleExamplesDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1180px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            Sample NLP-to-Business Outputs
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Raw service text is transformed into sentiment, entities, issue themes, and service actions.
          </p>
        </div>

        <div className="space-y-5">
          {examples.map((example) => (
            <div
              key={example.name}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-neutral-900">
                  {example.name}
                </p>
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-500">
                  Service NLP Example
                </span>
              </div>

              <div className="grid grid-cols-[1.4fr_1fr_1.2fr_1.1fr_1fr] gap-4">
                <Block label="Raw Text" value={example.raw} />
                <Block label="NLP Task Output" value={example.output} highlight />
                <EntityBlock entities={example.entities} />
                <Block label="Cluster / Theme" value={example.cluster} />
                <Block label="Business Use" value={example.businessUse} highlight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Block({
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
        highlight
          ? "border-violet-300 bg-violet-50"
          : "border-neutral-200 bg-white"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
        {label}
      </p>
      <p className="mt-3 text-sm font-medium leading-6 text-neutral-900">
        {value}
      </p>
    </div>
  );
}

function EntityBlock({ entities }: { entities: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
        Extracted Entities
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {entities.map((entity) => (
          <span
            key={entity}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700"
          >
            {entity}
          </span>
        ))}
      </div>
    </div>
  );
}