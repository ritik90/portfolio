export const profile = {
  name: "Ritik Saxena",
  role: "AI Engineer · Data Scientist",
  location: "Dublin, Ireland",
  email: "ritiksaxena2009@gmail.com",
  linkedin: "https://linkedin.com/in/ritik-saxena-6aa925176",
  github: "https://github.com/ritik90",
  resume: "/Ritik_Saxena_Resume.pdf",
};

export const logos = {
  trinity: "/logos/trinity.jpg",
  thapar: "/logos/thapar.jpg",
  tvs: "/logos/tvs.webp",
  azure: "/logos/azure.png",
  gcp: "/logos/gcp.png",
  databricks: "/logos/databricks.png",
  mlflow: "/logos/mlflow.png",
};

export const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const metrics = [
  {
    value: 3,
    suffix: "+",
    label: "Years building production AI systems",
  },
  {
    value: 1.5,
    prefix: "€",
    suffix: "M+",
    label: "Monthly incremental revenue generated",
  },
  {
    value: 200,
    suffix: "+",
    label: "Dealers impacted by ML systems",
  },
  {
    value: 96,
    suffix: "%",
    label: "BERT sentiment model accuracy",
  },
];

export const education = [
  {
    degree: "MSc Data Science",
    school: "Trinity College Dublin",
    location: "Dublin, Ireland",
    period: "Sept 2025 — Aug 2026",
    logo: logos.trinity,
    focus:
      "Advanced AI, machine learning, analytics, and data-driven innovation.",
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Thapar Institute of Engineering & Technology",
    location: "Punjab, India",
    period: "Jul 2018 — Aug 2022",
    logo: logos.thapar,
    focus:
      "Computer science foundations, software engineering, data structures, algorithms, and applied computing.",
  },
];

