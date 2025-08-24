import { NextResponse } from 'next/server';

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
  payload: any;
}

export async function GET() {
  try {
    const username = 'stringsaeed';
    
    // Fetch recent repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'saeed.guru-portfolio',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    // Fetch recent activity
    const eventsResponse = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=10`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'saeed.guru-portfolio',
        },
        next: { revalidate: 1800 }, // Cache for 30 minutes
      }
    );

    if (!reposResponse.ok || !eventsResponse.ok) {
      throw new Error('Failed to fetch GitHub data');
    }

    const repos: GitHubRepo[] = await reposResponse.json();
    const events: GitHubEvent[] = await eventsResponse.json();

    // Filter and format the data
    const recentRepos = repos
      .filter(repo => !repo.name.includes('.github.io') && repo.name !== username)
      .slice(0, 4)
      .map(repo => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
        updatedAt: repo.updated_at,
        topics: repo.topics,
      }));

    // Process recent activity
    const recentActivity = events
      .filter(event => ['PushEvent', 'CreateEvent', 'PullRequestEvent'].includes(event.type))
      .slice(0, 5)
      .map(event => ({
        type: event.type,
        repo: event.repo.name,
        createdAt: event.created_at,
        message: getActivityMessage(event),
      }));

    return NextResponse.json({
      repos: recentRepos,
      activity: recentActivity,
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    console.error('GitHub API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}

function getActivityMessage(event: GitHubEvent): string {
  switch (event.type) {
    case 'PushEvent':
      const commitCount = event.payload.commits?.length || 0;
      return `Pushed ${commitCount} commit${commitCount !== 1 ? 's' : ''}`;
    case 'CreateEvent':
      return `Created ${event.payload.ref_type}`;
    case 'PullRequestEvent':
      return `${event.payload.action} pull request`;
    default:
      return 'Recent activity';
  }
}
