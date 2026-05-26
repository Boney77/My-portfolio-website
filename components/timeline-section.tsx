"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24">
      <div className="mx-auto w-[min(920px,calc(100%-32px))]">
        <SectionHeading
          eyebrow="Project Timeline"
          title="A backend journey told through product milestones"
          description="No invented employers or dates, just a clear path through the systems and capabilities represented by the portfolio projects."
        />
        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-white/20 to-transparent sm:left-1/2" />
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                className={`relative grid gap-6 pl-12 sm:grid-cols-2 sm:pl-0 ${
                  index % 2 === 0 ? "" : "sm:[&>div:first-child]:col-start-2"
                }`}
              >
                <div className="absolute left-[0.72rem] top-7 h-6 w-6 rounded-full border border-cyan-200 bg-black shadow-[0_0_24px_rgba(34,211,238,0.4)] sm:left-[calc(50%-0.75rem)]" />
                <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-inner-glow backdrop-blur-xl">
                  <Badge>{item.period}</Badge>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.metrics.map((metric) => (
                      <Badge key={metric} className="bg-cyan-300/10 text-cyan-100">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
