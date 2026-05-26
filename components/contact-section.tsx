"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto w-[min(920px,calc(100%-32px))]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <Card className="relative overflow-hidden p-8 text-center sm:p-12">
            <div className="absolute inset-x-12 top-0 h-32 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="relative">
              <p className="text-sm font-medium uppercase text-cyan-200">Available for backend opportunities</p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold text-white sm:text-5xl">
                Let&apos;s build backend systems that feel effortless to use.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400">
                Reach out for Java backend roles, full-stack product work, or architecture-focused collaborations.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={profile.email}>
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href={profile.resume}>
                    <Download className="h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
