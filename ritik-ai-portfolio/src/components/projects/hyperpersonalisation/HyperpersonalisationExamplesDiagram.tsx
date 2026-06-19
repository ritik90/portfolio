const examples = [
  {
    name: "Example 1",
    visitor: "High-intent returning visitor",
    raw: "Same client ID returned across sessions, visited product page, clicked specifications",
    features: [
      "Client ID history",
      "Repeated sessions",
      "High page depth",
      "Product interest",
      "CTA history",
    ],
    prediction: "High CTA propensity",
    decision: "Book Test Ride / Enquire Now",
    outcome: "Conversion-focused CTA shown",
  },
  {
    name: "Example 2",
    visitor: "Campaign-driven explorer",
    raw: "Landed from UTM campaign, browsed homepage, viewed one product",
    features: [
      "UTM source",
      "UTM medium",
      "UTM campaign",
      "Moderate engagement",
      "Short session",
    ],
    prediction: "Medium CTA propensity",
    decision: "Explore Features / Compare Models",
    outcome: "Educational CTA shown",
  },
  {
    name: "Example 3",
    visitor: "Low-engagement browser",
    raw: "New session ID, quick bounce, no CTA click, low interaction depth",
    features: [
      "New session",
      "Low dwell time",
      "Low page depth",
      "No repeated visit",
    ],
    prediction: "Low CTA propensity",
    decision: "Learn More / Browse Products",
    outcome: "Soft CTA shown",
  },
];

export default function HyperpersonalisationExamplesDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1080px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            Sample Personalisation Examples
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Behavioural signals are transformed into features, scored by the model, and converted into CTA decisions.
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
                <h4 className="mt-1 text-lg font-semibold">
                  {example.visitor}
                </h4>
              </div>

              <PipelineBlock
                label="Raw Behaviour"
                value={example.raw}
              />

              <ArrowDown />

              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Features
                </p>
                <div className="flex flex-wrap gap-2">
                  {example.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <ArrowDown />

              <PipelineBlock
                label="Prediction"
                value={example.prediction}
                highlight
              />

              <ArrowDown />

              <PipelineBlock
                label="CTA Decision"
                value={example.decision}
              />

              <ArrowDown />

              <PipelineBlock
                label="Outcome"
                value={example.outcome}
                highlight
              />
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
        highlight
          ? "border-cyan-300 bg-cyan-50"
          : "border-neutral-200 bg-white"
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