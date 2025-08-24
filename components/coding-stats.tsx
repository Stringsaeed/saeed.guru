'use client';

import { useEffect, useState } from 'react';

import { formatDistanceToNow } from 'date-fns';
import { Calendar, Clock, Code2, Zap } from 'lucide-react';
import Link from 'next/link';

interface WakaTimeLanguage {
  name: string;
  percentage: number;
  hours: number;
  color: string;
}

interface WakaTimeStats {
  totalHours: number;
  currentStreak: number;
  thisWeekHours: number;
  thisWeekCommits: number;
  dailyAverage: number;
  languages: WakaTimeLanguage[];
  isActive: boolean;
  lastUpdated: string;
}

export default function CodingStats() {
  const [stats, setStats] = useState<WakaTimeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWakaTimeStats = async () => {
      try {
        const response = await fetch('/api/wakatime');
        if (!response.ok) throw new Error('Failed to fetch WakaTime data');
        const wakaTimeData = await response.json();
        setStats(wakaTimeData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        console.error('Error fetching WakaTime stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWakaTimeStats();
  }, []);

  if (loading) {
    return (
      <section className="mb-12">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
          <Code2 className="h-5 w-5" />
          Coding Stats
        </h2>
        <div className="animate-pulse space-y-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-16 rounded-lg bg-muted" />
            ))}
          </div>
          <div className="h-32 rounded-lg bg-muted" />
        </div>
      </section>
    );
  }

  if (!stats) return null;

  return (
    <section className="mb-12">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
          <Code2 className="h-5 w-5" />
          Coding Stats
          {stats.isActive && (
            <div className="ml-2 flex items-center gap-1 rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-500">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Active
            </div>
          )}
        </h2>
        <Link
          href="https://wakatime.com/@stringsaeed"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          View on WakaTime →
        </Link>
      </div>

      <div className="space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border bg-card p-4 text-center">
            <div className="flex items-center justify-center text-2xl font-bold text-primary">
              {stats.totalHours.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Total Hours</p>
          </div>

          <div className="rounded-lg border bg-card p-4 text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
              <Calendar className="h-5 w-5" />
              {stats.currentStreak}
            </div>
            <p className="text-xs text-muted-foreground">Day Streak</p>
          </div>

          <div className="rounded-lg border bg-card p-4 text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
              <Zap className="h-5 w-5" />
              {stats.thisWeekHours}
            </div>
            <p className="text-xs text-muted-foreground">This Week</p>
          </div>

          <div className="rounded-lg border bg-card p-4 text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
              <Clock className="h-5 w-5" />
              {stats.dailyAverage}h
            </div>
            <p className="text-xs text-muted-foreground">Daily Avg</p>
          </div>
        </div>

        {/* Language Breakdown */}
        <div className="rounded-lg border bg-card p-4">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Languages This Week</h3>
          <div className="space-y-3">
            {stats.languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: lang.color }} />
                  <span className="text-sm font-medium text-card-foreground">{lang.name}</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-1.5 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: lang.color,
                          width: `${lang.percentage}%`,
                        }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {lang.percentage}% ({lang.hours}h)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="rounded-lg border border-dashed bg-card/50 p-4">
          <h3 className="mb-2 text-sm font-semibold text-foreground">Quick Stats</h3>
          <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <div>💻 {stats.thisWeekHours} hours of coding</div>
            <div>🚀 {stats.thisWeekCommits} commits pushed</div>
            <div>🎯 {stats.currentStreak} day streak maintained</div>
            <div>⚡ Top language: {stats.languages[0]?.name || 'TypeScript'}</div>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            Last updated {formatDistanceToNow(new Date(stats.lastUpdated), { addSuffix: true })}
          </p>
        </div>
      </div>
    </section>
  );
}
