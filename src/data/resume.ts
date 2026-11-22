export const profile = {
  name: "Vishal JC",
  title: "AI Engineer",
  location: "Bangalore, India",
  email: "ivishaljc20@gmail.com",
  phone: "+91 99447 91272",
  about:
    "AI Engineer who builds and ships production AI systems end to end — across hybrid search and retrieval, ontologies and knowledge graphs, multi-agent orchestration, and evaluation frameworks. Embeds with client teams to turn ambiguous business problems into reliable, observable systems, backed by a statistical-modeling foundation from prior work as a Decision Scientist. Thrives on hard problems and owns them from prototype to production: designs the architecture, ships the APIs, and measures quality with evaluation so every improvement is proven rather than assumed.",
};

export const marqueeWords = [
  "MULTI-AGENT ORCHESTRATION",
  "HYBRID RETRIEVAL",
  "KNOWLEDGE GRAPHS",
  "ONTOLOGY ENGINEERING",
  "RAG",
  "LLM EVALUATION",
  "PRODUCTION AI",
];

export const skillGroups = [
  { label: "Languages", items: ["Python", "SQL", "FastAPI"], accent: "cyan" },
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
    accent: "magenta",
  },
  {
    label: "Evaluation & Observability",
    items: ["DeepEval", "Langfuse"],
    accent: "lime",
  },
  {
    label: "Knowledge & Graphs",
    items: ["Neo4j", "schema.org", "TBox / ABox", "Cypher", "Ontology Design"],
    accent: "violet",
  },
  {
    label: "Cloud & Data",
    items: ["Azure", "AWS", "Databricks", "MongoDB"],
    accent: "cyan",
  },
  {
    label: "Automation & DevOps",
    items: ["Playwright", "n8n", "GitHub Actions"],
    accent: "magenta",
  },
  {
    label: "Data Science",
    items: ["Machine Learning", "EDA", "Market Mix Modeling"],
    accent: "lime",
  },
] as const;

export type ProjectVisualKind =
  | "shelf"
  | "vector"
  | "ontology"
  | "scaffold"
  | "pipeline";

export type Accent = "cyan" | "magenta" | "lime" | "violet";

export type Project = {
  channel: string;
  title: string;
  tagline: string;
  description: string;
  visual: ProjectVisualKind;
  accent: Accent;
  features: { name: string; detail: string }[];
  stack: string[];
};

