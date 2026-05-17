import { metrics } from "@/lib/data";
import { AnimatedCounter } from "@/components/animated-counter";
import { Reveal } from "@/components/reveal";

export function Metrics() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-3 rounded-[2rem] border border-white/10 bg-white/[0.025] p-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.5rem] bg-white/[0.035] p-5"
              >
                <div className="font-display text-3xl font-semibold tracking-tight text-white">
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                </div>
                <p className="mt-2 text-sm leading-6 text-white/48">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}