const dataSources = [
  "Page views",
  "CTA clicks",
  "Session ID behaviour",
  "Client ID history",
  "UTM source / medium / campaign",
  "Historical engagement",
];

const models = ["Random Forest", "XGBoost", "LightGBM", "AutoML"];

export default function HyperpersonalisationEndToEndDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1180px] text-neutral-900">
        <div className="mb-6 flex items-center justify-between border-b border-neutral-200 pb-4">
          <div>
            <h3 className="text-xl font-semibold">
              End-to-End CTA Propensity Architecture
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Behaviour capture → ML training → Real-time scoring → Personalised CTA → Feedback loop
            </p>
          </div>
          <div className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium text-neutral-600">
            Website Hyper-Personalisation
          </div>
        </div>

        <div className="grid grid-cols-[1fr_40px_1.2fr_40px_1.2fr_40px_1.2fr_40px_1.1fr] items-stretch gap-0">
          <Stage title="Visitor Layer" subtitle="Live user journey">
            <Node title="Website Visitor" />
            <ArrowDown />
            <Node title="Website Frontend" />
            <ArrowDown />
            <Node title="Event Tracking" detail="Clickstream capture" />
          </Stage>

          <ArrowRight />

          <Stage title="Data Layer" subtitle="Behavioural signals">
            <GroupedList title="Data Sources" items={dataSources} />
            <ArrowDown />
            <Node title="SQL / Event Store" detail="Historical interaction data" />
          </Stage>

          <ArrowRight />

          <Stage title="ML Pipeline" subtitle="Offline model development">
            <Node title="Feature Engineering Pipeline" />
            <ArrowDown />
            <Node title="Training Dataset" />
            <ArrowDown />
            <GroupedList title="Model Experimentation" items={models} />
          </Stage>

          <ArrowRight />

          <Stage title="Serving Layer" subtitle="Production inference">
            <Node title="Selected Propensity Model" detail="Best production candidate" />
            <ArrowDown />
            <Node title="Dockerised FastAPI Service" />
            <ArrowDown />
            <Node title="Google Cloud Run" detail="Scalable real-time API" />
          </Stage>

          <ArrowRight />

          <Stage title="Decision + Learning" subtitle="Personalisation loop">
            <Node title="CTA Decision Layer" detail="Predefined FastAPI thresholds" />
            <ArrowDown />
            <Node title="Personalised CTA Rendered" />
            <ArrowDown />
            <Node title="A/B Testing + Monitoring" detail="Engagement, drift, latency" />
            <ArrowDown />
            <Node title="Feedback Loop" accent />
          </Stage>
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-cyan-300 bg-cyan-50 px-5 py-4 text-sm text-cyan-900">
          Feedback from CTA impressions, clicks, conversions, latency, and drift monitoring is reused to improve features, retrain models, and refine CTA decision rules.
        </div>
      </div>
    </div>
  );
}

function Stage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>
        <p className="text-xs text-neutral-500">{subtitle}</p>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Node({
  title,
  detail,
  accent = false,
}: {
  title: string;
  detail?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border px-4 py-3 text-center shadow-sm ${
        accent
          ? "border-cyan-300 bg-cyan-100"
          : "border-neutral-200 bg-white"
      }`}
    >
      <p className="text-sm font-semibold text-neutral-900">{title}</p>
      {detail && <p className="mt-1 text-xs text-neutral-500">{detail}</p>}
    </div>
  );
}

function GroupedList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
      <p className="mb-3 text-center text-sm font-semibold text-neutral-900">
        {title}
      </p>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2 text-center text-xs text-neutral-700"
          >
            {item}
          </div>
        ))}
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

function ArrowDown() {
  return (
    <div className="mx-auto h-5 w-px bg-neutral-300">
      <div className="relative top-4 -left-[3.5px] h-0 w-0 border-x-[4px] border-t-[6px] border-x-transparent border-t-neutral-300" />
    </div>
  );
}