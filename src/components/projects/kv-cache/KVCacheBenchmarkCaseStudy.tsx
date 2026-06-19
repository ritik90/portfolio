import KVCacheEndToEndDiagram from "./KVCacheEndToEndDiagram";
import KVCacheStrategiesDiagram from "./KVCacheStrategiesDiagram";
import KVCacheEngineDiagram from "./KVCacheEngineDiagram";
import KVCacheResultsDiagram from "./KVCacheResultsDiagram";
import KVCacheTradeoffDiagram from "./KVCacheTradeoffDiagram";

const stack = [
  "Python",
  "PyTorch",
  "Hugging Face Transformers",
  "OPT-2.7B",
  "OPT-125M",
  "CUDA",
  "KV Cache",
  "LLM Inference",
  "Statistical Testing",
  "Friedman Test",
  "Holm Correction",
  "Benchmarking",
];

const metrics = [
  {
    label: "Throughput Gain",
    value: "5.28×",
    detail:
      "Full cache achieved 34.18 tokens/s versus 6.47 tokens/s for no-cache on OPT-2.7B.",
  },
  {
    label: "Tail Latency",
    value: "158.68 → 35.22",
    detail:
      "p95 ms/token reduced significantly when moving from no-cache to full-cache decoding.",
  },
  {
    label: "KV Memory Reduction",
    value: "54.9%",
    detail:
      "sliding_256 reduced final KV memory from 177.19 MB to 80.00 MB.",
  },
  {
    label: "Quality Check",
    value: "PPL 25.83 → 26.14",
    detail:
      "sliding_512 stayed close to full-context quality on OPT-2.7B.",
  },
  {
    label: "Quality Degradation",
    value: "PPL 116.72",
    detail:
      "sliding_256 caused severe quality degradation despite strong memory savings.",
  },
  {
    label: "KVEngine Scaling",
    value: "1 / 2 / 4 reqs",
    detail:
      "Block usage scaled proportionally across tested concurrent request counts.",
  },
];

const challenges = [
  {
    title: "Speed-memory-quality trade-off",
    detail:
      "The project showed that throughput and memory alone are not enough. A cache policy that looks efficient can still be unacceptable if perplexity degrades severely.",
  },
  {
    title: "Statistically controlled benchmarking",
    detail:
      "Used repeated trials, shuffled condition order, Friedman omnibus tests, and Holm-corrected paired comparisons to make results defensible.",
  },
  {
    title: "KV cache memory accounting",
    detail:
      "Measured final KV footprint separately from peak GPU memory because peak memory includes allocator and framework effects.",
  },
  {
    title: "Sliding-window retention",
    detail:
      "Evaluated different retention windows and showed that 512-token retention had limited practical quality loss, while 256-token retention degraded quality heavily.",
  },
  {
    title: "Prototype block manager",
    detail:
      "Built KVEngine with fixed-size blocks, logical block tables, start offsets, token-accurate eviction, and a scheduler separating prefill from decode.",
  },
  {
    title: "Honest compression interpretation",
    detail:
      "Documented that int8 variants were storage-accounting experiments, not true model-facing quantised serving.",
  },
];

const lifecycle = [
  "Defined KV cache strategies: no-cache, full-cache, sliding-window, and storage-accounted compressed variants",
  "Built KVBench condition registry and benchmark execution pipeline",
  "Loaded OPT-family causal language models through Hugging Face Transformers",
  "Executed shuffled repeated trials to reduce ordering effects",
  "Measured throughput, p95 latency, peak GPU memory, and final KV cache footprint",
  "Evaluated quality using mean NLL and perplexity",
  "Applied Friedman omnibus tests and Holm-corrected paired tests",
  "Built KVEngine prototype with block-based KV memory management",
  "Implemented token-accurate sliding-window eviction using start_offset",
  "Tested KVEngine scaling across 1, 2, and 4 concurrent requests",
  "Interpreted results using speed-memory-quality trade-offs",
  "Documented limitations around int8 accounting and Hugging Face decode bridge",
];

