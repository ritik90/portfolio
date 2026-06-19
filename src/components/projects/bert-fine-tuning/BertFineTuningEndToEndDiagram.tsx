const textSources = [
  "Service records",
  "Customer complaints",
  "Call transcripts",
  "Feedback text",
  "Service notes",
];

const preprocessing = [
  "Remove noise",
  "Normalize text",
  "Handle missing values",
  "Tokenization",
  "Label preparation",
];

const domainAdaptation = [
  "Masked Language Modeling",
  "Continued pretraining",
  "Domain-specific embeddings",
];

const tasks = [
  "Sentiment classification",
  "Named Entity Recognition",
  "Issue clustering",
];

const evaluation = [
  "Accuracy",
  "Precision",
  "Recall",
  "F1-score",
  "Error analysis",
];

const outputs = [
  "Sentiment prediction",
  "Extracted service entities",
  "Grouped issue themes",
  "Follow-up prioritisation",
];

const businessLayer = [
  "Faster follow-ups",
  "Better issue understanding",
  "Improved workflow efficiency",
];

export default function BertFineTuningEndToEndDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1360px] text-neutral-900">
        <div className="mb-6 flex items-center justify-between border-b border-neutral-200 pb-4">
          <div>
            <h3 className="text-xl font-semibold">
              End-to-End Domain-Specific BERT NLP Architecture
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Raw service data → BERT domain adaptation → NLP tasks → evaluation → service intelligence
            </p>
          </div>

          <div className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium text-neutral-600">
            Fine-Tuned BERT NLP Pipeline
          </div>
        </div>

        <div className="grid grid-cols-[1fr_34px_1fr_34px_1fr_34px_1fr_34px_1fr_34px_1fr_34px_1fr] items-stretch">
          <Stage title="Raw Data" subtitle="Unstructured service text">
            <Node title="Raw Service Data" />
            <ArrowDown />
            <GroupedList title="Text Sources" items={textSources} />
          </Stage>

          <ArrowRight />

          <Stage title="Preprocessing" subtitle="Text preparation">
            <GroupedList title="Cleaning Steps" items={preprocessing} />
          </Stage>

          <ArrowRight />

          <Stage title="Domain Adaptation" subtitle="Service language learning">
            <Node title="Pretrained BERT" detail="General language model" />
            <ArrowDown />
            <GroupedList title="Adaptation" items={domainAdaptation} />
          </Stage>

          <ArrowRight />

          <Stage title="Fine-Tuning" subtitle="Downstream NLP tasks">
            <GroupedList title="Task Heads" items={tasks} />
          </Stage>

          <ArrowRight />

          <Stage title="Evaluation" subtitle="Model quality checks">
            <GroupedList title="Metrics" items={evaluation} />
          </Stage>

          <ArrowRight />

          <Stage title="Outputs" subtitle="Structured NLP signals">
            <GroupedList title="Business Outputs" items={outputs} />
          </Stage>

          <ArrowRight />

          <Stage title="Service Intelligence" subtitle="Operational impact">
            <GroupedList title="Workflow Value" items={businessLayer} accent />
          </Stage>
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-violet-300 bg-violet-50 px-5 py-4 text-sm text-violet-900">
          The pipeline converts noisy customer/service text into structured
          intelligence: sentiment, extracted entities, recurring issue themes,
          and follow-up prioritisation signals.
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

function Node({ title, detail }: { title: string; detail?: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-center shadow-sm">
      <p className="text-sm font-semibold text-neutral-900">{title}</p>
      {detail && <p className="mt-1 text-xs text-neutral-500">{detail}</p>}
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
      className={`rounded-xl border p-4 shadow-sm ${
        accent
          ? "border-violet-300 bg-violet-50"
          : "border-neutral-200 bg-white"
      }`}
    >
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
    <div className="flex items-center justify-center px-1">
      <div className="h-px w-6 bg-neutral-300" />
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