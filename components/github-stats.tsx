import { GitBranch, Star, Users, Code2 } from "lucide-react";
import { profile } from "@/lib/data";
import { getGitHubStats } from "@/lib/github";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export async function GitHubStatsSection() {
  const stats = await getGitHubStats(profile.githubUser);
  const items = [
    {
      label: "Public repos",
      value: stats?.publicRepos ?? "Live",
      icon: GitBranch,
    },
    {
      label: "Followers",
      value: stats?.followers ?? "API",
      icon: Users,
    },
    {
      label: "Stars",
      value: stats?.totalStars ?? "Ready",
      icon: Star,
    },
    {
      label: "Top language",
      value: stats?.topLanguage ?? "Java",
      icon: Code2,
    },
  ];

  return (
    <section className="py-24" aria-labelledby="github-stats-heading">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <SectionHeading
          eyebrow="GitHub Signal"
          title="Repository activity with resilient live stats"
          description="The section reads public GitHub data for Boney77 and falls back cleanly if the API is unavailable or rate-limited."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item.label} className="p-6">
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-white text-black">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="h-2 w-16 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
              </div>
              <div className="mt-8 text-3xl font-semibold text-white">{item.value}</div>
              <div className="mt-2 text-sm text-zinc-400">{item.label}</div>
            </Card>
          ))}
        </div>
        {!stats ? (
          <p className="mt-5 text-center text-sm text-zinc-500">
            Live GitHub data could not be loaded during this request, so polished defaults are shown.
          </p>
        ) : null}
      </div>
    </section>
  );
}
