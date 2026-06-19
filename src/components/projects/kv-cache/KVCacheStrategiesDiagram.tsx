const strategies = [
  {
    name: "No Cache",
    detail: "Recompute full prefix every decode step",
    speed: "Slow",
    memory: "No KV footprint",
    quality: "Exact full context",
  },
  {
    name: "Full Cache",
    detail: "Store all previous K/V tensors",
    speed: "Fast",
    memory: "Grows with sequence length",
    quality: "Exact full context",
  },
  {
    name: "Sliding 512",
    detail: "Retain most recent 512 tokens",
    speed: "Fast",
    memory: "Bounded memory",
    quality: "Close to full context on OPT-2.7B",
  },
  {
    name: "Sliding 256",
    detail: "Retain most recent 256 tokens",
    speed: "Fast",
    memory: "Lower memory",
    quality: "Large quality degradation",
  },
  {
    name: "Int8 Accounting",
    detail: "Storage-accounted compressed variants",
    speed: "Bookkeeping only",
    memory: "Reduced reported KV bytes",
    quality: "Same as parent retention policy",
  },
];

export default function KVCacheStrategiesDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1120px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            KV Cache Strategy Comparison
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Each policy changes speed, memory, and quality differently.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {strategies.map((strategy) => (
            <div
              key={strategy.name}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm"
            >
              <h4 className="text-lg font-semibold text-neutral-900">
                {strategy.name}
              </h4>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {strategy.detail}
              </p>

              <div className="mt-5 space-y-3">
                <Metric label="Speed" value={strategy.speed} />
                <Metric label="Memory" value={strategy.memory} />
                <Metric label="Quality" value={strategy.quality} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-amber-300 bg-amber-50 p-5 text-sm text-amber-900">
          Important limitation: the int8 variants change storage accounting and
          policy bookkeeping, but the model-facing decode path remains full
          precision. They should not be presented as true end-to-end quantised
          serving.
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-neutral-900">{value}</p>
    </div>
  );
}