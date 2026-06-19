import { education } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <section id="education" className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
        eyebrow="Education"
        title="Data science and computer science foundation."
        description="My education combines advanced data science training at Trinity College Dublin with a computer science engineering foundation from Thapar."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * 0.08}>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan/25 hover:bg-white/[0.045]">
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-3">
                    <img
                      src={item.logo}
                      alt={item.school}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {item.degree}
                    </h3>

                    <p className="mt-2 text-base font-medium text-cyan">
                      {item.school}
                    </p>

                    <p className="mt-1 text-sm text-white/48">
                      {item.location} · {item.period}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-white/58">
                  {item.focus}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}