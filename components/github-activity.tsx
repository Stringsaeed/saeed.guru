'use client';

import { useEffect, useState } from 'react';

import { SiGithub } from '@icons-pack/react-simple-icons';
import { formatDistanceToNow } from 'date-fns';
import { ExternalLink, GitBranch, GitCommit, Star } from 'lucide-react';
import Link from 'next/link';

interface GitHubRepo {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  updatedAt: string;
  topics: string[];
}

interface GitHubActivity {
  type: string;
  repo: string;
  createdAt: string;
  message: string;
}

interface GitHubData {
  repos: GitHubRepo[];
  activity: GitHubActivity[];
  lastUpdated: string;
}

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3776ab',
  Swift: '#fa7343',
  'Objective-C': '#438eff',
  Kotlin: '#7f52ff',
  Java: '#ed8b00',
  Dart: '#0175c2',
  Go: '#00add8',
  Rust: '#000000',
  CSS: '#1572b6',
  HTML: '#e34f26',
  Shell: '#89e051',
};

const ActivityIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'PushEvent':
      return <GitCommit className="h-3 w-3 text-green-500" />;
    case 'CreateEvent':
      return <GitBranch className="h-3 w-3 text-blue-500" />;
    case 'PullRequestEvent':
      return <ExternalLink className="h-3 w-3 text-purple-500" />;
    default:
      return <GitCommit className="h-3 w-3 text-gray-500" />;
  }
};

export default function GitHubActivity() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch('/api/github');
        if (!response.ok) throw new Error('Failed to fetch GitHub data');
        const githubData = await response.json();
        setData(githubData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <section className="mb-12">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
          <SiGithub className="h-5 w-5" />
          GitHub Activity
        </h2>
        <div className="animate-pulse space-y-4">
          <div className="h-20 rounded-lg bg-muted" />
          <div className="h-20 rounded-lg bg-muted" />
          <div className="h-20 rounded-lg bg-muted" />
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="mb-12">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
          <SiGithub className="h-5 w-5" />
          GitHub Activity
        </h2>
        <p className="text-muted-foreground">Unable to load GitHub activity</p>
      </section>
    );
  }

  return (
    <section className="mb-12">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
          <SiGithub className="h-5 w-5" />
          GitHub Activity
        </h2>
        <Link
          href="https://github.com/stringsaeed"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          View all →
        </Link>
      </div>

      <div className="space-y-6">
        {/* Recent Repositories */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-foreground">Recent Repositories</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {data.repos.slice(0, 4).map((repo) => (
              <Link
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border bg-card p-3 transition-colors hover:border-primary/50 hover:bg-card/50"
              >
                <div className="flex items-start justify-between">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-card-foreground group-hover:text-primary">
                      {repo.name}
                    </h4>
                    {repo.description && (
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                        {repo.description}
                      </p>
                    )}
                  </div>
                  <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    {repo.language && (
                      <div className="flex items-center gap-1">
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{
                            backgroundColor: languageColors[repo.language] || '#666',
                          }}
                        />
                        <span className="text-muted-foreground">{repo.language}</span>
                      </div>
                    )}
                    {repo.stars > 0 && (
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Star className="h-3 w-3" />
                        {repo.stars}
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(repo.updatedAt), { addSuffix: true })}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-foreground">Recent Activity</h3>
          <div className="space-y-2">
            {data.activity.slice(0, 3).map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border bg-card px-3 py-2 text-sm"
              >
                <ActivityIcon type={activity.type} />
                <div className="min-w-0 flex-1">
                  <span className="text-card-foreground">{activity.message}</span>
                  <span className="text-muted-foreground"> in </span>
                  <span className="font-medium text-card-foreground">
                    {activity.repo.split('/')[1]}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(activity.createdAt), { addSuffix: true })}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        Last updated {formatDistanceToNow(new Date(data.lastUpdated), { addSuffix: true })}
      </p>
    </section>
  );
}
