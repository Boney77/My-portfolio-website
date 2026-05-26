"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Backend depth with full-stack range"
          description="A focused toolset for building secure APIs, data-heavy products, and cloud-ready systems that recruiters can understand quickly."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.04 }}
            >
              <Card className="group h-full p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-white text-black transition group-hover:bg-cyan-100">
                  <skill.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-lg font-semibold text-white">{skill.name}</div>
                <div className="mt-1 text-xs text-cyan-200">{skill.group}</div>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{skill.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
