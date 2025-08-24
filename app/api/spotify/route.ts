import { NextResponse } from 'next/server';

const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_NOW_PLAYING_URL = 'https://api.spotify.com/v1/me/player/currently-playing';

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface SpotifyNowPlayingResponse {
  is_playing: boolean;
  timestamp: number;
  context: Context;
  progress_ms: number;
  item: Track;
  currently_playing_type: string;
  actions: Actions;
}

interface Context {
  external_urls: ExternalUrls;
  href: string;
  type: string;
  uri: string;
}

interface ExternalUrls {
  spotify: string;
}

interface Track {
  album: Album;
  artists: Artist2[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls5;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: any;
  track_number: number;
  type: string;
  uri: string;
}

interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls3;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface Artist {
  external_urls: ExternalUrls2;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface ExternalUrls2 {
  spotify: string;
}

interface ExternalUrls3 {
  spotify: string;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

interface Artist2 {
  external_urls: ExternalUrls4;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface ExternalUrls4 {
  spotify: string;
}

interface ExternalIds {
  isrc: string;
}

interface ExternalUrls5 {
  spotify: string;
}

interface Actions {
  disallows: Disallows;
}

interface Disallows {
  pausing: boolean;
  skipping_prev: boolean;
}

async function getAccessToken(): Promise<string | null> {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!refreshToken || !clientId || !clientSecret) {
    console.warn('Spotify credentials not found');
    return null;
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    const response = await fetch(SPOTIFY_TOKEN_URL, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    });

    if (!response.ok) {
      console.error('Failed to refresh Spotify token:', response.status);
      return null;
    }

    const data: SpotifyTokenResponse = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error refreshing Spotify token:', error);
    return null;
  }
}

async function getNowPlaying(accessToken: string) {
  const response = await fetch(SPOTIFY_NOW_PLAYING_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 204) {
    return null; // No content - nothing playing
  }

  if (!response.ok) {
    throw new Error(`Spotify API error: ${response.status}`);
  }

  return response.json();
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      return NextResponse.json(getMockData());
    }

    const nowPlayingData: SpotifyNowPlayingResponse | null = await getNowPlaying(accessToken);

    if (!nowPlayingData || !nowPlayingData.is_playing || !nowPlayingData.item) {
      return NextResponse.json({
        isPlaying: false,
        title: null,
        artist: null,
        album: null,
        albumImageUrl: null,
        songUrl: null,
        progress: 0,
        duration: 0,
      });
    }

    const track = nowPlayingData.item;
    const albumImage =
      track.album.images.find((img) => img.height === 300) || track.album.images[0] || null;

    return NextResponse.json({
      isPlaying: nowPlayingData.is_playing,
      title: track.name,
      artist: track.artists.map((artist) => artist.name).join(', '),
      album: track.album.name,
      albumImageUrl: albumImage?.url || null,
      songUrl: track.external_urls.spotify,
      progress: nowPlayingData.progress_ms || 0,
      duration: track.duration_ms || 0,
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Spotify API Error:', error);
    return NextResponse.json(getMockData());
  }
}

function getMockData() {
  // Return mock data when Spotify isn't configured or fails
  const mockTracks = [
    {
      title: 'Bohemian Rhapsody',
      artist: 'Queen',
      album: 'A Night at the Opera',
      songUrl: 'https://open.spotify.com/track/4u7EnebtmKWzUH433cf5Qv',
    },
    {
      title: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      album: 'Led Zeppelin IV',
      songUrl: 'https://open.spotify.com/track/5CQ30WqJwcep0pYcV4AMNc',
    },
    {
      title: 'Hotel California',
      artist: 'Eagles',
      album: 'Hotel California',
      songUrl: 'https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv',
    },
  ];

  const randomTrack = mockTracks[Math.floor(Math.random() * mockTracks.length)];
  const isPlaying = Math.random() > 0.4; // 60% chance of playing

  if (!isPlaying) {
    return {
      isPlaying: false,
      title: null,
      artist: null,
      album: null,
      albumImageUrl: null,
      songUrl: null,
      progress: 0,
      duration: 0,
    };
  }

  return {
    isPlaying: true,
    title: randomTrack.title,
    artist: randomTrack.artist,
    album: randomTrack.album,
    albumImageUrl: null, // No mock image
    songUrl: randomTrack.songUrl,
    progress: Math.floor(Math.random() * 180000), // Random progress up to 3 minutes
    duration: 210000, // 3.5 minutes
    lastUpdated: new Date().toISOString(),
  };
}
