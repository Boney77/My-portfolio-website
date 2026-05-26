"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  KeyRound,
  ServerCog,
  Sparkles,
} from "lucide-react";
import { projects } from "@/lib/data";
import type { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

function ProjectImage({
  project,
  priority = false,
  className,
}: {
  project: Project;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-white/10 bg-black/40 ${className ?? ""}`}>
      <Image
        src={project.coverImage}
        alt={`${project.title} dashboard screenshot`}
        fill
        priority={priority}
        sizes={priority ? "(min-width: 1024px) 52vw, 100vw" : "(min-width: 1024px) 34vw, 100vw"}
        className="object-cover transition duration-700 group-hover:scale-[1.035]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-white/[0.03]" />
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild size="sm" variant="outline">
        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} live demo`}
        >
          <ExternalLink className="h-4 w-4" />
          Live Demo
        </a>
      </Button>
      <Button asChild size="sm" variant="ghost">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} GitHub repository`}
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
      </Button>
    </div>
  );
}

function TopFeaturedProject({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <Card className="group relative overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.065]">
        <div className={`absolute inset-x-10 top-0 h-40 bg-gradient-to-r ${project.accent} opacity-20 blur-3xl`} />
        <div className="relative grid gap-7 lg:grid-cols-[1.05fr_0.95fr]">
          <ProjectImage project={project} priority className="min-h-[300px] lg:min-h-[520px]" />
          <div className="flex flex-col justify-between p-2 lg:p-5">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge className={`border-white/10 bg-gradient-to-r ${project.accent} text-black`}>
                  Top Featured
                </Badge>
                <Badge>{project.status}</Badge>
              </div>
              <h3 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-zinc-300">{project.description}</p>
              {project.coreProblem ? (
                <div className="mt-5 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-50">
                  <span className="font-semibold text-white">Core problem solved: </span>
                  {project.coreProblem}
                </div>
              ) : null}
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {project.metrics?.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
                    <div className="text-xl font-semibold text-white">{metric.value}</div>
                    <div className="mt-1 text-xs text-zinc-400">{metric.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.highlightTags.map((tag) => (
                  <Badge key={tag} className="bg-white/[0.07] text-zinc-200">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {project.technicalHighlights?.slice(0, 4).map((highlight) => (
                  <div key={highlight} className="flex gap-3 text-sm text-zinc-300">
                    <ServerCog className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <ProjectLinks project={project} />
              <div className="text-sm text-zinc-500">{project.role} · {project.deployment}</div>
            </div>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08 }}
    >
      <Card className="group relative h-full overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.065]">
        <div className={`absolute inset-x-8 top-0 h-24 bg-gradient-to-r ${project.accent} opacity-15 blur-3xl`} />
        <ProjectImage project={project} className="aspect-[16/10]" />
        <div className="relative p-2 pt-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className={`border-white/10 bg-gradient-to-r ${project.accent} text-black`}>
              Featured
            </Badge>
            <Badge>{project.category}</Badge>
          </div>
          <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-400">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.highlightTags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {project.achievements.slice(0, 3).map((achievement) => (
              <div key={achievement} className="flex gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
          <div className="mt-7">
            <ProjectLinks project={project} />
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

function NormalProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <Card className="group overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.065]">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <ProjectImage project={project} className="min-h-[250px]" />
          <div className="p-2">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className={`border-white/10 bg-gradient-to-r ${project.accent} text-black`}>
                Project
              </Badge>
              <Badge>{project.status}</Badge>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.slice(0, 7).map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            {project.credentials ? (
              <div className="mt-6 rounded-lg border border-amber-200/20 bg-amber-200/10 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-amber-100">
                  <KeyRound className="h-4 w-4" />
                  Demo credentials
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.credentials.map((credential) => (
                    <Badge key={credential} className="bg-black/30 text-amber-50">
                      {credential}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="mt-7">
              <ProjectLinks project={project} />
            </div>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

export function ProjectsSection() {
  const topProject = projects.find((project) => project.topFeatured);
  const featuredProjects = projects.filter((project) => project.featured && !project.topFeatured);
  const normalProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <SectionHeading
          eyebrow="Selected Work"
          title="Actual projects built for real product and system challenges"
          description="A recruiter-friendly showcase of distributed systems, AI dashboards, backend intelligence, and real-time full-stack applications."
        />

        <div className="mt-14 space-y-5">
          {topProject ? <TopFeaturedProject project={topProject} /> : null}

          <div className="grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          {normalProjects.map((project) => (
            <NormalProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
          <Sparkles className="h-4 w-4 text-cyan-200" />
          <span>All demos and repositories open in a new tab.</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
}
