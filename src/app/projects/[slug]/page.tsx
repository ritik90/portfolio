import HyperpersonalisationCaseStudy from "@/components/projects/hyperpersonalisation/HyperpersonalisationCaseStudy";
import BertFineTuningCaseStudy from "@/components/projects/bert-fine-tuning/BertFineTuningCaseStudy";
import ServiceMateCaseStudy from "@/components/projects/servicemate/ServiceMateCaseStudy";
import LeadClassificationCaseStudy from "@/components/projects/lead-classification-engine/LeadClassificationCaseStudy";
import KVCacheBenchmarkCaseStudy from "@/components/projects/kv-cache/KVCacheBenchmarkCaseStudy";
import StudentHubMarketplaceCaseStudy from "@/components/projects/student-hub/StudentHubMarketplaceCaseStudy";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  if (slug === "servicemate-ai") {
    return <ServiceMateCaseStudy />;
  }

  if (slug === "lead-classification-engine") {
    return <LeadClassificationCaseStudy />;
  }

  if (slug === "website-hyper-personalisation") {
    return <HyperpersonalisationCaseStudy />;
  }

  if (slug === "fine-tuned-bert-nlp-pipeline") {
    return <BertFineTuningCaseStudy />;
  }

  if (slug === "transformer-kv-cache-benchmark") {
    return <KVCacheBenchmarkCaseStudy />;
  }

  if (slug === "student-hub-marketplace") {
    return <StudentHubMarketplaceCaseStudy />;
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold">Project not found</h1>
      </div>
    </main>
  );
}