import type { LucideIcon } from "lucide-react";

export type Skill = {
  name: string;
  icon: LucideIcon;
  group: "Backend" | "Database" | "Cloud" | "Frontend";
  description: string;
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  accent: string;
  demoUrl: string;
  githubUrl: string;
  category: string;
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
