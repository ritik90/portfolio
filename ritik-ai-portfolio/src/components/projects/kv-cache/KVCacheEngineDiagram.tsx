const managerParts = [
  "Fixed-size physical blocks",
  "Logical block tables",
  "Per-request sequence state",
  "start_offset tracking",
  "Token-accurate eviction",
];

const schedulerParts = [
  "Separate prefill and decode",
  "Capture active request snapshot",
  "Avoid same-step prefill + decode",
  "Track concurrent requests",
];

const bridgeParts = [
  "Materialise contiguous KV tensors",
  "Hugging Face-compatible past state",
  "Runnable with standard Transformers",
  "Native paged attention not implemented",
];

export default function KVCacheEngineDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1160px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            KVEngine Prototype Architecture
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Block-based KV manager, scheduler, and Hugging Face decode bridge for correct cache accounting and eviction behaviour.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_44px_1fr_44px_1fr] items-stretch">
          <GroupedList
            title="Block-Based KV Manager"
            subtitle="Memory accounting and eviction"
            items={managerParts}
          />
          <ArrowRight />
          <GroupedList
            title="Scheduler"
            subtitle="Request phase control"
            items={schedulerParts}
          />
          <ArrowRight />
          <GroupedList
            title="Decode Bridge"
            subtitle="HF-compatible execution"
            items={bridgeParts}
            accent
          />
        </div>

        <div className="mt-8 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
          <p className="text-sm font-semibold text-neutral-900">
            Sub-block sliding-window eviction
          </p>

          <div className="mt-5 grid grid-cols-[1fr_1fr_1fr_1fr] gap-3">
            {["Block 0", "Block 1", "Block 2", "Block 3"].map((block, index) => (
              <div
                key={block}
                className={`rounded-2xl border p-5 text-center text-sm font-semibold ${
                  index === 0
                    ? "border-neutral-200 bg-neutral-200 text-neutral-500"
                    : "border-amber-300 bg-amber-50 text-neutral-900"
                }`}
              >
                {block}
                <p className="mt-2 text-xs font-normal">
                  {index === 0 ? "Old tokens ignored/freed" : "Retained window"}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-amber-300 bg-white p-4 text-sm text-neutral-700">
            <span className="font-semibold text-neutral-900">start_offset</span>{" "}
            allows the retained logical window to begin inside a physical block,
            so eviction does not need to align with block boundaries.
          </div>
        </div>
      </div>
    </div>
  );
}

function GroupedList({
  title,
  subtitle,
  items,
  accent = false,
}: {
  title: string;
  subtitle: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border p-5 shadow-sm ${
        accent ? "border-amber-300 bg-amber-50" : "border-neutral-200 bg-neutral-50"
      }`}
    >
      <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>
      <p className="text-xs text-neutral-500">{subtitle}</p>

      <div className="mt-5 space-y-3">
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
      <div className="h-px w-8 bg-neutral-300" />
      <div className="h-0 w-0 border-y-[6px] border-l-[8px] border-y-transparent border-l-neutral-300" />
    </div>
  );
}