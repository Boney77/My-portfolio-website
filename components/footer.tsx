import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>{profile.name} · Java Backend Developer</p>
        <p>Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
}