export const workGroups: {
  id: string;
  org: string;
  kicker: string;
  note: string;
  projects: Project[];
}[] = [
  {
    id: "client",
    org: "Mastech Digital",
    kicker: "Client Engagement — Big-Box Retailer",
    note: "Embedded on-site as a Forward Deployed Engineer on the retailer's store and product data, shipping the core APIs and running evaluation to prove every quality gain rather than assume it.",
    projects: [
      {
        channel: "CH.01",
        title: "Search Modernization",
        tagline: "Replacing legacy lexical search with hybrid retrieval",
        description:
          "The retailer's product search ran on legacy lexical matching, so fuzzy intent queries fell apart. I built the Search API that replaced it — lexical and vector candidates fused, then reranked — and backed every relevance claim with an evaluation harness.",
        visual: "vector",
        accent: "cyan",
        features: [
          {
            name: "Hybrid Retrieval + RRF",
            detail:
              "Lexical and vector retrieval run in parallel and their rankings are fused with Reciprocal Rank Fusion, so exact-match queries and fuzzy intent queries both land well.",
          },
          {
            name: "Reranking Stage",
            detail:
              "A reranker reorders the fused candidate set against the query, pushing genuinely relevant products above merely keyword-similar ones.",
          },
          {
            name: "Prompt Evaluation Framework",
            detail:
              "Built on DeepEval to enrich product descriptions, detect hallucinations, and score retrieval quality — giving search richer catalog content to match against.",
          },
          {
            name: "Latency & Observability",
            detail:
              "Tuned the retrieval pipeline for low latency and full observability, cutting ~150 ms off search response time.",
          },
        ],
        stack: ["RRF", "Reranking", "DeepEval", "Vector Search", "FastAPI"],
      },
      {
        channel: "CH.02",
        title: "Ontology Composer",
        tagline: "Schemas and questions in, a queryable knowledge graph out",
        description:
          "A staged pipeline that turns the retailer's raw store and product data into a governed knowledge graph. It takes their existing schemas and the competency questions the graph has to answer, generates the ontology artifacts, populates the graph, then hands back an agent that can query it.",
        visual: "ontology",
        accent: "violet",
        features: [
          {
            name: "Stage 01 — Inputs",
            detail:
              "Ingests the retailer's store and product schemas alongside the competency questions the graph must be able to answer, so the ontology is designed against real queries instead of guesswork.",
          },
          {
            name: "Stage 02 — TBox Generation",
            detail:
              "Generates the artifacts that define the ontology — classes, properties, relationships, and constraints — built on schema.org vocabularies so the model stays interoperable across search and enrichment pipelines.",
          },
          {
            name: "Stage 03 — ABox Population",
            detail:
              "Maps and loads the retailer's real store and product records into the generated schema, turning a static vocabulary into a populated knowledge graph.",
          },
          {
            name: "Stage 04 — KG Query Agent",
            detail:
              "An agent sits on the finished graph and answers natural-language questions over it, so merchandising and store teams get product intelligence without writing a single Cypher query.",
          },
        ],
        stack: ["Neo4j", "schema.org", "TBox / ABox", "LangGraph", "Cypher"],
      },
    ],
  },
  {
    id: "inhouse",
    org: "Mastech Digital",
    kicker: "In-House Products",
    note: "Built for Mastech itself — platforms our own engineers and delivery teams run on, rather than client deliverables.",
    projects: [
      {
        channel: "CH.03",
        title: "Agent Building Platform",
        tagline: "Prompt to running agent, without the blank file",
        description:
          "An internal platform that lets our developers build and deploy AI agents without starting from scratch. They describe what the agent should do and pick the tools it needs, and the platform generates a working scaffold ready to extend — with evaluation wired in from the start.",
        visual: "scaffold",
        accent: "magenta",
        features: [
          {
            name: "Prompt-Driven Spec",
            detail:
              "Developers describe the agent they want in plain language and select the tools it should have; the platform turns that into a concrete agent specification.",
          },
          {
            name: "Scaffold Generation",
            detail:
              "Generates a runnable project scaffold — agent definition, tool wiring, and config — so teams start from working code instead of boilerplate.",
          },
          {
            name: "Tool Registry",
            detail:
              "A shared catalogue of tools agents can be wired to, so capabilities get reused across teams rather than rebuilt for every new agent.",
          },
          {
            name: "Evaluation Workflows",
            detail:
              "Every generated agent ships with evaluation workflows that validate its quality before it goes anywhere near production.",
          },
        ],
        stack: ["LangGraph", "Codegen", "Tool Registry", "Evals", "FastAPI"],
      },
      {
        channel: "CH.04",
        title: "Nexus AI",
        tagline: "Autonomous IT incident resolution",
        description:
          "Agentic AI microservices on Azure AKS wired into ServiceNow through Azure Service Bus, automating the incident lifecycle end to end and cutting manual effort by 60%.",
        visual: "pipeline",
        accent: "cyan",
        features: [
          {
            name: "Five-Stage Multi-Agent Pipeline",
            detail:
              "Each incident flows through specialised agents from classification to resolution, with no human in the loop on the routine path.",
          },
          {
            name: "Immutable Audit Trails",
            detail:
              "Every prompt, tool call, RAG retrieval, and resolution action is captured for governance and traceability.",
          },
          {
            name: "Semantic Ticket Intelligence",
            detail:
              "OpenAI and LangChain handle classification, summarization, and automated response generation across the ticket queue.",
          },
        ],
        stack: ["Azure AKS", "LangChain", "ServiceNow", "Service Bus", "OpenAI"],
      },
    ],
  },
  {
    id: "personal",
    org: "Personal Build",
    kicker: "Built On My Own Time",
    note: "A GenAI platform for retail store teams, built end to end — backend, RAG, vision, and frontend.",
    projects: [
      {
        channel: "CH.05",
        title: "RetailPilot",
        tagline: "AI employee superpowers for the retail floor",
        description:
          "Gives store associates and managers five superpowers — so the floor team plans smarter shifts, catches stock gaps early, and answers policy questions without hunting through a binder.",
        visual: "shelf",
        accent: "lime",
        features: [
          {
            name: "Store Copilot",
            detail:
              "RAG chat over store policies, SOPs, and the product catalog — associates ask in plain language and get the answer with its source instead of escalating to a manager.",
          },
          {
            name: "Shelf Vision Scanner",
            detail:
              "Upload a shelf photo and GPT-4o vision flags stock gaps, misplaced items, and planogram compliance issues.",
          },
          {
            name: "AI Task Prioritizer",
            detail:
              "Reorders an associate's shift task list against footfall and stock signals, with a one-line reason attached to every task.",
          },
          {
            name: "Training Simulator",
            detail:
              "Roleplays difficult and upselling customers so staff can practise handling them, then returns a scored feedback report.",
          },
          {
            name: "Manager Daily Briefing",
            detail:
              "An AI-generated morning summary over a live KPI dashboard, so a manager walks in already knowing where the day needs attention.",
          },
        ],
        stack: ["GPT-4o", "RAG", "MongoDB", "FastAPI", "Vision", "React"],
      },
    ],
  },
];

