const performanceRows = [
  {
    condition: "no_cache",
    tokens: "6.47",
    latency: "158.68",
    kv: "0.00 MB",
    takeaway: "Slow because prefix is recomputed",
  },
  {
    condition: "full_cache",
    tokens: "34.18",
    latency: "35.22",
    kv: "177.19 MB",
    takeaway: "Fast, but highest final KV footprint",
  },
  {
    condition: "sliding_512",
    tokens: "34.93",
    latency: "32.47",
    kv: "160.00 MB",
    takeaway: "Fast with moderate memory reduction",
  },
  {
    condition: "sliding_256",
    tokens: "37.26",
    latency: "30.59",
    kv: "80.00 MB",
    takeaway: "Low memory but quality risk",
  },
  {
    condition: "sliding_256_int8kv",
    tokens: "35.31",
    latency: "34.96",
    kv: "41.00 MB",
    takeaway: "Storage-accounted memory reduction",
  },
];

const qualityRows = [
  {
    group: "Exact / full context",
    nll: "3.2507",
    ppl: "25.83",
    interpretation: "Best quality baseline",
  },
  {
    group: "Sliding 512",
    nll: "3.2623",
    ppl: "26.14",
    interpretation: "Close practical quality",
  },
  {
    group: "Sliding 256",
    nll: "4.7504",
    ppl: "116.72",
    interpretation: "Severe degradation",
  },
];

export default function KVCacheResultsDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1180px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            OPT-2.7B Results Summary
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Cached decoding is much faster than no-cache, but retention policy determines quality.
          </p>
        </div>

        <div className="grid grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
            <h4 className="text-sm font-semibold text-neutral-900">
              Performance and Memory
            </h4>

            <div className="mt-5 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <div className="grid grid-cols-[1.1fr_0.7fr_0.8fr_0.8fr_1.5fr] border-b border-neutral-200 bg-neutral-100 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <div>Condition</div>
                <div>Tokens/s</div>
                <div>p95 ms/tok</div>
                <div>Final KV</div>
                <div>Takeaway</div>
              </div>

              {performanceRows.map((row) => (
                <div
                  key={row.condition}
                  className="grid grid-cols-[1.1fr_0.7fr_0.8fr_0.8fr_1.5fr] border-b border-neutral-100 px-4 py-3 text-sm last:border-b-0"
                >
                  <div className="font-medium">{row.condition}</div>
                  <div>{row.tokens}</div>
                  <div>{row.latency}</div>
                  <div>{row.kv}</div>
                  <div className="text-neutral-600">{row.takeaway}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-amber-300 bg-amber-50 p-5">
            <h4 className="text-sm font-semibold text-neutral-900">
              Quality Evaluation
            </h4>

            <div className="mt-5 space-y-3">
              {qualityRows.map((row) => (
                <div
                  key={row.group}
                  className="rounded-2xl border border-amber-200 bg-white p-4"
                >
                  <p className="text-sm font-semibold text-neutral-900">
                    {row.group}
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl bg-neutral-50 px-3 py-2">
                      NLL: {row.nll}
                    </div>
                    <div className="rounded-xl bg-neutral-50 px-3 py-2">
                      PPL: {row.ppl}
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-neutral-600">
                    {row.interpretation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-amber-300 bg-amber-50 p-5 text-sm text-amber-900">
          The main insight is not simply that caching is faster. The important
          finding is that retention-window size controls the memory-quality
          trade-off, and aggressive truncation can make a system look efficient
          while damaging output quality.
        </div>
      </div>
    </div>
  );
}