const flowSteps = [
  "User lands on website",
  "Frontend captures session ID, client ID, and UTM signals",
  "Feature validation / preprocessing",
  "FastAPI scoring request",
  "Propensity model predicts CTA engagement probability",
];

const outcomes = [
  {
  label: "High Propensity",
  rule: "Score ≥ predefined high threshold",
  cta: "Conversion-focused CTA",
  example: "Book Test Ride / Enquire Now",
},
{
  label: "Medium Propensity",
  rule: "Score within predefined mid range",
  cta: "Product / Education CTA",
  example: "Explore Features / Compare Models",
},
{
  label: "Low Propensity",
  rule: "Score below predefined low threshold",
  cta: "Soft CTA",
  example: "Learn More / Browse Products",
},
];

export default function HyperpersonalisationWorkflowDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1040px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            Real-Time Inference Workflow
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Live session signals are converted into propensity scores and mapped to CTA experiences.
          </p>
        </div>

        <div className="flex items-center justify-between gap-3">
          {flowSteps.map((step, index) => (
            <div key={step} className="flex flex-1 items-center gap-3">
              <div className="min-h-[96px] flex-1 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-center shadow-sm">
                <div className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold">{step}</p>
              </div>
              {index < flowSteps.length - 1 && <ArrowRight />}
            </div>
          ))}
        </div>

        <div className="mx-auto my-8 h-8 w-px bg-neutral-300" />

        <div className="mx-auto max-w-md rounded-2xl border-2 border-cyan-300 bg-cyan-50 p-5 text-center shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wider text-cyan-700">
            Decision Layer
          </p>
          <h4 className="mt-1 text-lg font-semibold text-neutral-900">
            Check propensity score
          </h4>
          <p className="mt-2 text-sm text-neutral-600">
            The predicted score is mapped to a CTA strategy using predefined FastAPI thresholds and business rules.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-5">
          {outcomes.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-center shadow-sm"
            >
              <p className="text-sm font-semibold text-neutral-900">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-neutral-500">{item.rule}</p>

              <div className="my-4 h-px bg-neutral-200" />

              <p className="text-sm font-semibold text-cyan-700">{item.cta}</p>
              <p className="mt-2 rounded-xl bg-white px-3 py-2 text-xs text-neutral-600">
                {item.example}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-[1fr_40px_1fr_40px_1fr] items-center">
          <FooterNode title="CTA shown to user" />
          <ArrowRight />
          <FooterNode title="User response logged" />
          <ArrowRight />
          <FooterNode title="A/B testing + monitoring" detail="Engagement lift, drift, latency, reliability" />
        </div>
      </div>
    </div>
  );
}

function FooterNode({ title, detail }: { title: string; detail?: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-center shadow-sm">
      <p className="text-sm font-semibold text-neutral-900">{title}</p>
      {detail && <p className="mt-1 text-xs text-neutral-500">{detail}</p>}
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