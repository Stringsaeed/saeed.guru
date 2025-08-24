# Spotify Now Playing Integration Setup

The Now Playing component fetches real-time data from Spotify to display what you're currently listening to. Here's how to set it up:

## 1. Create a Spotify App

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click **"Create app"**
4. Fill out the form:
   - **App name**: `Your Portfolio Now Playing`
   - **App description**: `Shows currently playing music on portfolio`
   - **Website**: Your portfolio URL
   - **Redirect URI**: `http://localhost:3000/api/auth/callback/spotify`
   - **APIs used**: Check "Web API"
5. Click **"Save"**
6. Note down your **Client ID** and **Client Secret**

## 2. Get Authorization Code

Visit this URL in your browser (replace `CLIENT_ID` with your actual Client ID):

```
https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000/api/auth/callback/spotify&scope=user-read-currently-playing user-read-playback-state
```

After logging in, you'll be redirected to your callback URL. Copy the `code` parameter from the URL.

## 3. Exchange Code for Refresh Token

Run this curl command (replace `CLIENT_ID`, `CLIENT_SECRET`, and `CODE` with your actual values):

```bash
curl -H "Authorization: Basic $(echo -n 'CLIENT_ID:CLIENT_SECRET' | base64)" \
     -d grant_type=authorization_code \
     -d code=CODE \
     -d redirect_uri=http://localhost:3000/api/auth/callback/spotify \
     https://accounts.spotify.com/api/token
```

Save the `refresh_token` from the response.

## 4. Add Environment Variables

Create or update your `.env.local` file:

```bash
SPOTIFY_CLIENT_ID=your_client_id_here
SPOTIFY_CLIENT_SECRET=your_client_secret_here
SPOTIFY_REFRESH_TOKEN=your_refresh_token_here
```

## 5. Test the Integration

1. Start your development server: `bun dev`
2. Play a song on Spotify
3. Visit your portfolio - the Now Playing component should show your current track

## 6. Component Features

The component displays:

- **Album Art**: Cover image from Spotify
- **Track Info**: Song title, artist, and album
- **Progress Bar**: Real-time playback progress with timestamps
- **Spotify Link**: Direct link to the song on Spotify
- **Live Status**: Shows when you're actively listening

## 7. Fallback Behavior

If Spotify credentials are missing or the API fails:

- Shows mock data with random classic tracks
- Gracefully handles "not playing" states
- Displays offline status when nothing is playing

## 8. Privacy & Permissions

The integration only accesses:

- Currently playing track information
- Playback state (playing/paused)
- No playlist data or personal information

## 9. Troubleshooting

### Common Issues:

**"Spotify credentials not found"**

- Check your `.env.local` file has all three variables
- Restart your development server

**"Failed to refresh token"**

- Your refresh token may have expired
- Re-run the authorization flow (steps 2-3)

**"Not playing" shows when music is active**

- Ensure you're playing music on the same Spotify account
- Check that Spotify app has proper permissions

### API Rate Limits:

- Component updates every 30 seconds
- Spotify allows 100 requests per minute
- No rate limiting issues expected with normal usage

## 10. Production Deployment

For production:

1. Update your Spotify app settings to include your production domain
2. Add the same environment variables to your hosting platform
3. The component will automatically work with the same setup

## 11. Customization

You can modify the integration by editing:

- `/app/api/spotify/route.ts` - API route and authentication
- `/components/now-playing.tsx` - Component display and styling
- Refresh interval (currently 30 seconds)
- Mock data tracks when offline
