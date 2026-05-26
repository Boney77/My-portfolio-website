import type { GitHubStats } from "@/types/portfolio";

type GitHubUser = {
  public_repos: number;
  followers: number;
};

type GitHubRepo = {
  stargazers_count: number;
  language: string | null;
  fork: boolean;
};

export async function getGitHubStats(username: string): Promise<GitHubStats | null> {
  try {
    const [userResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userResponse.ok || !reposResponse.ok) {
      return null;
    }

    const user = (await userResponse.json()) as GitHubUser;
    const repos = (await reposResponse.json()) as GitHubRepo[];
    const sourceRepos = repos.filter((repo) => !repo.fork);
    const totalStars = sourceRepos.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0,
    );
    const languageCounts = sourceRepos.reduce<Record<string, number>>((acc, repo) => {
      if (!repo.language) return acc;
      acc[repo.language] = (acc[repo.language] ?? 0) + 1;
      return acc;
    }, {});

    const topLanguage =
      Object.entries(languageCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "Java";

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      totalStars,
      topLanguage,
    };
  } catch {
    return null;
  }
}
