import {
  Boxes,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  KeyRound,
  Layers3,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";
import type { Project, Skill, TimelineItem } from "@/types/portfolio";

export const profile = {
  name: "Boney Mechery",
  role: "Java Backend Developer",
  tagline:
    "I build reliable backend platforms, scalable APIs, and cloud-ready systems with the discipline of enterprise Java and the pace of modern product engineering.",
  github: "https://github.com/Boney77",
  githubUser: "Boney77",
  linkedin: "https://www.linkedin.com/in/boney-babu-mechery/",
  email: "mailto:boney.mechery@example.com",
  resume: "/resume.pdf",
};

export const skills: Skill[] = [
  {
    name: "Java",
    icon: Code2,
    group: "Backend",
    description: "Strong typed services, concurrency, clean domain models.",
  },
  {
    name: "Spring Boot",
    icon: Layers3,
    group: "Backend",
    description: "REST APIs, dependency injection, production service patterns.",
  },
  {
    name: "REST APIs",
    icon: Network,
    group: "Backend",
    description: "Versioned contracts, resilient error handling, clean resources.",
  },
  {
    name: "Spring Security",
    icon: LockKeyhole,
    group: "Backend",
    description: "Authentication, authorization, JWT flows, secure endpoints.",
  },
  {
    name: "MySQL",
    icon: Database,
    group: "Database",
    description: "Relational modeling, indexing, transactional workloads.",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    group: "Database",
    description: "Analytics-friendly SQL, constraints, performance tuning.",
  },
  {
    name: "Redis",
    icon: Cpu,
    group: "Database",
    description: "Caching, queues, rate limits, flash-sale protection.",
  },
  {
    name: "Docker",
    icon: Boxes,
    group: "Cloud",
    description: "Containerized services and reproducible local environments.",
  },
  {
    name: "AWS",
    icon: Cloud,
    group: "Cloud",
    description: "Cloud deployment, managed services, scalable architecture.",
  },
  {
    name: "React",
    icon: Braces,
    group: "Frontend",
    description: "Interactive dashboards and full-stack product interfaces.",
  },
];

export const projects: Project[] = [
  {
    title: "Flash Sale System",
    category: "High-Concurrency Backend",
    description:
      "A flash-sale backend engineered for burst traffic, inventory consistency, queue-based order flow, and scalable API surfaces.",
    techStack: ["Java", "Spring Boot", "Redis", "MySQL", "Docker", "REST APIs"],
    highlights: [
      "Redis-backed throttling and inventory reservation",
      "Idempotent order APIs for retry-safe checkout",
      "Queue-ready architecture for peak traffic isolation",
    ],
    accent: "from-cyan-400 to-blue-500",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fraud Detection System",
    category: "AI/ML Monitoring Platform",
    description:
      "Transaction monitoring platform with anomaly scoring, reviewer workflows, and analytics surfaces for suspicious activity.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "React", "AWS", "REST APIs"],
    highlights: [
      "Risk scoring pipeline for transaction streams",
      "Analytics dashboard for fraud patterns",
      "Auditable decision trail for investigations",
    ],
    accent: "from-emerald-300 to-teal-500",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DevConnect",
    category: "Developer Collaboration",
    description:
      "A full-stack collaboration platform with secure authentication, developer profiles, posts, and social interactions.",
    techStack: ["Spring Security", "Java", "React", "MySQL", "Docker", "JWT"],
    highlights: [
      "JWT-secured authentication and protected routes",
      "Profile and post domain design",
      "Clean REST contracts for frontend integration",
    ],
    accent: "from-violet-300 to-fuchsia-500",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Smart Expense Tracker",
    category: "Full-Stack Analytics",
    description:
      "Expense management app with categorized spending, visual analytics, and budget-friendly workflows for everyday finance.",
    techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "Charts", "REST APIs"],
    highlights: [
      "Category analytics and monthly trend summaries",
      "Full-stack CRUD flows with validation",
      "Dashboard-first experience for fast insights",
    ],
    accent: "from-amber-200 to-rose-400",
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const timeline: TimelineItem[] = [
  {
    title: "Flash Sale System",
    period: "Scalability milestone",
    description:
      "Designed for contention-heavy inventory flows where correctness, throughput, and graceful degradation matter.",
    metrics: ["Concurrency control", "Redis caching", "Inventory integrity"],
  },
  {
    title: "Fraud Detection System",
    period: "Analytics milestone",
    description:
      "Combined backend services, monitoring concepts, and dashboard thinking into a platform for transaction risk visibility.",
    metrics: ["Risk scoring", "Event monitoring", "Data dashboards"],
  },
  {
    title: "DevConnect",
    period: "Security milestone",
    description:
      "Built collaboration primitives around authentication, profiles, posts, and maintainable API boundaries.",
    metrics: ["Spring Security", "JWT auth", "Domain modeling"],
  },
  {
    title: "Smart Expense Tracker",
    period: "Product milestone",
    description:
      "Delivered a practical full-stack product experience that turns transactional records into clear visual insight.",
    metrics: ["Charts", "CRUD flows", "PostgreSQL"],
  },
];

export const heroMetrics = [
  { label: "Backend Focus", value: "Java" },
  { label: "API Style", value: "REST" },
  { label: "Cloud Ready", value: "AWS" },
  { label: "Core Stack", value: "Spring" },
];

export const architecturePillars = [
  {
    title: "Reliability First",
    icon: ShieldCheck,
    description: "Defensive API design, secure defaults, and predictable failure handling.",
  },
  {
    title: "Scalable Systems",
    icon: Server,
    description: "Cache-aware services and data models built for real traffic.",
  },
  {
    title: "Product Thinking",
    icon: KeyRound,
    description: "Backend architecture shaped around clear user and business workflows.",
  },
];
