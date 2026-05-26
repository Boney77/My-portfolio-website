"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ServerCog } from "lucide-react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectMockup } from "@/components/project-mockup";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <SectionHeading
          eyebrow="Selected Work"
          title="Systems built for scale, security, and clarity"
          description="Each project is presented like a product case study, with architectural highlights and a polished visual snapshot."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="group h-full overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.065]">
                <ProjectMockup project={project} />
                <div className="p-2 pt-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className={`border-white/10 bg-gradient-to-r ${project.accent} text-black`}>
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                  <div className="mt-6 space-y-3">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex gap-3 text-sm text-zinc-300">
                        <ServerCog className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button asChild size="sm" variant="outline">
                      <a href={project.demoUrl} aria-label={`${project.title} live demo placeholder`}>
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="ghost">
                      <a href={project.githubUrl} aria-label={`${project.title} GitHub placeholder`}>
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
