const stages = [
  {
    title: "Customer / Service Text",
    detail: "Complaints, feedback, transcripts, service notes",
  },
  {
    title: "BERT Embeddings",
    detail: "Contextual representation of each interaction",
  },
  {
    title: "Feature Representation",
    detail: "Embedding vectors prepared for grouping",
  },
  {
    title: "Clustering",
    detail: "Group similar issue descriptions",
  },
  {
    title: "Similar Issue Groups",
    detail: "Repeated complaints and common patterns",
  },
  {
    title: "Issue Theme Identification",
    detail: "Battery, vibration, service delay, advisor experience",
  },
  {
    title: "Follow-up Prioritisation",
    detail: "Identify customers needing faster attention",
  },
  {
    title: "Service Team Action",
    detail: "Route, prioritise, resolve, and monitor",
  },
];

export default function BertClusteringDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1180px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            Clustering and Issue Intelligence Workflow
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            BERT embeddings convert service text into issue groups and workflow prioritisation signals.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {stages.slice(0, 4).map((stage, index) => (
            <StageCard
              key={stage.title}
              number={index + 1}
              title={stage.title}
              detail={stage.detail}
            />
          ))}
        </div>

        <div className="my-6 flex justify-center">
          <div className="h-8 w-px bg-neutral-300" />
        </div>

        <div className="grid grid-cols-4 gap-5">
          {stages.slice(4).map((stage, index) => (
            <StageCard
              key={stage.title}
              number={index + 5}
              title={stage.title}
              detail={stage.detail}
              accent={index >= 2}
            />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-violet-300 bg-violet-50 p-5 text-center">
          <p className="text-sm font-semibold text-violet-900">
            Output: recurring issue themes, similar complaint groups, customer
            prioritisation signals, and service team routing support.
          </p>
        </div>
      </div>
    </div>
  );
}

function StageCard({
  number,
  title,
  detail,
  accent = false,
}: {
  number: number;
  title: string;
  detail: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 text-center shadow-sm ${
        accent ? "border-violet-300 bg-violet-50" : "border-neutral-200 bg-neutral-50"
      }`}
    >
      <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
        {number}
      </div>
      <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>
      <p className="mt-2 text-xs leading-5 text-neutral-500">{detail}</p>
    </div>
  );
}