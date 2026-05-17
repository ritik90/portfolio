import BertFineTuningEndToEndDiagram from "./BertFineTuningEndToEndDiagram";
import BertFineTuningWorkflowDiagram from "./BertFineTuningWorkflowDiagram";
import BertNERPipelineDiagram from "./BertNERPipelineDiagram";
import BertClusteringDiagram from "./BertClusteringDiagram";
import BertSampleExamplesDiagram from "./BertSampleExamplesDiagram";

const stack = [
  "Python",
  "PyTorch",
  "Hugging Face Transformers",
  "BERT",
  "Scikit-learn",
  "NLP",
  "NER",
  "Sentiment Analysis",
  "Text Classification",
  "Clustering",
  "Tokenization",
  "Embeddings",
  "Pandas",
  "NumPy",
];

const metrics = [
  {
    label: "Domain Corpus",
    value: "200GB+",
    detail: "Service-domain text used for continued BERT pretraining",
  },
  {
    label: "Sentiment Accuracy",
    value: "96%",
    detail: "Fine-tuned BERT sentiment classification model",
  },
  {
    label: "NER Training Data",
    value: "10,000+",
    detail: "Call recordings / interaction records used for entity modelling",
  },
  {
    label: "NER F1-score",
    value: "94%",
    detail: "Entity extraction performance across service-domain labels",
  },
  {
    label: "Follow-up Efficiency",
    value: "25%",
    detail: "Improvement through clustering and prioritisation signals",
  },
  {
    label: "Tailored Follow-ups",
    value: "15%",
    detail: "Faster follow-ups using structured NLP insights",
  },
];

const challenges = [
  {
    title: "Domain mismatch in generic BERT",
    detail:
      "Generic BERT does not naturally understand service-specific language, complaint patterns, product terms, symptoms, and operational vocabulary.",
  },
  {
    title: "Noisy customer/service text",
    detail:
      "Handled spelling variation, transcript-style text, incomplete phrases, mixed issue descriptions, and inconsistent formatting.",
  },
  {
    title: "Multiple NLP tasks from one pipeline",
    detail:
      "Designed the system to support sentiment classification, named entity extraction, issue grouping, and service intelligence outputs.",
  },
  {
    title: "Entity extraction from unstructured text",
    detail:
      "Built a token classification pipeline to extract entities such as components, symptoms, service actions, vehicle issues, and concerns.",
  },
  {
    title: "Turning NLP into business action",
    detail:
      "Converted model outputs into service workflow signals such as prioritised follow-up, issue themes, and customer concern understanding.",
  },
  {
    title: "Evaluation beyond accuracy",
    detail:
      "Used accuracy, precision, recall, F1-score, and qualitative error analysis to improve the pipeline across task types.",
  },
];

const lifecycle = [
  "Large-scale service/customer text data collected",
  "Text cleaning, normalisation, tokenisation, and label preparation performed",
  "BERT tokenizer used to create input IDs and attention masks",
  "Domain adaptation performed using Masked Language Modeling on service-domain corpus",
  "Fine-tuned BERT for supervised sentiment classification",
  "Built BERT token classification model for NER",
  "Generated embeddings for customer/service interaction clustering",
  "Evaluated sentiment and NER using accuracy, precision, recall, F1-score, and error analysis",
  "Grouped similar customer issues into service themes",
  "Used outputs for follow-up prioritisation, issue understanding, and service intelligence",
];

