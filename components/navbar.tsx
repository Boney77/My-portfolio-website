"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-4 z-40 mx-auto w-[min(1120px,calc(100%-24px))] rounded-lg border border-white/10 bg-black/45 px-3 py-2 shadow-inner-glow backdrop-blur-xl"
    >
      <nav className="flex items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="flex items-center gap-3 rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-white text-sm font-bold text-black">
            BM
          </span>
          <span className="hidden text-sm font-medium text-white sm:inline">
            Boney Mechery
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <Button asChild size="icon" variant="ghost" aria-label="GitHub profile">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="icon" variant="ghost" aria-label="LinkedIn profile">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <a href={profile.resume}>
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
