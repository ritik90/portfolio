import Link from "next/link";
import { Mail, ExternalLink, ArrowRight } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-24">
      <Reveal>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.09] via-white/[0.04] to-white/[0.02] p-8 shadow-glow backdrop-blur-2xl md:p-12">
          <div className="relative">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-violet/25 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan">
                  Contact
                </p>

                <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                  Let’s build intelligent systems that create measurable value.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-white/58">
                  Open to AI Engineer, Data Scientist, Machine Learning Engineer, GenAI Engineer,
                  and Applied Scientist roles focused on real-world AI products.
                </p>
              </div>

              <div className="grid gap-3">
                <Link
                  href={`mailto:${profile.email}`}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-white transition hover:border-cyan/35 hover:bg-white/[0.07]"
                >
                  <span className="flex items-center gap-3">
                    <Mail size={18} className="text-cyan" />
                    {profile.email}
                  </span>
                  <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </Link>

                <Link
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-white/72 transition hover:border-violet/35 hover:text-white"
                >
                  <ExternalLink size={18} className="text-cyan" />
                  LinkedIn
                </Link>

                <Link
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-white/72 transition hover:border-violet/35 hover:text-white"
                >
                  <ExternalLink size={18} className="text-cyan" />
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}