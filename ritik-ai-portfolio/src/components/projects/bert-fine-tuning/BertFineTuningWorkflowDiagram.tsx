const steps = [
  "Raw service-domain text",
  "Text cleaning",
  "BERT tokenizer",
  "Input IDs + attention masks",
  "Domain-specific MLM",
  "Fine-tuned BERT encoder",
  "Classification head",
  "Sentiment prediction",
  "Evaluation",
  "Error analysis",
];

export default function BertFineTuningWorkflowDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1180px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            BERT Domain Adaptation and Sentiment Fine-Tuning Workflow
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Continued pretraining with MLM followed by supervised sentiment classification.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {steps.slice(0, 5).map((step, index) => (
            <FlowNode key={step} number={index + 1} title={step} />
          ))}
        </div>

        <div className="my-6 flex justify-center">
          <div className="rounded-2xl border-2 border-violet-300 bg-violet-50 px-8 py-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-violet-700">
              Pretrained BERT + Domain-Specific MLM
            </p>
            <h4 className="mt-1 text-lg font-semibold">
              BERT learns service-domain language patterns
            </h4>
            <p className="mt-2 max-w-2xl text-sm text-neutral-600">
              Masked tokens are predicted from service/customer text so the model
              adapts to complaints, symptoms, service terms, product references,
              and support language.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {steps.slice(5).map((step, index) => (
            <FlowNode key={step} number={index + 6} title={step} />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-5">
          <div className="grid grid-cols-[1fr_40px_1fr_40px_1fr] items-center">
            <FooterNode title="Evaluation results" detail="Accuracy, F1, precision, recall" />
            <ArrowRight />
            <FooterNode title="Error analysis" detail="Misclassified complaints and confusing examples" />
            <ArrowRight />
            <FooterNode title="Model improvement loop" detail="Data fixes, label refinement, retraining" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowNode({ number, title }: { number: number; title: string }) {
  return (
    <div className="relative rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-center shadow-sm">
      <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
        {number}
      </div>
      <p className="text-sm font-semibold text-neutral-900">{title}</p>
    </div>
  );
}

function FooterNode({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-center shadow-sm">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-xs text-neutral-500">{detail}</p>
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