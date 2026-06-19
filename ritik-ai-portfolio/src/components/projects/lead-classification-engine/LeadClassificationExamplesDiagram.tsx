const examples = [
  {
    name: "Example 1",
    segment: "HOT Lead",
    raw: "Recent enquiry from high-performing source, popular vehicle model, strong customer profile, active dealer region",
    features: [
      "High-quality enquiry source",
      "Recent enquiry",
      "Strong dealer performance",
      "High-demand vehicle model",
    ],
    probability: "High purchase probability",
    decile: "Top 1–2 deciles",
    action: "Immediate follow-up within 2 hours",
    explanation:
      "SHAP highlights enquiry source, vehicle model, dealer region, and recency as strong positive drivers.",
  },
  {
    name: "Example 2",
    segment: "WARM Lead",
    raw: "Moderate source quality, valid customer profile, enquiry not very recent, average dealer conversion pattern",
    features: [
      "Moderate enquiry source",
      "Average recency",
      "Valid customer profile",
      "Average dealer trend",
    ],
    probability: "Medium purchase probability",
    decile: "Next 3–4 deciles",
    action: "Prioritised nurture follow-up",
    explanation:
      "SHAP shows some positive intent signals but weaker urgency compared with HOT leads.",
  },
  {
    name: "Example 3",
    segment: "COLD Lead",
    raw: "Low-quality source, older enquiry, weak engagement pattern, lower-converting region/dealer combination",
    features: [
      "Older enquiry",
      "Low-intent source",
      "Weak engagement",
      "Lower conversion pattern",
    ],
    probability: "Low purchase probability",
    decile: "Remaining deciles",
    action: "Lower priority follow-up",
    explanation:
      "SHAP shows age of enquiry and weak source quality as major negative drivers.",
  },
];

export default function LeadClassificationExamplesDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1180px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            Lead Scoring Examples
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Probability scores are converted into HOT, WARM, and COLD segments using KS/decile-based business thresholds.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {examples.map((example) => (
            <div
              key={example.name}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm"
            >
              <div className="mb-5 rounded-2xl bg-neutral-900 p-4 text-white">
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-300">
                  {example.name}
                </p>
                <h4 className="mt-1 text-lg font-semibold">
                  {example.segment}
                </h4>
              </div>

              <PipelineBlock label="Raw Lead Pattern" value={example.raw} />
              <ArrowDown />

              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Key Features
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
                label="Model Output"
                value={example.probability}
                highlight
              />
              <ArrowDown />

              <PipelineBlock label="KS / Decile Band" value={example.decile} />
              <ArrowDown />

              <PipelineBlock
                label="Dealer Action"
                value={example.action}
                highlight
              />
              <ArrowDown />

              <PipelineBlock label="SHAP Explanation" value={example.explanation} />
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
          ? "border-emerald-300 bg-emerald-50"
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