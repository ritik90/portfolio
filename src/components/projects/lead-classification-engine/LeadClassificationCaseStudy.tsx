import LeadClassificationEndToEndDiagram from "./LeadClassificationEndToEndDiagram";
import LeadClassificationScoringWorkflowDiagram from "./LeadClassificationScoringWorkflowDiagram";
import LeadClassificationMLOpsDiagram from "./LeadClassificationMLOpsDiagram";
import LeadClassificationMonitoringDiagram from "./LeadClassificationMonitoringDiagram";
import LeadClassificationExamplesDiagram from "./LeadClassificationExamplesDiagram";

const stack = [
  "Python",
  "Databricks",
  "MLflow",
  "Docker",
  "REST API",
  "SQL",
  "XGBoost",
  "LightGBM",
  "Scikit-learn",
  "SHAP",
  "Batch Scoring",
  "Real-Time Scoring",
  "Model Monitoring",
];

const metrics = [
  {
    label: "Monthly Revenue Impact",
    value: "€1.5M+",
    detail: "Incremental monthly revenue generated through prioritised lead follow-up.",
  },
  {
    label: "Dealer Scale",
    value: "200+",
    detail: "Dealers adopted the lead scoring and prioritisation workflow.",
  },
  {
    label: "HOT Lead Follow-up",
    value: "30% → 90%",
    detail: "Improved HOT lead follow-up within 2 hours.",
  },
  {
    label: "Lead Segmentation",
    value: "KS / Deciles",
    detail: "Used KS charts and decile analysis to define HOT, WARM, and COLD bands.",
  },
  {
    label: "Model Explainability",
    value: "SHAP",
    detail: "Explained model decisions and key drivers behind lead scores.",
  },
  {
    label: "Scoring Modes",
    value: "Batch + Real-Time",
    detail: "Daily 7 AM batch refresh and live scoring for new enquiries.",
  },
];

const challenges = [
  {
    title: "Different models for different use cases",
    detail:
      "XGBoost and LightGBM often performed best, but the final model was selected separately for each use case after hyperparameter tuning and model comparison.",
  },
  {
    title: "Real-time and batch scoring together",
    detail:
      "The real-time model scored fresh enquiries immediately, while the batch model refreshed daily at 7 AM using additional follow-up behaviour features.",
  },
  {
    title: "Probability to business action",
    detail:
      "Raw probabilities were converted into HOT, WARM, and COLD lead buckets using KS charts, decile analysis, and observed conversion rates.",
  },
  {
    title: "Feature engineering across lead journeys",
    detail:
      "Features included enquiry source, location, vehicle model, customer profile, dealer, time since enquiry, cyclic time features, and follow-up behaviour.",
  },
  {
    title: "Explainability for dealer trust",
    detail:
      "SHAP was used to explain why a lead was scored high or low, helping business teams understand and trust the prioritisation logic.",
  },
  {
    title: "Production monitoring",
    detail:
      "Monitoring covered model performance, data quality, feature drift, scoring reliability, API latency, business KPIs, and follow-up effectiveness.",
  },
];

const lifecycle = [
  "Collected customer enquiry data from multiple enquiry channels",
  "Created lead-level features such as source, location, vehicle model, customer profile, dealer, time since enquiry, and cyclic time features",
  "Built separate real-time and batch modelling workflows",
  "Tested multiple model families including embedding-based approaches, XGBoost, LightGBM, and use-case-specific models",
  "Performed model tuning and hyperparameter optimisation",
  "Selected the best model per use case based on performance and business suitability",
  "Generated customer purchase probability scores",
  "Used KS charts and decile analysis to convert probability into HOT, WARM, and COLD lead bands",
  "Served predictions through REST APIs and daily batch refreshes",
  "Used SHAP to explain model decisions",
  "Monitored model, data, system, and business KPIs",
  "Enabled dealers to prioritise follow-ups and improve conversion outcomes",
];

