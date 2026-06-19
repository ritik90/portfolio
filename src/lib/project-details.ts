export type ArchitectureStep = {
  title: string;
  description: string;
};

export type ProjectDetail = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  overview: string;
  problem: string;
  solution: string;
  businessGoal: string;
  techStack: string[];
  architecture: ArchitectureStep[];
  workflow: string[];
  mlLifecycle: ArchitectureStep[];
  deployment: ArchitectureStep[];
  challenges: string[];
  impact: string[];
  interviewScript: string;
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "website-hyper-personalisation",
    title: "Website Hyper-Personalisation",
    subtitle: "Real-time CTA propensity prediction system",
    category: "Personalisation ML · Production AI",
    overview:
      "A production machine learning system designed to personalise website CTA experiences in real time. The system predicted a visitor’s propensity to engage with a CTA using behavioural and session-level signals, then served the prediction through a low-latency FastAPI service deployed on Google Cloud.",
    problem:
      "The website experience was largely static. Different users had different intent levels, browsing behaviour, and conversion likelihood, but the CTA experience did not adapt intelligently to those signals.",
    solution:
      "Built a real-time propensity prediction pipeline that scored users for CTA engagement and enabled personalised website decisions through a deployed ML API.",
    businessGoal:
      "Improve website engagement by showing more relevant CTA experiences to users based on predicted intent, then validate the effectiveness through A/B testing and production monitoring.",
    techStack: [
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
    ],
    architecture: [
      {
        title: "Website Visitor",
        description:
          "A user lands on the website and interacts with pages, products, CTAs, and navigation elements.",
      },
      {
        title: "Behaviour Signals",
        description:
          "Session-level and behavioural signals are captured, such as user journey, page interactions, campaign context, and CTA history.",
      },
      {
        title: "Feature Pipeline",
        description:
          "Raw interaction data is transformed into model-ready features using EDA, feature engineering, and selection.",
      },
      {
        title: "Propensity Model",
        description:
          "The model predicts the likelihood of CTA engagement using ensemble classifiers and AutoML-assisted experimentation.",
      },
      {
        title: "FastAPI Scoring Service",
        description:
          "The selected model is exposed through a Dockerised FastAPI service for low-latency real-time scoring.",
      },
      {
        title: "CTA Decision Layer",
        description:
          "The predicted propensity score is used to decide which CTA experience should be shown to the user.",
      },
      {
        title: "Personalised Experience",
        description:
          "The website renders a personalised CTA or experience variant based on the model output.",
      },
      {
        title: "A/B Testing + Monitoring",
        description:
          "User response is logged and analysed through A/B testing, model monitoring, and drift tracking.",
      },
    ],
    workflow: [
      "User lands on the website.",
      "Frontend or backend captures session-level behavioural signals.",
      "Features are generated from user behaviour, campaign context, and historical CTA interactions.",
      "A request is sent to the FastAPI scoring endpoint.",
      "The deployed model predicts CTA engagement propensity.",
      "CTA decision logic selects the most relevant experience.",
      "The selected CTA is rendered to the user.",
      "User response is logged for A/B testing, monitoring, and future improvement.",
    ],
    mlLifecycle: [
      {
        title: "Data Understanding",
        description:
          "Analysed historical user interactions, CTA responses, campaign behaviour, and engagement patterns.",
      },
      {
        title: "Feature Engineering",
        description:
          "Created behaviour-based, session-level, and campaign-related features to capture user intent.",
      },
      {
        title: "Model Experimentation",
        description:
          "Tested Random Forest, XGBoost, LightGBM, and AutoML to compare predictive performance.",
      },
      {
        title: "Model Selection",
        description:
          "Selected the strongest classifier based on offline performance, business suitability, and deployment readiness.",
      },
      {
        title: "API Deployment",
        description:
          "Packaged the model inside a Dockerised FastAPI service for real-time inference.",
      },
      {
        title: "Monitoring",
        description:
          "Used production monitoring and Vertex AI monitoring to track performance, drift, and reliability.",
      },
    ],
    deployment: [
      {
        title: "FastAPI",
        description:
          "Served the trained model through a clean REST API for real-time scoring.",
      },
      {
        title: "Docker",
        description:
          "Containerised the application to ensure reproducible deployment across environments.",
      },
      {
        title: "Google Cloud",
        description:
          "Deployed the service on Google Cloud infrastructure for scalable, low-latency inference.",
      },
      {
        title: "Vertex AI Monitoring",
        description:
          "Tracked model behaviour, performance, and drift after deployment.",
      },
      {
        title: "A/B Testing",
        description:
          "Validated whether personalised CTA decisions improved engagement compared with baseline experiences.",
      },
    ],
    challenges: [
      "Designing a real-time scoring flow with low latency.",
      "Building useful behavioural features from website interaction data.",
      "Choosing the right classifier for propensity prediction.",
      "Avoiding dependence only on offline model metrics.",
      "Validating business value through A/B testing.",
      "Monitoring production model behaviour and drift.",
    ],
    impact: [
      "Enabled real-time website personalisation instead of static CTA experiences.",
      "Converted ML predictions into a business-facing decision workflow.",
      "Created a scalable API-based serving layer for CTA propensity scoring.",
      "Validated effectiveness through A/B testing and production monitoring.",
      "Improved the maturity of ML deployment through CI/CD, monitoring, and cloud infrastructure.",
    ],
    interviewScript:
      "Website Hyper-Personalisation was a production ML system built to personalise CTA experiences in real time. The problem was that the website experience was mostly static, even though users had different intent levels and engagement patterns. I worked on a propensity prediction system that used behavioural and session-level features to estimate the likelihood of CTA engagement. I experimented with ensemble models such as Random Forest, XGBoost, and LightGBM, used AutoML to support model selection, and deployed the selected model through a Dockerised FastAPI service on Google Cloud. The prediction was used by a CTA decision layer to show a more relevant experience to the user. The system was validated using A/B testing and monitored using production monitoring and Vertex AI monitoring for drift and reliability.",
  },
];

export function getProjectBySlug(slug: string) {
  return projectDetails.find((project) => project.slug === slug);
}