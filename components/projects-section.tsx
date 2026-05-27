"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  KeyRound,
  Sparkles,
} from "lucide-react";
import { projects } from "@/lib/data";
import type { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const badgeLabel = project.topFeatured ? "Top Featured" : "Featured";
  const detailItems = project.metrics?.length
    ? project.metrics.map((metric) => `${metric.value} ${metric.label}`)
    : project.achievements;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.06 }}
      className="h-full"
    >
      <Card className="group relative flex h-full min-h-[760px] flex-col overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.065]">
        <div
          className={`absolute inset-x-8 top-0 h-24 bg-gradient-to-r ${project.accent} opacity-15 blur-3xl`}
        />
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-black/40">
          <Image
            src={project.coverImage}
            alt={`${project.title} project screenshot`}
            fill
            priority={index < 2}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-[1.035]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/[0.03]" />
        </div>

        <div className="relative flex flex-1 flex-col p-2 pt-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className={`border-white/10 bg-gradient-to-r ${project.accent} text-black`}>
              {badgeLabel}
            </Badge>
            <Badge>{project.status}</Badge>
          </div>

          <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-zinc-400">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.highlightTags.slice(0, 6).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <div className="mt-6 grid gap-2">
            {detailItems.slice(0, 3).map((item) => (
              <div key={item} className="flex gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200" />
                <span>{item}</span>
              </div>
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

          <div className="mt-auto pt-7">
            <div className="mb-5 flex flex-wrap gap-2">
              {project.techStack.slice(0, 5).map((tech) => (
                <Badge key={tech} className="bg-white/[0.035] text-zinc-400">
                  {tech}
                </Badge>
              ))}
            </div>
            <ProjectLinks project={project} />
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <SectionHeading
          eyebrow="Selected Work"
          title="Actual projects built for real product and system challenges"
          description="A curated set of shipped applications across distributed systems, AI dashboards, real-time platforms, and backend-heavy product engineering."
        />

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
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
