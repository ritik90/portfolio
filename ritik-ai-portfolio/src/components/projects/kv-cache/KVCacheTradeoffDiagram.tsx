const tradeoffs = [
  {
    policy: "Full Cache",
    speed: "High",
    memory: "High",
    quality: "Best",
    decision: "Use when quality is most important and memory is available.",
  },
  {
    policy: "Sliding 512",
    speed: "High",
    memory: "Moderate",
    quality: "Close to full context",
    decision: "Good balanced operating point on OPT-2.7B.",
  },
  {
    policy: "Sliding 256",
    speed: "High",
    memory: "Low",
    quality: "Poor",
    decision: "Looks good on speed-memory, but quality loss is severe.",
  },
  {
    policy: "Int8 Accounting",
    speed: "Similar",
    memory: "Lower reported KV bytes",
    quality: "Same as parent policy",
    decision: "Useful for memory surface study, not true quantised serving.",
  },
];

const hypotheses = [
  {
    id: "H1",
    result: "Supported",
    text: "Cached conditions achieve significantly better throughput and latency than no-cache.",
  },
  {
    id: "H2",
    result: "Partially supported",
    text: "sliding_256 degrades quality heavily; sliding_512 differs statistically but has small practical effect.",
  },
  {
    id: "H3",
    result: "Supported",
    text: "OPT-125M replication follows the same quality direction with larger loss.",
  },
  {
    id: "H4",
    result: "Supported",
    text: "Compression-accounting variants match parent retention quality.",
  },
  {
    id: "H5",
    result: "Supported",
    text: "KVEngine block usage and KV memory scale proportionally with concurrent requests.",
  },
];

export default function KVCacheTradeoffDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1180px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            Quality-Aware Trade-off Interpretation
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            The best cache policy depends on whether the system prioritises memory, speed, or output quality.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {tradeoffs.map((item) => (
            <div
              key={item.policy}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm"
            >
              <h4 className="text-lg font-semibold text-neutral-900">
                {item.policy}
              </h4>

              <div className="mt-5 space-y-3">
                <Pill label="Speed" value={item.speed} />
                <Pill label="Memory" value={item.memory} />
                <Pill label="Quality" value={item.quality} />
              </div>

              <p className="mt-5 rounded-2xl border border-neutral-200 bg-white p-4 text-sm leading-6 text-neutral-700">
                {item.decision}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-amber-300 bg-amber-50 p-6">
          <p className="text-sm font-semibold text-neutral-900">
            Hypothesis Evaluation Summary
          </p>

          <div className="mt-5 grid grid-cols-5 gap-3">
            {hypotheses.map((hypothesis) => (
              <div
                key={hypothesis.id}
                className="rounded-2xl border border-amber-200 bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-neutral-900">
                    {hypothesis.id}
                  </p>
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-1 text-[10px] font-medium text-amber-800">
                    {hypothesis.result}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-5 text-neutral-600">
                  {hypothesis.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-5 text-sm text-neutral-700">
          Practical conclusion: choose cache policy using a three-dimensional
          view. Speed and memory alone can incorrectly favour aggressive
          truncation, while quality-aware evaluation shows when conservative
          retention is safer.
        </div>
      </div>
    </div>
  );
}

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-neutral-900">{value}</p>
    </div>
  );
}