export default function KVCacheBenchmarkCaseStudy() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-amber-300">
              LLM Systems · KV Cache · Statistical Evaluation
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Transformer KV Cache Benchmark
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              MSc dissertation project evaluating Transformer key-value caching
              strategies with KVBench, a reproducible benchmark suite, and
              KVEngine, a prototype block-based KV memory manager. The project
              studies the trade-off between throughput, tail latency, memory
              footprint, and output quality.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <InfoCard
            eyebrow="Problem"
            title="KV cache improves speed but consumes memory"
            detail="Autoregressive decoding is slow without caching because the model recomputes previous context. KV caching avoids recomputation, but cache memory grows linearly with sequence length."
          />

          <InfoCard
            eyebrow="Solution"
            title="Benchmark cache policies across speed, memory, and quality"
            detail="KVBench compares no-cache, full-cache, sliding-window, and storage-accounted compressed variants using performance, memory, and perplexity metrics."
          />

          <InfoCard
            eyebrow="Research Goal"
            title="Show why quality-aware evaluation matters"
            detail="The project demonstrates that speed-memory Pareto frontiers can be misleading when output quality is omitted."
          />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Architecture"
            title="End-to-End KVBench Benchmark Pipeline"
            description="Conditions are registered, executed in shuffled repeated trials, written to CSV files, analysed statistically, and interpreted through speed-memory-quality trade-offs."
          />
          <KVCacheEndToEndDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Cache Strategies"
            title="Evaluated KV Cache Policies"
            description="The benchmark evaluates no-cache, full-cache, sliding-window retention, and storage-accounted int8 variants while explicitly separating true model-facing quality from storage accounting."
          />
          <KVCacheStrategiesDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Prototype Engine"
            title="KVEngine Block-Based Memory Manager"
            description="KVEngine demonstrates block-based allocation, logical block tables, sub-block sliding-window eviction, prefill/decode scheduling, and Hugging Face-compatible decode bridging."
          />
          <KVCacheEngineDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Results"
            title="Benchmark Results Summary"
            description="The results show a decisive performance gap between no-cache and cached decoding, while quality is mainly driven by retention policy."
          />
          <KVCacheResultsDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Trade-off"
            title="Why Speed-Memory Pareto Alone Is Misleading"
            description="sliding_256 looks attractive on speed and memory, but its perplexity degradation makes it a risky operating point when output fidelity matters."
          />
          <KVCacheTradeoffDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Evaluation"
            title="Metrics, Statistical Testing, and Research Findings"
            description="The project used repeated-measures evaluation with performance, memory, quality, and statistical significance testing."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm font-medium uppercase tracking-wider text-amber-300">
                  {metric.label}
                </p>
                <p className="mt-3 text-4xl font-semibold">{metric.value}</p>
                <p className="mt-3 text-sm leading-6 text-neutral-300">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Lifecycle"
              title="Complete Benchmark and Systems Lifecycle"
              description="The project combines reproducible benchmarking, model evaluation, statistical methodology, and a prototype KV memory engine."
            />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="space-y-4">
              {lifecycle.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400 text-sm font-semibold text-neutral-950">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-neutral-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Challenges Solved"
            title="Key LLM Systems and Evaluation Challenges"
            description="The project required careful measurement, statistical testing, memory accounting, quality evaluation, and honest interpretation of prototype limitations."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-amber-400/20 bg-amber-400/[0.05] p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-wider text-amber-300">
            Interview Explanation Script
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            How I would explain this dissertation project
          </h2>

          <div className="mt-6 space-y-5 text-neutral-300">
            <p>
              “This project studies Transformer KV caching from an LLM systems
              perspective. KV caching speeds up autoregressive decoding by
              storing previous key and value tensors, but the cache grows with
              sequence length and consumes GPU memory.”
            </p>

            <p>
              “I built KVBench, a reproducible benchmark suite that compares
              no-cache, full-cache, sliding-window retention, and
              storage-accounted compressed variants. I measured throughput, p95
              latency, peak GPU memory, final KV cache footprint, NLL, and
              perplexity.”
            </p>

            <p>
              “The main OPT-2.7B result was that full-cache decoding achieved
              34.18 tokens per second compared with 6.47 tokens per second for
              no-cache, which is a 5.28× throughput improvement. So caching is
              clearly essential for practical decoding.”
            </p>

            <p>
              “However, the interesting part is the trade-off. sliding_256
              reduced final KV memory from 177.19 MB to 80.00 MB, but it caused
              a large perplexity degradation. sliding_512 preserved quality much
              better, with perplexity staying close to full-context decoding.”
            </p>

            <p>
              “I also built KVEngine, a prototype block-based KV memory manager.
              It uses fixed-size blocks, logical block tables, and a start_offset
              mechanism so sliding-window eviction can happen accurately even
              when the window boundary falls inside a block.”
            </p>

            <p>
              “For statistical validity, I used repeated trials, shuffled
              condition order, Friedman omnibus tests, and Holm-corrected paired
              comparisons. The project’s main conclusion is that a Pareto
              frontier based only on speed and memory can be misleading unless
              output quality is also measured.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
      <p className="text-sm font-medium uppercase tracking-wider text-amber-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
      <p className="mt-4 text-neutral-300">{detail}</p>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-neutral-300">{description}</p>
    </div>
  );
}