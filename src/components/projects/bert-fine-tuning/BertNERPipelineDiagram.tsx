const entities = [
  "Vehicle issue",
  "Component",
  "Service action",
  "Symptom",
  "Customer concern",
];

const pipeline = [
  "Raw call transcript / service text",
  "Text cleaning",
  "Tokenization",
  "BIO tagging / labelled entity data",
  "BERT token classification model",
  "Entity prediction",
];

export default function BertNERPipelineDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1120px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            Named Entity Recognition Pipeline
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Token-level BERT classification for extracting structured service entities from unstructured text.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_36px_1fr_36px_1fr_36px_1fr_36px_1fr_36px_1fr] items-center">
          {pipeline.map((step, index) => (
            <div key={step} className="contents">
              <Node title={step} number={index + 1} />
              {index < pipeline.length - 1 && <ArrowRight />}
            </div>
          ))}
        </div>

        <div className="my-8 flex justify-center">
          <div className="h-10 w-px bg-neutral-300" />
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl border border-violet-300 bg-violet-50 p-6">
          <p className="text-center text-xs font-medium uppercase tracking-wider text-violet-700">
            Extracted Entities
          </p>

          <div className="mt-5 grid grid-cols-5 gap-3">
            {entities.map((entity) => (
              <div
                key={entity}
                className="rounded-2xl border border-violet-200 bg-white px-4 py-4 text-center text-sm font-semibold shadow-sm"
              >
                {entity}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-[1fr_40px_1fr] items-center">
          <FooterNode
            title="Post-processing"
            detail="Merge subword tokens, clean entity spans, remove duplicates"
          />
          <ArrowRight />
          <FooterNode
            title="Structured service insights"
            detail="Issue, component, action, symptom, and concern fields available for downstream workflows"
            accent
          />
        </div>
      </div>
    </div>
  );
}

function Node({ title, number }: { title: string; number: number }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-center shadow-sm">
      <div className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
        {number}
      </div>
      <p className="text-sm font-semibold">{title}</p>
    </div>
  );
}

function FooterNode({
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
        accent ? "border-violet-300 bg-violet-50" : "border-neutral-200 bg-white"
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
      <div className="h-px w-7 bg-neutral-300" />
      <div className="h-0 w-0 border-y-[6px] border-l-[8px] border-y-transparent border-l-neutral-300" />
    </div>
  );
}