import HyperpersonalisationEndToEndDiagram from "./HyperpersonalisationEndToEndDiagram";
import HyperpersonalisationWorkflowDiagram from "./HyperpersonalisationWorkflowDiagram";
import HyperpersonalisationExamplesDiagram from "./HyperpersonalisationExamplesDiagram";

const stack = [
  "Python",
  "FastAPI",
  "Docker",
  "Google Cloud",
  "Cloud Run",
  "Vertex AI",
  "SQL",
  "Random Forest",
  "XGBoost",
  "LightGBM",
  "AutoML",
  "A/B Testing",
  "Monitoring",
];

const challenges = [
  {
    title: "Real-time prediction requirement",
    detail:
      "Converted offline behavioural insights into a low-latency FastAPI scoring service suitable for live website personalisation.",
  },
  {
    title: "Behaviour-to-feature mapping",
    detail:
      "Engineered visitor, session, campaign, page-depth, repeat-visit, and CTA-history features from clickstream and engagement data.",
  },
  {
    title: "Model selection for production",
    detail:
      "Compared Random Forest, XGBoost, LightGBM, and AutoML models, then selected the best model based on performance and serving suitability.",
  },
  {
    title: "Personalisation without hardcoding",
    detail:
      "Separated prediction from CTA decisioning, allowing propensity scores to drive flexible CTA choices instead of fixed website rules.",
  },
  {
    title: "Business validation",
    detail:
      "Used A/B testing to validate whether personalised CTAs improved engagement compared with a default CTA experience.",
  },
  {
    title: "Production monitoring",
    detail:
      "Tracked model behaviour, drift, latency, reliability, and engagement feedback using monitoring workflows on Google Cloud / Vertex AI.",
  },
];

const lifecycle = [
  "Historical CTA and website behaviour data collected",
  "EDA performed to understand engagement patterns",
  "Session, campaign, behavioural, and CTA-history features engineered",
  "Training dataset prepared from historical labelled interactions",
  "Multiple ML models trained and compared",
  "Best propensity model selected for real-time scoring",
  "Model wrapped inside a Dockerised FastAPI service",
  "Service deployed on Google Cloud Run",
  "Website frontend calls the scoring API during active sessions",
  "CTA decision layer selects the most relevant CTA",
  "A/B testing validates uplift",
  "Monitoring and feedback loop improve future iterations",
];

export default function HyperpersonalisationCaseStudy() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
              Machine Learning · Real-Time Personalisation · MLOps
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Website Hyper-Personalisation
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              A real-time CTA propensity prediction system that personalises website call-to-action experiences using session-level behaviour, stable client-level history, UTM campaign signals, historical CTA engagement, and predicted conversion intent.
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
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
              Problem
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Same CTA for every visitor
            </h2>
            <p className="mt-4 text-neutral-300">
              A static website CTA treats a high-intent returning visitor and a low-intent first-time visitor the same, reducing relevance and engagement.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
              Solution
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Real-time propensity scoring
            </h2>
            <p className="mt-4 text-neutral-300">
              A machine learning model predicts the visitor’s CTA engagement probability during the session, allowing the decision layer to choose a relevant CTA.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
              Business Goal
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Improve engagement quality
            </h2>
            <p className="mt-4 text-neutral-300">
              Increase CTA engagement and conversion intent by matching the website experience to visitor behaviour instead of relying on generic journeys.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Architecture"
            title="End-to-End System Architecture"
            description="From website behaviour capture to feature engineering, model experimentation, real-time serving, CTA decisioning, A/B testing, and monitoring."
          />
          <HyperpersonalisationEndToEndDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Real-Time Flow"
            title="Inference Workflow"
            description="How a live visitor session is converted into features, scored by the deployed model, and mapped to the most suitable CTA experience."
          />
          <HyperpersonalisationWorkflowDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Examples"
            title="How Different Visitors Receive Different CTAs"
            description="Three practical scenarios showing how raw behaviour becomes features, predictions, CTA decisions, and outcomes."
          />
          <HyperpersonalisationExamplesDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="ML Lifecycle"
              title="From Historical Data to Production Feedback"
              description="The project follows a complete ML lifecycle: analysis, feature engineering, modelling, deployment, experimentation, and monitoring."
            />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="space-y-4">
              {lifecycle.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-semibold text-neutral-950">
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
            eyebrow="Deployment"
            title="Production Deployment"
            description="The selected model was packaged as a Dockerised FastAPI service and deployed on Google Cloud Run for scalable, low-latency real-time scoring."
          />

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Model Artifact",
                detail:
                  "Best-performing propensity model selected after experimentation.",
              },
              {
                title: "FastAPI Service",
                detail:
                  "Exposed a scoring endpoint that receives session, behaviour, and UTM features, then returns CTA propensity with threshold-based CTA routing.",
              },
              {
                title: "Docker Container",
                detail:
                  "Packaged model, preprocessing logic, and API into a reproducible container.",
              },
              {
                title: "Cloud Run",
                detail:
                  "Deployed as a scalable service for website-triggered real-time inference with predefined CTA decision thresholds.",
              },
            ].map((item) => (
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
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Challenges Solved"
            title="Key Engineering and ML Challenges"
            description="The project was not just model training. It solved the full problem of turning behavioural data into production-ready website personalisation."
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
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
            Interview Explanation Script
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            How I would explain this project in an interview
          </h2>

          <div className="mt-6 space-y-5 text-neutral-300">
            <p>
              “This project was built to personalise website CTAs in real time. Instead of showing the same CTA to every visitor, I used behavioural and session-level data to predict how likely a user is to engage with a CTA.”
            </p>

            <p>
              “I started by analysing historical website behaviour, CTA clicks, UTM campaign data, traffic source, session-level activity, client-level history, and engagement patterns. We used session ID to track the current visit because it changes every session, and client ID to connect behaviour across multiple sessions because it remains stable for the same visitor. From this, I engineered features like page depth, dwell time, repeated sessions, UTM source, UTM medium, UTM campaign, CTA history, product interest, and session engagement.”
            </p>

            <p>
              “I experimented with Random Forest, XGBoost, LightGBM, and AutoML models, then selected the best model based not only on accuracy but also on production suitability and inference performance.”
            </p>

            <p>
              “The selected model was exposed through a Dockerised FastAPI service and deployed on Google Cloud Run. During a website session, the frontend captures signals, sends them to the API, receives a propensity score, and the CTA decision layer maps that score to a relevant CTA.”
            </p>

            <p>
              “For example, a high-propensity user may see a conversion-focused CTA like ‘Book Test Ride’, a medium-propensity user may see an educational CTA like ‘Compare Models’, and a low-propensity user may see a softer CTA like ‘Learn More’.”
            </p>

            <p>
              “Finally, I validated the system through A/B testing and monitored model drift, latency, reliability, and business KPIs using Google Cloud and Vertex AI monitoring workflows.”
            </p>
          </div>
        </div>
      </section>
    </main>
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
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-neutral-300">{description}</p>
    </div>
  );
}