export default function BertFineTuningCaseStudy() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
              NLP · BERT Fine-Tuning · Service Intelligence
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Fine-Tuned BERT NLP Pipeline
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              A domain-specific NLP system built by adapting BERT on large-scale
              service and customer interaction data for sentiment classification,
              named entity recognition, issue clustering, and service workflow
              intelligence.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <InfoCard
            eyebrow="Problem"
            title="Generic NLP models missed service-domain context"
            detail="Customer complaints, call transcripts, service notes, and feedback text contain domain-specific vocabulary that generic NLP models often fail to interpret correctly."
          />

          <InfoCard
            eyebrow="Solution"
            title="Domain-adapted BERT pipeline"
            detail="BERT was adapted using Masked Language Modeling on service-domain text, then fine-tuned for sentiment classification, NER, and issue intelligence workflows."
          />

          <InfoCard
            eyebrow="Business Goal"
            title="Improve service understanding and follow-up"
            detail="The system helped identify customer sentiment, extract service-related entities, group similar issues, and support faster, more relevant customer follow-ups."
          />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Architecture"
            title="End-to-End NLP Architecture"
            description="From raw service text to preprocessing, BERT domain adaptation, downstream NLP tasks, evaluation, and service intelligence outputs."
          />
          <BertFineTuningEndToEndDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Fine-Tuning"
            title="BERT Training and Fine-Tuning Workflow"
            description="How raw service-domain text was cleaned, tokenized, used for Masked Language Modeling, and fine-tuned for sentiment classification."
          />
          <BertFineTuningWorkflowDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="NER"
            title="Named Entity Recognition Pipeline"
            description="How service transcripts were converted into token-level labels and used to extract vehicle issues, components, symptoms, actions, and customer concerns."
          />
          <BertNERPipelineDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Clustering"
            title="Issue Intelligence Workflow"
            description="How BERT embeddings were used to group similar customer/service issues and generate prioritisation signals for service teams."
          />
          <BertClusteringDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Examples"
            title="Sample NLP Outputs"
            description="Examples showing how raw service text becomes sentiment, extracted entities, issue clusters, and business actions."
          />
          <BertSampleExamplesDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Evaluation"
            title="Model Metrics and Business Impact"
            description="The pipeline was evaluated using ML metrics and service workflow improvements."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm font-medium uppercase tracking-wider text-violet-300">
                  {metric.label}
                </p>
                <p className="mt-3 text-4xl font-semibold">{metric.value}</p>
                <p className="mt-3 text-sm leading-6 text-neutral-300">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Lifecycle"
              title="Complete NLP Development Lifecycle"
              description="The project covered data preparation, domain adaptation, supervised fine-tuning, NER, clustering, evaluation, and service workflow usage."
            />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="space-y-4">
              {lifecycle.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-400 text-sm font-semibold text-neutral-950">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-neutral-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Challenges Solved"
            title="Key NLP and Engineering Challenges"
            description="The project required more than model fine-tuning. It involved adapting BERT to domain language and converting unstructured text into operational intelligence."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-violet-400/20 bg-violet-400/[0.05] p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-wider text-violet-300">
            Interview Explanation Script
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            How I would explain this project in an interview
          </h2>

          <div className="mt-6 space-y-5 text-neutral-300">
            <p>
              “This project focused on building a domain-specific NLP pipeline
              for service and customer interaction data. The goal was to make
              BERT understand service-domain language better and use it for
              downstream tasks like sentiment classification, named entity
              recognition, issue clustering, and service intelligence.”
            </p>

            <p>
              “I worked with large-scale service text data, customer complaints,
              call transcripts, feedback text, and service notes. The first step
              was cleaning the data, normalising text, preparing labels, and
              tokenizing inputs using the BERT tokenizer.”
            </p>

            <p>
              “Because generic BERT is trained on general language, I performed
              continued pretraining using Masked Language Modeling on a large
              service-domain corpus. This helped the model learn domain-specific
              vocabulary, symptoms, components, complaint patterns, and customer
              issue language.”
            </p>

            <p>
              “After domain adaptation, I fine-tuned BERT for sentiment
              classification and achieved around 96% accuracy. I also built a
              token classification pipeline for NER using labelled call and
              interaction records, achieving around 94% F1-score.”
            </p>

            <p>
              “For service intelligence, I used BERT embeddings to cluster
              similar customer issues. These clusters helped identify recurring
              issue themes and improved follow-up prioritisation by around 25%,
              while tailored follow-ups became around 15% faster.”
            </p>

            <p>
              “The main value of the project was that it converted unstructured
              service text into structured operational signals: sentiment,
              extracted entities, issue themes, and prioritised follow-up
              actions.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
      <p className="text-sm font-medium uppercase tracking-wider text-violet-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
      <p className="mt-4 text-neutral-300">{detail}</p>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-neutral-300">{description}</p>
    </div>
  );
}