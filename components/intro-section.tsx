"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2, DatabaseZap, Orbit, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const introCards = [
  { label: "AI & Data Science", icon: BrainCircuit },
  { label: "Backend Systems", icon: DatabaseZap },
  { label: "Cloud Engineering", icon: Rocket },
  { label: "Modern Web", icon: Code2 },
];

export function IntroSection() {
  return (
    <section id="intro" className="py-20">
      <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase text-cyan-300">Introduction</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Building practical software at the edge of backend, AI, and product.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              Hi, I&apos;m Boney Babu Mechery, an AI & Data Science Engineering
              graduate and backend-focused developer passionate about building
              scalable, real-world applications.
            </p>
            <p>
              I specialize in Java, Spring Boot, cloud technologies, distributed
              systems, and modern web development. From IoT-based analytics
              platforms to high-concurrency inventory reservation systems, I enjoy
              solving complex engineering problems and turning ideas into impactful
              products.
            </p>
            <p>
              Currently, I&apos;m actively seeking full-time opportunities as a
              Software Engineer or Backend Developer where I can contribute, learn,
              and grow while building impactful software solutions.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/15 blur-3xl" />
          <Card className="relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40" />
            <div className="relative grid min-h-[360px] place-items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute h-64 w-64 rounded-full border border-cyan-200/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute h-44 w-44 rounded-full border border-emerald-200/20"
              />
              <div className="relative grid h-28 w-28 place-items-center rounded-2xl border border-white/10 bg-black/50 shadow-[0_0_50px_rgba(34,211,238,0.2)] backdrop-blur-xl">
                <Orbit className="h-10 w-10 text-cyan-200" />
              </div>
              {introCards.map((card, index) => {
                const positions = [
                  "left-2 top-8",
                  "right-2 top-14",
                  "bottom-10 left-6",
                  "bottom-6 right-8",
                ];
                return (
                  <motion.div
                    key={card.label}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      delay: index * 0.35,
                    }}
                    className={`absolute ${positions[index]} rounded-lg border border-white/10 bg-white/[0.06] p-3 shadow-inner-glow backdrop-blur-xl`}
                  >
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <card.icon className="h-4 w-4 text-cyan-200" />
                      {card.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
