"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { architecturePillars, heroMetrics, profile } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] w-[min(1120px,calc(100%-32px))] items-center gap-10 pb-20 lg:grid-cols-[1.06fr_0.94fr]">
        <div>
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-cyan-200 shadow-inner-glow"
          >
            <Sparkles className="h-4 w-4" />
            Java backend systems with product-grade polish
          </motion.div>
          <motion.h1
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.08 }}
            className="mt-7 max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
          >
            {profile.name}
            <span className="block bg-gradient-to-r from-cyan-200 via-white to-emerald-200 bg-clip-text text-transparent">
              {profile.role}
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300"
          >
            {profile.tagline}
          </motion.p>
          <motion.div
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={profile.resume}>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
          <motion.div
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.32 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4 shadow-inner-glow">
                <div className="text-xl font-semibold text-white">{metric.value}</div>
                <div className="mt-1 text-xs text-zinc-500">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 32, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/20 blur-3xl" />
          <Card className="relative overflow-hidden p-4">
            <div className="rounded-md border border-white/10 bg-[#080b10] p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                </div>
                <span className="text-xs text-zinc-500">system.architecture.ts</span>
              </div>
              <div className="space-y-4 pt-5 font-mono text-sm">
                <p className="text-zinc-500">class PortfolioService {"{"}</p>
                <p className="pl-4 text-cyan-200">stack = ["Java", "Spring Boot", "AWS"];</p>
                <p className="pl-4 text-emerald-200">focus = "Scalable backend platforms";</p>
                <p className="pl-4 text-zinc-300">ship() {"{"} return reliableApis; {"}"}</p>
                <p className="text-zinc-500">{"}"}</p>
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              {architecturePillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white text-black">
                      <pillar.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{pillar.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-zinc-400">{pillar.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
