const monitoringGroups = [
  {
    title: "Model Monitoring",
    items: [
      "AUC / precision / recall",
      "KS stability",
      "Prediction distribution",
      "Decile conversion trend",
    ],
  },
  {
    title: "Data Monitoring",
    items: [
      "Feature drift",
      "Missing values",
      "Data freshness",
      "Source distribution shift",
    ],
  },
  {
    title: "System Monitoring",
    items: [
      "REST API latency",
      "Endpoint reliability",
      "Batch job completion",
      "Scoring failures",
    ],
  },
  {
    title: "Business Monitoring",
    items: [
      "HOT lead follow-up SLA",
      "Conversion rate",
      "Dealer adoption",
      "Revenue impact",
    ],
  },
];

const feedbackLoop = [
  "Monitor drift / KPI drop",
  "Investigate feature or dealer behaviour",
  "Retrain or tune model",
  "Update thresholds if needed",
  "Redeploy champion model",
];

export default function LeadClassificationMonitoringDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1120px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            Monitoring Framework
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Production monitoring covered model quality, data stability, system reliability, and business outcome tracking.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {monitoringGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm"
            >
              <h4 className="text-sm font-semibold text-neutral-900">
                {group.title}
              </h4>

              <div className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-xs text-neutral-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-emerald-300 bg-emerald-50 p-5">
          <p className="text-sm font-semibold text-emerald-900">
            Continuous improvement loop
          </p>

          <div className="mt-5 grid grid-cols-[1fr_34px_1fr_34px_1fr_34px_1fr_34px_1fr] items-center">
            {feedbackLoop.map((step, index) => (
              <div key={step} className="contents">
                <div className="rounded-xl border border-emerald-200 bg-white px-4 py-4 text-center text-xs font-medium text-neutral-800">
                  {step}
                </div>
                {index < feedbackLoop.length - 1 && <ArrowRight />}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-[1fr_44px_1fr] items-center">
          <SummaryNode
            title="SHAP Explainability"
            detail="Explains why leads receive high or low scores using feature-level contribution analysis."
          />
          <ArrowRight />
          <SummaryNode
            title="Dealer Action Feedback"
            detail="Follow-up speed and conversion outcomes feed back into monitoring and model improvement."
            accent
          />
        </div>
      </div>
    </div>
  );
}

function SummaryNode({
  title,
  detail,
  accent = false,
}: {
  title: string;
  detail: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 text-center shadow-sm ${
        accent
          ? "border-emerald-300 bg-emerald-50"
          : "border-neutral-200 bg-white"
      }`}
    >
      <p className="text-sm font-semibold text-neutral-900">{title}</p>
      <p className="mt-2 text-xs leading-5 text-neutral-500">{detail}</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-px w-7 bg-emerald-300" />
      <div className="h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-emerald-300" />
    </div>
  );
}