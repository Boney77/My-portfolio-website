export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#050608] text-white">
      <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
        <div className="absolute inset-y-0 w-1/2 animate-shimmer bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
      </div>
    </div>
  );
}