export const experience = [
  {
    role: "AI Engineer",
    company: "Mastech Digital Pvt Ltd",
    location: "Bangalore",
    period: "Nov 2024 — Present",
    points: [
      "Embedded on-site as a Forward Deployed Engineer for a big-box retailer, shipping the Search API that replaced their legacy lexical search with hybrid retrieval, RRF, and reranking — cutting latency by ~150 ms.",
      "Built the Ontology Composer for the same client: it takes their store and product schemas plus competency questions, generates the TBox artifacts, populates the ABox, and exposes an agent that queries the resulting knowledge graph.",
      "Built an in-house agent-building platform where Mastech developers describe an agent and the tools it needs, and get a generated, evaluation-ready scaffold back.",
      "Designed and deployed Nexus AI in-house — agentic microservices on Azure AKS for autonomous IT incident resolution, cutting manual effort by 60%.",
      "Created prompt evaluation frameworks with DeepEval to detect hallucinations and score retrieval quality across these systems.",
    ],
  },
  {
    role: "Decision Scientist Trainee",
    company: "MuSigma",
    location: "Bangalore",
    period: "Jul 2024 — Nov 2024",
    points: [
      "Optimized multi-channel marketing spend for a major big-box retail client through Market Mix Modeling.",
      "Built regression-based forecasting models in Pandas and Scikit-learn, validated with p-value and t-tests.",
      "Delivered ROI, channel-performance, and spend-efficiency insights through visualization dashboards.",
    ],
  },
];

export const education = [
  {
    degree: "B.E, Computer Science and Engineering",
    school: "Sri Venkateswara College of Engineering",
    period: "2020 — 2024",
    detail: "CGPA 8.56",
  },
  {
    degree: "Higher Secondary Certificate",
    school: "Vani Vidyalaya Senior Secondary and Junior College",
    period: "2019 — 2020",
    detail: "CGPA 8.4",
  },
];

export const certifications = [
  "Databricks Certified Associate — GenAI Engineer",
  "Oracle Cloud Infrastructure 2025 Certified GenAI Professional",
  "Claude Certified Architect",
];
