import type { ArchitectureStep } from "@/lib/project-details";

type ProjectWorkflowProps = {
  workflow: string[];
  mlLifecycle: ArchitectureStep[];
  deployment: ArchitectureStep[];
  challenges: string[];
  impact: string[];
  interviewScript: string;
};

function NumberedList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item, index) => (
        <div
          key={item}
          className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-sm font-semibold text-cyan">
            {index + 1}
          </div>
          <p className="text-sm leading-6 text-white/62">{item}</p>
        </div>
      ))}
    </div>
  );
}

function StepCards({ items }: { items: ArchitectureStep[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
        >
          <h3 className="text-sm font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/52">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export function ProjectWorkflow({
  workflow,
  mlLifecycle,
  deployment,
  challenges,
  impact,
  interviewScript,
}: ProjectWorkflowProps) {
  return (
    <section className="px-4 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
            <p className="text-sm font-semibold text-cyan">Workflow</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
              End-to-end real-time flow
            </h2>
            <div className="mt-6">
              <NumberedList items={workflow} />
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
            <p className="text-sm font-semibold text-cyan">Challenges</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
              Key engineering challenges
            </h2>

            <div className="mt-5 grid gap-2">
              {challenges.map((challenge) => (
                <div
                  key={challenge}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/58"
                >
                  {challenge}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
            <p className="text-sm font-semibold text-cyan">ML Lifecycle</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
              From data to deployed model
            </h2>

            <div className="mt-6">
              <StepCards items={mlLifecycle} />
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
            <p className="text-sm font-semibold text-cyan">Deployment</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
              Production serving and validation
            </h2>

            <div className="mt-6">
              <StepCards items={deployment} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-cyan/[0.035] p-6">
              <p className="text-sm font-semibold text-cyan">Impact</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
                What this system enabled
              </h2>

              <div className="mt-5 grid gap-3">
                {impact.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-cyan/15 bg-black/15 px-4 py-3 text-sm leading-6 text-white/62"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              id="interview-script"
              className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6"
            >
              <p className="text-sm font-semibold text-cyan">
                Interview Explanation
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
                How to explain this project
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/62 md:text-base">
                {interviewScript}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}