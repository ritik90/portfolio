const realtimeFeatures = [
  "Enquiry source",
  "Location",
  "Vehicle model",
  "Customer profile",
  "Dealer",
  "Time since enquiry",
  "Cyclic time features",
];

const batchFeatures = [
  "All real-time features",
  "Follow-up within 2 hrs",
  "Follow-up within 4 hrs",
  "Lead ageing",
  "Dealer response behaviour",
  "Previous interaction signals",
];

const leadBands = [
  {
    title: "HOT",
    rule: "Top 1–2 deciles",
    detail: "High conversion segment, e.g. >20% observed conversion",
    action: "Immediate follow-up",
  },
  {
    title: "WARM",
    rule: "Next 3–4 deciles",
    detail: "Moderate conversion segment, e.g. >5% observed conversion",
    action: "Prioritised nurture",
  },
  {
    title: "COLD",
    rule: "Remaining deciles",
    detail: "Lower conversion probability",
    action: "Lower priority follow-up",
  },
];

export default function LeadClassificationScoringWorkflowDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1200px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            Real-Time and Batch Scoring Workflow
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Two scoring paths: instant real-time scoring for new enquiries and daily 7 AM batch scoring with follow-up behaviour features.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_44px_1fr] items-stretch">
          <ScoringPath
            title="Real-Time Scoring"
            subtitle="For fresh enquiries"
            badge="Live API"
            features={realtimeFeatures}
            footer="Used when a new enquiry is created and immediate scoring is needed."
          />

          <ArrowRight />

          <ScoringPath
            title="Daily Batch Scoring"
            subtitle="7 AM refresh"
            badge="Batch job"
            features={batchFeatures}
            footer="Uses additional follow-up behaviour features unavailable during first real-time scoring."
            accent
          />
        </div>

        <div className="my-8 flex justify-center">
          <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 px-8 py-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-700">
              Common Output
            </p>
            <h4 className="mt-1 text-lg font-semibold">
              Purchase probability score
            </h4>
            <p className="mt-2 max-w-2xl text-sm text-neutral-600">
              The model produces a probability score. KS charts and decile-level
              conversion rates are used to translate this score into business-friendly
              lead bands.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {leadBands.map((band) => (
            <div
              key={band.title}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-center shadow-sm"
            >
              <p className="text-2xl font-semibold text-neutral-900">
                {band.title}
              </p>
              <p className="mt-1 text-xs font-medium text-emerald-700">
                {band.rule}
              </p>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {band.detail}
              </p>
              <div className="mt-4 rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-800">
                {band.action}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScoringPath({
  title,
  subtitle,
  badge,
  features,
  footer,
  accent = false,
}: {
  title: string;
  subtitle: string;
  badge: string;
  features: string[];
  footer: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border p-5 shadow-sm ${
        accent ? "border-emerald-300 bg-emerald-50" : "border-neutral-200 bg-neutral-50"
      }`}
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold text-neutral-900">{title}</h4>
          <p className="text-sm text-neutral-500">{subtitle}</p>
        </div>
        <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600">
          {badge}
        </span>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Feature Set
        </p>
        <div className="grid grid-cols-2 gap-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2 text-xs text-neutral-700"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-neutral-600">{footer}</p>
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