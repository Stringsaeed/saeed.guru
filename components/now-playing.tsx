'use client';

import { useEffect, useState } from 'react';

import { Music, Pause, Play, Volume2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface SpotifyTrack {
  isPlaying: boolean;
  title: string | null;
  artist: string | null;
  album: string | null;
  albumImageUrl: string | null;
  songUrl: string | null;
  progress: number;
  duration: number;
  lastUpdated?: string;
}

function formatTime(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export default function NowPlaying() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [loading, setLoading] = useState(true);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/spotify');
        if (!response.ok) throw new Error('Failed to fetch Spotify data');
        const spotifyData = await response.json();
        setTrack(spotifyData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        console.error('Error fetching Spotify data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();

    // Update every 30 seconds
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <section className="mb-8">
        <div className="animate-pulse rounded-lg border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-muted" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-32 rounded bg-muted" />
              <div className="h-3 w-24 rounded bg-muted" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!track || !track.isPlaying) {
    return (
      <section className="mb-8">
        <div className="rounded-lg border border-dashed bg-card/50 p-4">
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted/50">
              <Music className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Not playing</p>
              <p className="text-xs">Spotify is currently offline</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-8">
      <div className="overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
        <div className="p-4">
          <div className="flex items-center gap-3">
            {/* Album Art */}
            <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-muted">
              {track.albumImageUrl ? (
                <Image
                  src={track.albumImageUrl}
                  alt={`${track.album} by ${track.artist}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <Music className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
            </div>

            {/* Track Info */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <div className="flex h-4 w-4 items-center justify-center">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                </div>
                <Link
                  href={track.songUrl ?? ''}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="truncate font-medium text-card-foreground hover:text-primary"
                >
                  {track.title}
                </Link>
              </div>
              <p className="truncate text-sm text-muted-foreground">by {track.artist}</p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-500 transition-colors hover:bg-green-500/30">
                {track.isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{formatTime(track.progress)}</span>
              <span>{formatTime(track.duration)}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-1 rounded-full bg-green-500 transition-all duration-300"
                  style={{
                    width: `${track.duration > 0 ? (track.progress / track.duration) * 100 : 0}%`,
                  }}
                />
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Volume2 className="h-3 w-3" />
                <Link
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Spotify
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t bg-muted/20 px-4 py-2">
          <p className="text-xs text-muted-foreground">
            🎵 Currently listening to music while coding
          </p>
        </div>
      </div>
    </section>
  );
}
