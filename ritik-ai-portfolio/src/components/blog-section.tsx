import { blogPosts } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight } from "lucide-react";

export function BlogSection() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Writing"
          title="Technical writing that reinforces authority."
          description="Use this section to publish short, architecture-focused essays. Recruiters may skim projects, but hiring managers remember clear thinking."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.08}>
              <article className="glass-card group min-h-full rounded-[2rem] p-6 transition hover:border-cyan/25">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-violet/25 bg-violet/10 px-3 py-1 text-xs text-violet-100">
                    {post.tag}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-white/24 transition group-hover:text-cyan"
                  />
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.03em] text-white">
                  {post.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/54">{post.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}