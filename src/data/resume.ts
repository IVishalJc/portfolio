export const profile = {
  name: "Vishal JC",
  title: "AI Engineer",
  location: "Bangalore, India",
  email: "ivishaljc20@gmail.com",
  phone: "+91 99447 91272",
  about:
    "AI Engineer who builds and ships production AI systems end to end — across hybrid search and retrieval, ontologies and knowledge graphs, multi-agent orchestration, and evaluation frameworks. Embeds with client teams to turn ambiguous business problems into reliable, observable systems, backed by a statistical-modeling foundation from prior work as a Decision Scientist. Thrives on hard problems and owns them from prototype to production: designs the architecture, ships the APIs, and measures quality with evaluation so every improvement is proven rather than assumed. Part software engineer, part data scientist.",
};

export const skillGroups = [
  { label: "Languages", items: ["Python", "SQL", "FastAPI"] },
  {
    label: "Agentic AI & LLMs",
    items: [
      "LangGraph",
      "LangChain",
      "Agno",
      "OpenAI",
      "RAG",
      "Multi-Agent Orchestration",
      "Prompt Engineering",
    ],
  },
  { label: "Evaluation & Observability", items: ["DeepEval", "Langfuse"] },
  { label: "Cloud & Data", items: ["Azure", "AWS", "Databricks", "MongoDB", "Neo4j"] },
  { label: "Automation & DevOps", items: ["Playwright", "n8n", "GitHub Actions"] },
  { label: "Data Science", items: ["Machine Learning", "EDA", "Market Mix Modeling"] },
];

export const experience = [
  {
    role: "AI Engineer",
    company: "Mastech Digital Pvt Ltd, Bangalore",
    period: "Nov 2024 – Present",
    summary:
      "Embedded on-site as a Forward Deployed Engineer on a search modernization engagement for a major retail platform, shipping core APIs across three tracks and running evaluation to validate quality.",
    projects: [
      {
        title: "Track 1 — Search API: Hybrid Retrieval & Reranking",
        points: [
          "Built the Search API that replaced the client's legacy lexical search, combining lexical and vector retrieval with Reciprocal Rank Fusion (RRF) and a reranking stage for more relevant results.",
          "Created a prompt evaluation framework (DeepEval) to enrich product descriptions, detect hallucinations, and score retrieval quality.",
          "Optimized the retrieval pipeline for low latency and observability, cutting search latency by ~150 ms.",
        ],
      },
      {
        title: "Track 2 — Ontology Composer",
        points: [
          "Built an ontology composer on schema.org vocabularies to model products, attributes, and relationships in a consistent, machine-readable schema shared by search and enrichment pipelines.",
          "Developed Knowledge Graph APIs exposing entities, relationships, and product intelligence to improve retrieval accuracy and explainability.",
        ],
      },
      {
        title: "Track 3 — Agent-Building Platform",
        points: [
          "Helped build an agent-building platform letting the client's developers create and deploy their own AI agents, with evaluation workflows to validate agent quality.",
        ],
      },
    ],
  },
  {
    role: "Nexus AI — Autonomous IT Incident Resolution Platform",
    company: "Mastech Digital Pvt Ltd, Bangalore",
    period: "",
    summary:
      "Designed and deployed agentic AI microservices on Azure AKS, integrated with ServiceNow via Azure Service Bus, automating the incident lifecycle through a five-stage multi-agent pipeline.",
    projects: [
      {
        title: "Autonomous Incident Resolution",
        points: [
          "Automated the incident lifecycle through a five-stage multi-agent pipeline, cutting manual effort by 60%.",
          "Implemented immutable audit trails capturing prompts, tool calls, RAG retrievals, and resolution actions for governance and traceability.",
          "Applied OpenAI and LangChain for semantic ticket classification, summarization, and automated response generation.",
        ],
      },
    ],
  },
  {
    role: "Decision Scientist Trainee",
    company: "MuSigma, Bangalore",
    period: "Jul 2024 – Nov 2024",
    summary:
      "Optimized multi-channel marketing spend for a major big-box retail client through Market Mix Modeling, backed by exploratory analysis of trends, seasonality, and correlations.",
    projects: [
      {
        title: "Market Mix Modeling",
        points: [
          "Built regression-based forecasting models in Pandas and Scikit-learn, validated with p-value and t-tests.",
          "Delivered ROI, channel-performance, and spend-efficiency insights through visualization dashboards.",
        ],
      },
    ],
  },
];

export const education = [
  {
    degree: "B.E, Computer Science and Engineering",
    school: "Sri Venkateswara College of Engineering",
    period: "2020 – 2024",
    detail: "CGPA: 8.56",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Vani Vidyalaya Senior Secondary and Junior College",
    period: "2019 – 2020",
    detail: "CGPA: 8.4",
  },
];

export const certifications = [
  "Databricks Certified Associate — GenAI Engineer",
  "Oracle Cloud Infrastructure 2025 Certified GenAI Professional",
  "Claude Certified Architect",
];
