import { About } from "@/components/about";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { Education } from "@/components/education";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProjectShowcase } from "@/components/project-showcase";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <ProjectShowcase />
      <ExperienceTimeline />
      <Education />
      <TechStack />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}