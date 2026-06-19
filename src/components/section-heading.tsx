import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="mb-10 max-w-3xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-cyan/80" />

          <p className="text-2xl font-semibold tracking-[-0.025em] text-cyan md:text-3xl">
            {eyebrow}
          </p>
        </div>

        <h2 className="max-w-2xl font-display text-2xl font-semibold leading-snug tracking-[-0.025em] text-white md:text-3xl">
          {title}
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-white/58">
          {description}
        </p>
      </div>
    </Reveal>
  );
}