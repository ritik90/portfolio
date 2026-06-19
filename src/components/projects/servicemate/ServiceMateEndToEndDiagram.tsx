const sources = [
  "Service manuals",
  "User manuals",
  "Internal SOPs",
  "Telematics",
  "Mail forums",
  "Expert communication",
];

const vectorDbs = [
  "Vector DB 1",
  "Vector DB 2",
  "Vector DB 3",
  "Vector DB 4",
];

const agentTasks = [
  "Query rephrasing",
  "Brand extraction",
  "Query classification",
  "Vector DB routing",
];

export default function ServiceMateEndToEndDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1240px] text-neutral-900">
        <div className="mb-6 flex items-center justify-between border-b border-neutral-200 pb-4">
          <div>
            <h3 className="text-xl font-semibold">
              End-to-End ServiceMate AI Architecture
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              User query → agent orchestration → vector DB selection → retrieval → grounded service response
            </p>
          </div>
          <div className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium text-neutral-600">
            Agentic Multi-RAG
          </div>
        </div>

        <div className="grid grid-cols-[1fr_40px_1.2fr_40px_1.2fr_40px_1.2fr_40px_1fr] items-stretch">
          <Stage title="User Layer" subtitle="Dealer service worker">
            <Node title="Service advisor query" detail="Free-form question" />
            <ArrowDown />
            <Node title="Chat UI" detail="Conversational assistant" />
          </Stage>

          <ArrowRight />

          <Stage title="Knowledge Sources" subtitle="Authentic internal sources">
            <GroupedList title="Documents" items={sources} />
          </Stage>

          <ArrowRight />

          <Stage title="Agent Layer" subtitle="LangGraph orchestration">
            <GroupedList title="Agent Decisions" items={agentTasks} />
          </Stage>

          <ArrowRight />

          <Stage title="Retrieval Layer" subtitle="Use-case-specific stores">
            <GroupedList title="Knowledge Routing" items={vectorDbs} />
            <ArrowDown />
            <Node title="Retrieved Context" detail="Relevant chunks from selected DB" />
          </Stage>

          <ArrowRight />

          <Stage title="Response Layer" subtitle="Grounded service guidance">
            <Node title="Solution Formulation" detail="Answer from retrieved context" />
            <ArrowDown />
            <Node title="Brand-specific Response" accent />
            <ArrowDown />
            <Node title="Dealer Service Support" detail="Diagnostic / procedural help" />
          </Stage>
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-cyan-300 bg-cyan-50 px-5 py-4 text-sm text-cyan-900">
          The assistant does not directly answer from the raw query. It first
          understands the query, checks brand context, classifies the intent,
          selects the right knowledge source, retrieves context, and then
          generates the final service response.
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

function Node({
  title,
  detail,
  accent = false,
}: {
  title: string;
  detail?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border px-4 py-3 text-center shadow-sm ${
        accent ? "border-cyan-300 bg-cyan-100" : "border-neutral-200 bg-white"
      }`}
    >
      <p className="text-sm font-semibold text-neutral-900">{title}</p>
      {detail && <p className="mt-1 text-xs text-neutral-500">{detail}</p>}
    </div>
  );
}

function GroupedList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
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
    <div className="flex items-center justify-center">
      <div className="h-px w-8 bg-neutral-300" />
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