export const projects = [
  {
    title: "ServiceMate AI",
    slug: "servicemate-ai",
    subtitle: "Agentic multi-RAG assistant for service advisors",
    category: "Agentic RAG",
    description:
      "A generalized chatbot built to assist dealership service workers by understanding free-form service queries, identifying brand context, routing to the right knowledge source, retrieving relevant documents, and generating contextual service guidance from trusted internal sources.",
    impact:
      "Reduced dependency on scattered manuals and expert escalation by routing free-form service queries to the right knowledge source through LangGraph-based orchestration.",
    metrics: [
    "LangGraph orchestration",
    "Brand-aware retrieval",
    "Grounded RAG evaluation",
    ],
    stack: [
      "LangGraph",
      "LangChain",
      "GPT-4",
      "GPT-4o mini",
      "Vector Databases",
      "Databricks UC",
      "Azure CosmosDB",
      "Chainlit",
      "Azure App Service",
      "Python",
    ],
    challenges: [
    "Routing free-form service queries to the right knowledge source",
    "Handling missing brand context before retrieval",
    "Reducing hallucinations through retrieval-grounded responses and fallback paths",
    ],
    architecture: [
      "User query",
      "Query rephrasing",
      "Brand extraction",
      "Query classification",
      "Vector DB routing",
      "Context retrieval",
      "Response generation",
    ],
  },
  {
    title: "Lead Classification Engine",
    slug: "lead-classification-engine",
    subtitle: "Revenue-driving ML scoring system",
    category: "MLOps + Business Impact",
    description:
        "A real-time and batch lead scoring engine that predicts customer purchase probability across enquiry channels, segments leads into HOT, WARM, and COLD using KS/decile analysis, and supports dealer follow-up prioritisation.",
    impact:
        "Generated €1.5M+ monthly incremental revenue, scaled to 200+ dealers, and improved HOT lead follow-up within 2 hours from 30% to 90%.",
    metrics: ["€1.5M+ monthly revenue", "200+ dealers", "30% → 90% follow-up"],
    stack: [
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
    ],
    challenges: [
        "Selecting different best-performing models for different business use cases",
        "Combining real-time scoring with daily batch scoring at 7 AM",
        "Using KS charts, deciles, and SHAP explainability to convert probabilities into actionable dealer follow-up decisions",
    ],
    architecture: [
        "Customer enquiry",
        "Feature engineering",
        "Model experimentation",
        "Probability score",
        "KS decile bands",
        "HOT/WARM/COLD",
        "Dealer follow-up",
    ],
    },
  {
    title: "Website Hyper-Personalisation",
    slug: "website-hyper-personalisation",
    subtitle: "Real-time propensity prediction system",
    category: "Personalisation ML",
    description:
      "A real-time ML system predicting user propensity for CTA engagement using session-level behaviour, client-level history, UTM parameters, ensemble models, FastAPI deployment, Docker, Google Cloud, and production monitoring.",
    impact:
      "Improved real-time website engagement through statistically validated A/B testing and scalable low-latency scoring infrastructure.",
    metrics: ["Real-time scoring", "A/B tested", "GCP deployment"],
    stack: [
      "Python",
      "FastAPI",
      "Docker",
      "Google Cloud",
      "Vertex AI",
      "Random Forest",
      "XGBoost",
      "LightGBM",
      "SQL",
    ],
    challenges: [
      "Predicting real-time CTA propensity with low latency",
      "Using session ID and client ID to combine current-session intent with returning-user history",
      "Deploying a scalable containerized scoring service on Google Cloud",
    ],
    architecture: [
      "Website event",
      "Session + client signals",
      "Feature pipeline",
      "Propensity model",
      "FastAPI service",
      "CTA decision",
      "A/B validation",
    ],
  },
  {
    title: "Fine-Tuned BERT NLP Pipeline",
    slug: "fine-tuned-bert-nlp-pipeline",
    subtitle: "Domain-specific sentiment + NER",
    category: "NLP Systems",
    description:
      "A BERT-based NLP pipeline trained on domain-specific service data for sentiment analysis, entity extraction, customer clustering, and support prioritization.",
    impact:
      "Reached 96% sentiment accuracy, 94% NER F1-score, and improved service follow-up efficiency by an estimated 25%.",
    metrics: ["200GB+ domain data", "96% accuracy", "94% NER F1"],
    stack: [
      "BERT",
      "Hugging Face",
      "PyTorch",
      "Scikit-learn",
      "Python",
      "Transformers",
    ],
    challenges: [
      "Pretraining on large domain-specific text",
      "Extracting entities from noisy call transcripts",
      "Turning unstructured customer interactions into structured insights",
    ],
    architecture: [
      "Raw service data",
      "MLM pretraining",
      "Fine-tuning",
      "Sentiment model",
      "NER model",
      "Business insights",
    ],
  },
  {
    title: "Transformer KV Cache Benchmark",
    slug: "transformer-kv-cache-benchmark",
    subtitle: "LLM inference systems + statistical evaluation",
    category: "LLM Systems",
    description:
        "An MSc dissertation project evaluating Transformer key-value caching strategies using KVBench, a reproducible benchmark suite, and KVEngine, a prototype block-based KV memory manager with scheduler and Hugging Face decode bridge.",
    impact:
        "Showed that full KV caching improved OPT-2.7B throughput from 6.47 to 34.18 tokens/sec, while sliding-window retention reduced KV memory but could significantly degrade output quality if quality metrics were ignored.",
    metrics: [
        "5.28× throughput gain",
        "54.9% KV memory reduction",
        "Friedman + Holm tests",
    ],
    stack: [
        "Python",
        "PyTorch",
        "Hugging Face",
        "Transformers",
        "OPT-2.7B",
        "OPT-125M",
        "CUDA",
        "Statistical Testing",
        "KV Cache",
        "LLM Inference",
    ],
    challenges: [
        "Benchmarking KV cache strategies across speed, latency, memory, and output quality",
        "Building a prototype block-based KV memory manager with token-accurate sliding-window eviction",
        "Using statistical tests to show why speed-memory Pareto frontiers are misleading without quality metrics",
    ],
    architecture: [
        "Condition registry",
        "Model loading",
        "Shuffled trials",
        "CSV outputs",
        "Statistical analysis",
        "KVEngine prototype",
        "Pareto interpretation",
    ],
    },
    {
      title: "Student Hub Marketplace",
      slug: "student-hub-marketplace",
      subtitle: "Full-stack student marketplace app",
      category: "Full-Stack Product",
      description:
        "A deployed student-to-student marketplace platform for buying, selling, renting, and sharing student-focused items such as laptops, rooms, notes, and campus essentials with verified college email access.",
      impact:
        "Built and deployed a production-style marketplace with student-first onboarding, authentication, listing discovery, and a clean responsive UI.",
      metrics: ["Live Vercel app", "Marketplace UX", "Auth flow"],
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Authentication",
        "Vercel",
        "Responsive UI",
      ],
      challenges: [
        "Designing a student-first marketplace experience",
        "Building a clean authentication and onboarding flow",
        "Creating a deployed full-stack product with listing discovery",
      ],
      architecture: [
        "Landing page",
        "Login / signup",
        "User verification",
        "Marketplace listings",
        "Buyer / seller flow",
        "Vercel deployment",
      ],
    },
];

