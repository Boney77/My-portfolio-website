"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24">
      <div className="mx-auto w-[min(1040px,calc(100%-32px))]">
        <SectionHeading
          eyebrow="Project Timeline"
          title="A backend journey told through product milestones"
          description="No invented employers or dates, just a clear path through the systems and capabilities represented by the portfolio projects."
        />
        <div className="relative mt-16">
          <div className="absolute bottom-8 left-4 top-8 w-px bg-gradient-to-b from-cyan-300 via-white/25 to-emerald-300/40 md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-10 md:space-y-4">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -44 : 44, y: 18 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="group relative pl-12 md:grid md:grid-cols-[1fr_72px_1fr] md:gap-0 md:pl-0"
              >
                <motion.div
                  initial={{ scale: 0.82, opacity: 0.65 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.18 }}
                  viewport={{ once: true, margin: "-90px" }}
                  className="absolute left-[0.45rem] top-7 z-10 grid h-7 w-7 place-items-center rounded-full border border-cyan-200 bg-black shadow-[0_0_24px_rgba(34,211,238,0.45)] transition group-hover:border-white group-hover:shadow-[0_0_34px_rgba(34,211,238,0.75)] md:left-1/2 md:-translate-x-1/2"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-200 transition group-hover:bg-white" />
                </motion.div>

                <div
                  className={`rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-inner-glow backdrop-blur-xl transition duration-300 group-hover:border-cyan-300/30 group-hover:bg-white/[0.07] group-hover:shadow-[0_0_50px_rgba(34,211,238,0.12)] md:col-span-1 ${
                    index % 2 === 0 ? "md:col-start-1" : "md:col-start-3"
                  }`}
                >
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
