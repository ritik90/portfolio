const dataSources = [
  "Enquiry source",
  "Location",
  "Vehicle model",
  "Customer profile",
  "Dealer",
  "Time since enquiry",
  "Cyclic time features",
];

const models = [
  "Embedding models",
  "XGBoost",
  "LightGBM",
  "Use-case-specific models",
];

const outputs = [
  "Purchase probability",
  "KS / decile ranking",
  "HOT / WARM / COLD band",
  "Dealer follow-up priority",
];

export default function LeadClassificationEndToEndDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1280px] text-neutral-900">
        <div className="mb-6 flex items-center justify-between border-b border-neutral-200 pb-4">
          <div>
            <h3 className="text-xl font-semibold">
              End-to-End Lead Classification Architecture
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Customer enquiry → feature engineering → model scoring → lead bands → dealer action → monitoring
            </p>
          </div>

          <div className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium text-neutral-600">
            Production ML Scoring System
          </div>
        </div>

        <div className="grid grid-cols-[1fr_40px_1.2fr_40px_1.2fr_40px_1.2fr_40px_1fr] items-stretch">
          <Stage title="Input Layer" subtitle="Customer enquiries">
            <Node title="Customer Enquiry" detail="New or existing lead" />
            <ArrowDown />
            <Node title="Dealer / Channel Data" detail="Multiple enquiry sources" />
          </Stage>

          <ArrowRight />

          <Stage title="Feature Layer" subtitle="Lead-level signals">
            <GroupedList title="Features" items={dataSources} />
          </Stage>

          <ArrowRight />

          <Stage title="Model Layer" subtitle="Experimentation + tuning">
            <GroupedList title="Tested Models" items={models} />
            <ArrowDown />
            <Node title="Hyperparameter Tuning" detail="Best model per use case" />
          </Stage>

          <ArrowRight />

          <Stage title="Scoring Layer" subtitle="Probability to priority">
            <Node title="Purchase Probability Score" />
            <ArrowDown />
            <Node title="KS Chart + Decile Analysis" detail="Conversion-based segmentation" />
            <ArrowDown />
            <GroupedList title="Business Outputs" items={outputs} />
          </Stage>

          <ArrowRight />

          <Stage title="Action Layer" subtitle="Dealer workflow">
            <Node title="Dealer Follow-up Queue" />
            <ArrowDown />
            <Node title="SHAP Explainability" detail="Why lead is high / low" />
            <ArrowDown />
            <Node title="Monitoring + Feedback" accent />
          </Stage>
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-emerald-300 bg-emerald-50 px-5 py-4 text-sm text-emerald-900">
          The system converts raw enquiry data into purchase probabilities, then
          uses KS/decile analysis to create HOT, WARM, and COLD lead bands for
          dealer follow-up prioritisation.
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
          ? "border-emerald-300 bg-emerald-100"
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