export const experiences = [
  {
    role: "Data Scientist 2",
    company: "TVS Motor Company",
    period: "Oct 2024 — Aug 2025",
    location: "Bengaluru, India",
    summary:
      "Built agentic RAG systems, fine-tuned NLP models, deployed LLM workflows, and designed production-grade GenAI systems.",
    bullets: [
      "Built a multi-agent RAG chatbot using LangGraph, Gemini, GPT-4o, vector databases, Chainlit, and Azure App Service.",
      "Integrated Databricks UC Vector Store and Azure CosmosDB for contextual document retrieval.",
      "Fine-tuned BERT pipelines for sentiment analysis and NER across customer interaction data.",
    ],
  },
  {
    role: "Data Scientist",
    company: "TVS Motor Company",
    period: "Aug 2022 — Sept 2024",
    location: "Bengaluru, India",
    summary:
      "Built revenue-driving ML systems, MLOps pipelines, model monitoring, personalization engines, and low-latency APIs.",
    bullets: [
      "Designed the Lead Classification Engine generating €1.5M+ monthly incremental revenue.",
      "Scaled adoption to 200+ dealers and improved HOT lead follow-up from 30% to 90%.",
      "Built production ML pipelines with MLflow, Databricks, FastAPI, Docker, CI/CD, Vertex AI, and monitoring.",
    ],
  },
];

export const skillGroups = [
  {
    title: "GenAI / LLMs",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Prompt Engineering",
      "Gemini",
      "GPT-4o",
      "BERT",
      "Llama",
    ],
  },
  {
    title: "ML / Deep Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
      "Transformers",
      "NLP",
      "SHAP",
    ],
  },
  {
    title: "MLOps / Backend",
    skills: [
      "MLflow",
      "FastAPI",
      "Docker",
      "CI/CD",
      "REST APIs",
      "Evidently",
      "Monitoring",
    ],
  },
  {
    title: "Cloud / Data",
    skills: [
      "Azure",
      "GCP",
      "Databricks",
      "Vertex AI",
      "BigQuery",
      "CosmosDB",
      "MongoDB",
    ],
  },
];

export const blogPosts = [
  {
    title: "Designing Multi-Agent RAG Systems That Recruiters Actually Understand",
    tag: "GenAI Architecture",
    description:
      "How to explain agent orchestration, retrieval quality, evals, and production constraints in a portfolio case study.",
  },
  {
    title: "From ML Model to Revenue Engine",
    tag: "Applied ML",
    description:
      "A practical breakdown of how lead scoring systems connect model performance to sales outcomes.",
  },
  {
    title: "Fine-Tuning BERT for Domain-Specific Customer Intelligence",
    tag: "NLP",
    description:
      "Lessons from adapting transformer models to service conversations, sentiment, and entity extraction.",
  },
];