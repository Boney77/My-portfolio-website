import type { LucideIcon } from "lucide-react";

export type Skill = {
  name: string;
  icon: LucideIcon;
  group: "Backend" | "Database" | "Cloud" | "Frontend";
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  accent: string;
  liveDemoUrl: string;
  githubUrl: string;
  category: string;
  coverImage: string;
  featured: boolean;
  topFeatured?: boolean;
  role: string;
  deployment: string;
  status: string;
  highlightTags: string[];
  achievements: string[];
  metrics?: Array<{
    label: string;
    value: string;
  }>;
  credentials?: string[];
  coreProblem?: string;
  technicalHighlights?: string[];
};

export type TimelineItem = {
  title: string;
  period: string;
  description: string;
  metrics: string[];
};

export type GitHubStats = {
  publicRepos: number;
  followers: number;
  totalStars: number;
  topLanguage: string;
};
