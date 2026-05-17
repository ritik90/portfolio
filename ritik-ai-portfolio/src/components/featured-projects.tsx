import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function FeaturedProjects() {
  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
            eyebrow="Featured Projects"
            title="Selected AI systems and ML products."
            description="A curated set of projects that demonstrate my ability to design architectures, solve technical challenges, deploy production workflows, and deliver measurable outcomes."
        />

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}