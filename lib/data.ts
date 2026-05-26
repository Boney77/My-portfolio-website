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
    slug: "orderflow-flash-sale-inventory-reservation-engine",
    title: "OrderFlow — Flash Sale Inventory Reservation Engine",
    category: "Distributed Systems + High Concurrency + Full Stack Engineering",
    description:
      "Engineered a high-concurrency distributed backend system designed to handle massive flash-sale traffic with guaranteed inventory consistency and zero overselling.",
    techStack: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "React",
      "Docker",
      "WebSockets",
      "k6 Load Testing",
    ],
    highlights: [
      "Redis atomic inventory decrement using Lua scripts",
      "RabbitMQ asynchronous order processing",
      "WebSocket-powered real-time monitoring dashboards",
      "Dockerized distributed infrastructure",
    ],
    accent: "from-cyan-300 to-blue-500",
    liveDemoUrl: "https://order-flow-flash-sale-inventory-res-orcin.vercel.app/",
    githubUrl:
      "https://github.com/Boney77/OrderFlow---Flash-Sale-Inventory-Reservation-Engine",
    coverImage: "/projects/project4.png",
    featured: true,
    topFeatured: true,
    role: "Solo Project",
    deployment: "Frontend on Vercel, distributed backend services containerized with Docker",
    status: "Completed",
    highlightTags: [
      "Distributed Systems",
      "High Concurrency",
      "Redis",
      "RabbitMQ",
      "Spring Boot",
      "Real-Time Systems",
      "Docker",
    ],
    achievements: [
      "Processed 10,000+ concurrent purchase requests while allowing only 100 successful purchases for 100 available units.",
      "Achieved 100% zero overselling accuracy during flash-sale load testing.",
      "Built production-style distributed inventory reservation workflow.",
    ],
    metrics: [
      { label: "Concurrent Requests", value: "10,000+" },
      { label: "Overselling", value: "Zero" },
      { label: "Architecture", value: "Redis + RabbitMQ" },
    ],
    coreProblem:
      "Preventing overselling during massive concurrent purchase spikes in flash-sale environments.",
    technicalHighlights: [
      "Implemented Redis atomic Lua scripting for race-condition prevention",
      "Built event-driven asynchronous architecture with RabbitMQ",
      "Integrated real-time WebSocket monitoring dashboards",
      "Performed concurrency and stress testing using k6",
    ],
  },
  {
    slug: "ai-powered-insurance-fraud-detection-system",
    title: "AI-Powered Insurance Fraud Detection System",
    category: "AI + Full Stack + Backend Engineering",
    description:
      "Built a modern full-stack fraud detection platform that analyzes insurance claim patterns in real time using intelligent rule-based risk scoring.",
    techStack: [
      "Java 17",
      "Spring Boot 3",
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Railway",
      "Vercel",
      "ConcurrentHashMap",
    ],
    highlights: [
      "Real-time insurance fraud risk analysis",
      "Intelligent rule-based scoring engine",
      "High-performance backend using ConcurrentHashMap",
      "Fast API communication between frontend and backend",
    ],
    accent: "from-emerald-300 to-teal-500",
    liveDemoUrl: "https://ai-based-insurance-fraud-detection.vercel.app/",
    githubUrl: "https://github.com/Boney77/AI-based-Insurance-fraud-detection",
    coverImage: "/projects/project3.png",
    featured: true,
    role: "Solo Project",
    deployment: "Frontend on Vercel, backend on Railway",
    status: "Completed",
    highlightTags: ["AI", "Fraud Detection", "Full Stack", "Spring Boot", "React"],
    achievements: [
      "Designed separate frontend and backend deployments for a scalable full-stack architecture.",
      "Implemented real-time fraud scoring without requiring a database.",
      "Built responsive production-style UI with a modern dashboard experience.",
    ],
  },
  {
    slug: "devpulse-ai-powered-developer-dashboard",
    title: "DevPulse AI — AI Powered Developer Dashboard",
    category: "AI + Frontend Engineering + Developer Tools",
    description:
      "Built a modern AI-powered developer productivity dashboard that centralizes GitHub analytics, LeetCode progress, productivity tracking, weather intelligence, and developer notes.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
      "Vite",
    ],
    highlights: [
      "GitHub profile analytics dashboard",
      "LeetCode progress and stats tracker",
      "Productivity monitoring system",
      "Animated charts and smooth UI interactions",
    ],
    accent: "from-violet-300 to-fuchsia-500",
    liveDemoUrl: "https://ai-powered-dev-dashboard.vercel.app/",
    githubUrl: "https://github.com/Boney77/Ai-powered-dev-dashboard",
    coverImage: "/projects/project1.png",
    featured: true,
    role: "Solo Project",
    deployment: "Vercel",
    status: "Completed",
    highlightTags: ["AI", "Dashboard", "Developer Tools", "React", "TypeScript", "Analytics"],
    achievements: [
      "Built a highly polished modern dashboard with production-style UI/UX.",
      "Implemented advanced animations using Framer Motion.",
      "Designed interactive analytics visualizations using Recharts.",
    ],
  },
  {
    slug: "food-court-real-time-order-tracking-system",
    title: "Food Court — Real-Time Order Tracking System",
    category: "Full Stack + Real-Time Web Application",
    description:
      "Developed a real-time food court order management and tracking platform with live status updates, QR-based tracking, and role-based dashboards.",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Supabase Realtime",
      "Vercel",
    ],
    highlights: [
      "Real-time food order tracking system",
      "QR-based customer order tracking",
      "5-second polling fallback for reliability",
      "Staff and admin dashboards for live operations",
    ],
    accent: "from-amber-200 to-rose-400",
    liveDemoUrl: "https://food-court-livid.vercel.app/",
    githubUrl: "https://github.com/Boney77/food-court",
    coverImage: "/projects/project2.png",
    featured: false,
    role: "Solo Project",
    deployment: "Vercel",
    status: "Completed",
    highlightTags: ["Real-Time", "Next.js", "Supabase", "QR Tracking", "Full Stack"],
    achievements: [
      "Implemented real-time synchronization using Supabase Realtime.",
      "Designed role-based dashboards for customers, staff, and admins.",
      "Built resilient tracking flow with realtime plus polling fallback.",
    ],
    credentials: ["Staff PIN: 1234", "Admin PIN: 9999"],
  },
];

export const timeline: TimelineItem[] = [
  {
    title: "OrderFlow — Flash Sale Inventory Reservation Engine",
    period: "Distributed systems milestone",
    description:
      "Engineered inventory reservation around Redis atomic operations, event-driven processing, and real-time operational visibility.",
    metrics: ["10,000+ requests", "Zero overselling", "Redis + RabbitMQ"],
  },
  {
    title: "AI-Powered Insurance Fraud Detection System",
    period: "Backend intelligence milestone",
    description:
      "Built a full-stack risk scoring platform with a Spring Boot backend and responsive dashboard experience.",
    metrics: ["Rule scoring", "Spring Boot", "Railway + Vercel"],
  },
  {
    title: "DevPulse AI — AI Powered Developer Dashboard",
    period: "Developer tools milestone",
    description:
      "Designed a polished dashboard that brings developer analytics, productivity signals, and notes into one workspace.",
    metrics: ["GitHub analytics", "Recharts", "Framer Motion"],
  },
  {
    title: "Food Court — Real-Time Order Tracking System",
    period: "Realtime product milestone",
    description:
      "Delivered operational order tracking with Supabase Realtime, QR flows, and role-specific dashboards.",
    metrics: ["Realtime sync", "QR tracking", "Supabase"],
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
