import type { Project } from "@/types/portfolio";

export function ProjectMockup({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-[#070a0f] p-3">
      <div className={`absolute inset-x-8 top-6 h-24 rounded-full bg-gradient-to-r ${project.accent} opacity-25 blur-3xl`} />
      <div className="relative flex h-full flex-col rounded-md border border-white/10 bg-black/40 p-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <div className="h-2 w-24 rounded-full bg-white/15" />
        </div>
        <div className="grid flex-1 grid-cols-[0.8fr_1.2fr] gap-3 pt-3">
          <div className="space-y-2">
            <div className="h-9 rounded-md bg-white/10" />
            <div className="h-16 rounded-md bg-white/[0.06]" />
            <div className="h-16 rounded-md bg-white/[0.06]" />
          </div>
          <div className="flex flex-col justify-between rounded-md border border-white/10 bg-white/[0.035] p-3">
            <div>
              <div className={`h-2 w-28 rounded-full bg-gradient-to-r ${project.accent}`} />
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-12 rounded-md bg-white/10" />
                <div className="h-12 rounded-md bg-white/[0.07]" />
                <div className="h-12 rounded-md bg-white/10" />
              </div>
            </div>
            <div className="flex h-20 items-end gap-1.5">
              {[42, 58, 36, 72, 52, 84, 64, 90].map((height, index) => (
                <div
                  key={height + index}
                  className={`w-full rounded-t-sm bg-gradient-to-t ${project.accent} opacity-80`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
