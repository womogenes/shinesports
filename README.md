# RateMyCrewTeam

App for rating various sports teams.

Hosted on https://ratemycrewteam.vercel.app.

## Setup

This project uses [SvelteKit](https://kit.svelte.dev).

### 1. Add environment variables

Add [Google OAuth credentials](https://console.cloud.google.com) to a `.env` file in the root of the project. Get a Goolgle API key as well. Also add an OAuth redirect URL.

Also add a session secret, which must be a randomly generated 32-character string. This is used by [`svelte-kit-cookie-session`](https://github.com/pixelmund/svelte-kit-cookie-session).

```
# .env
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
OAUTH_REDIRECT='http://localhost:5173/oauth'
GAPI_KEY=...
SESSION_SECRET=...
```

### 2. Start the development server

```
npm install
npm run dev
```