export default function LeadClassificationCaseStudy() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-emerald-300">
              ML Scoring · MLOps · Business Impact
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Lead Classification Engine
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              A production lead scoring system that predicts customer purchase
              probability across enquiry channels, segments leads into HOT,
              WARM, and COLD using KS/decile analysis, and helps dealers
              prioritise follow-ups through real-time and daily batch scoring.
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
            title="Dealers could not prioritise high-conversion leads"
            detail="Incoming enquiries had different purchase intent levels, but dealer teams often treated leads similarly, causing high-intent customers to miss timely follow-up."
          />

          <InfoCard
            eyebrow="Solution"
            title="Probability-based lead scoring engine"
            detail="The system predicts purchase probability, converts scores into HOT/WARM/COLD bands using KS and decile analysis, and pushes priority signals to dealer workflows."
          />

          <InfoCard
            eyebrow="Business Goal"
            title="Increase conversion through faster follow-up"
            detail="The goal was to identify high-intent leads early, improve follow-up speed, and increase revenue by helping dealers focus on the right customers first."
          />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Architecture"
            title="End-to-End Lead Scoring Architecture"
            description="From customer enquiry data to feature engineering, model experimentation, probability scoring, lead segmentation, dealer action, explainability, and monitoring."
          />
          <LeadClassificationEndToEndDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Scoring Workflow"
            title="Real-Time and Batch Scoring Workflow"
            description="The system used two scoring paths: real-time scoring for fresh enquiries and daily 7 AM batch scoring with additional follow-up behaviour features."
          />
          <LeadClassificationScoringWorkflowDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="MLOps"
            title="Model Experimentation, Registry, and Deployment"
            description="Different models were tested and tuned per use case, with MLflow and Databricks supporting tracking, registry, deployment, and monitoring."
          />
          <LeadClassificationMLOpsDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Examples"
            title="Lead Scoring Examples"
            description="Examples showing how probability scores are converted into HOT, WARM, and COLD lead actions using KS/decile-based thresholds."
          />
          <LeadClassificationExamplesDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Monitoring"
            title="Model, Data, System, and Business Monitoring"
            description="The system monitored not only model metrics, but also feature drift, data freshness, API reliability, dealer follow-up behaviour, and conversion outcomes."
          />
          <LeadClassificationMonitoringDiagram />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Evaluation"
            title="Evaluation Metrics and Business Impact"
            description="The model was evaluated using ML metrics, ranking quality, KS charts, decile-level conversion, and downstream dealer follow-up performance."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm font-medium uppercase tracking-wider text-emerald-300">
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
              title="Complete ML-to-Business Lifecycle"
              description="The project covered data preparation, feature engineering, model tuning, probability scoring, business segmentation, deployment, explainability, and monitoring."
            />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="space-y-4">
              {lifecycle.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-semibold text-neutral-950">
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
            title="Key ML, MLOps, and Business Challenges"
            description="The engine was not only a classifier. It connected model scoring with dealer operations, explainability, SLA tracking, and revenue outcomes."
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
        <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.05] p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-300">
            Interview Explanation Script
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            How I would explain the Lead Classification Engine
          </h2>

          <div className="mt-6 space-y-5 text-neutral-300">
            <p>
              “This project was a production lead scoring engine built to help
              dealers prioritise customer enquiries based on purchase
              probability. Instead of treating all enquiries equally, the system
              predicted which customers were most likely to convert and helped
              dealer teams focus on those leads first.”
            </p>

            <p>
              “I worked on both real-time and batch scoring workflows. The
              real-time model scored fresh enquiries immediately using features
              available at enquiry creation, while the batch model refreshed
              every day at 7 AM and used additional follow-up behaviour features
              such as whether follow-up happened within 2 hours or 4 hours.”
            </p>

            <p>
              “The feature set included enquiry source, location, vehicle model,
              customer profile, dealer, time since enquiry, time-related cyclic
              features, and follow-up activity features for batch scoring.”
            </p>

            <p>
              “We tested multiple approaches, including embedding-based models
              and tree-based models. XGBoost and LightGBM often performed best,
              but the final model was selected per use case after
              hyperparameter tuning, model comparison, and validation.”
            </p>

            <p>
              “The model output was a purchase probability. To make it usable
              for business teams, we used KS charts and decile analysis to
              define HOT, WARM, and COLD lead bands. For example, the top
              deciles with much higher conversion rates became HOT leads, the
              next strong segment became WARM, and the remaining leads were
              classified as COLD.”
            </p>

            <p>
              “For evaluation, we used standard ML metrics like AUC, precision,
              recall, F1, and ranking metrics, but the most useful business
              evaluation was the KS chart and decile-level conversion analysis
              because the goal was to rank and prioritise leads effectively.”
            </p>

            <p>
              “We also used SHAP for explainability so business teams could
              understand why a lead was scored high or low. The system was
              monitored across model, data, system, and business KPIs, including
              follow-up performance and conversion impact.”
            </p>

            <p>
              “The project generated more than €1.5M in monthly incremental
              revenue, scaled to 200+ dealers, and improved HOT lead follow-up
              within 2 hours from 30% to 90%.”
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
      <p className="text-sm font-medium uppercase tracking-wider text-emerald-300">
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
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-neutral-300">{description}</p>
    </div>
  );
}