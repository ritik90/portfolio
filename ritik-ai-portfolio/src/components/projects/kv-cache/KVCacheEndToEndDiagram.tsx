const pipeline = [
  "Condition registry",
  "Model loading",
  "Shuffled trial execution",
  "CSV outputs",
  "Statistical analysis",
  "Tables and plots",
];

const metrics = [
  "Tokens/sec",
  "p95 ms/token",
  "Peak GPU memory",
  "Final KV footprint",
  "NLL",
  "Perplexity",
];

const tests = [
  "Within-subjects design",
  "Friedman omnibus test",
  "Paired t-tests",
  "Holm correction",
  "95% confidence intervals",
];

export default function KVCacheEndToEndDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1180px] text-neutral-900">
        <div className="mb-6 flex items-center justify-between border-b border-neutral-200 pb-4">
          <div>
            <h3 className="text-xl font-semibold">
              KVBench Benchmark Pipeline
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Reproducible execution, structured outputs, statistical analysis, and quality-aware interpretation.
            </p>
          </div>
          <div className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium text-neutral-600">
            KVBench
          </div>
        </div>

        <div className="grid grid-cols-[1fr_34px_1fr_34px_1fr_34px_1fr_34px_1fr_34px_1fr] items-center">
          {pipeline.map((step, index) => (
            <div key={step} className="contents">
              <FlowNode title={step} number={index + 1} />
              {index < pipeline.length - 1 && <ArrowRight />}
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-[1fr_44px_1fr] items-stretch">
          <GroupedList title="Measured Metrics" items={metrics} />
          <ArrowRight />
          <GroupedList title="Statistical Methodology" items={tests} accent />
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
          Condition order was shuffled independently in each trial to reduce
          systematic ordering effects such as thermal state, allocator state, or
          transient GPU contention.
        </div>
      </div>
    </div>
  );
}

function FlowNode({ title, number }: { title: string; number: number }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-center shadow-sm">
      <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
        {number}
      </div>
      <p className="text-sm font-semibold text-neutral-900">{title}</p>
    </div>
  );
}

function GroupedList({
  title,
  items,
  accent = false,
}: {
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 shadow-sm ${
        accent ? "border-amber-300 bg-amber-50" : "border-neutral-200 bg-neutral-50"
      }`}
    >
      <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-xs text-neutral-700"
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
      <div className="h-px w-7 bg-neutral-300" />
      <div className="h-0 w-0 border-y-[6px] border-l-[8px] border-y-transparent border-l-neutral-300" />
    </div>
  );
}