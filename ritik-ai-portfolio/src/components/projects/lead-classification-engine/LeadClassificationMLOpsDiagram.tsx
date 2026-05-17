const experimentation = [
  "Embedding models",
  "XGBoost",
  "LightGBM",
  "Scikit-learn models",
  "Use-case-specific models",
];

const mlopsSteps = [
  {
    title: "Experiment Tracking",
    detail: "Track models, features, parameters, metrics, and training runs",
    tool: "MLflow",
  },
  {
    title: "Hyperparameter Tuning",
    detail: "Tune each candidate model and compare validation performance",
    tool: "Python / MLflow",
  },
  {
    title: "Model Selection",
    detail: "Choose the best model separately for each business use case",
    tool: "Validation + KS",
  },
  {
    title: "Model Registry",
    detail: "Register champion models and manage production versions",
    tool: "MLflow Registry",
  },
  {
    title: "Deployment",
    detail: "Serve through REST API and batch scoring pipelines",
    tool: "Docker / Databricks",
  },
  {
    title: "Monitoring",
    detail: "Track data, model, system, and business KPIs",
    tool: "Dashboards / Alerts",
  },
];

export default function LeadClassificationMLOpsDiagram() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
      <div className="min-w-[1180px] text-neutral-900">
        <div className="mb-8 border-b border-neutral-200 pb-4">
          <h3 className="text-xl font-semibold">
            MLOps Lifecycle: Experimentation to Deployment
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Model development was tracked, tuned, registered, deployed, and monitored using production MLOps workflows.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_44px_1.2fr] items-stretch">
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
            <h4 className="text-sm font-semibold text-neutral-900">
              Candidate Models
            </h4>
            <p className="mt-1 text-xs text-neutral-500">
              Different models were tested and the best model was selected per use case.
            </p>

            <div className="mt-5 space-y-3">
              {experimentation.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-800 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <ArrowRight />

          <div className="grid grid-cols-3 gap-4">
            {mlopsSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
                    {index + 1}
                  </div>
                  <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-500">
                    {step.tool}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-neutral-900">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs leading-5 text-neutral-500">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-emerald-300 bg-emerald-50 p-5 text-sm text-emerald-900">
          XGBoost and LightGBM often came out strongest, but the final champion
          model was chosen separately for each business use case after tuning,
          validation, KS/decile analysis, and production suitability checks.
        </div>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-px w-8 bg-neutral-300" />
      <div className="h-0 w-0 border-y-[6px] border-l-[8px] border-y-transparent border-l-neutral-300" />
    </div>
  );
}