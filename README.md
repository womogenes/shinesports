# RateMyCrewTeam

App for rating various sports teams.

Hosted on https://ratemycrewteam.vercel.app.

## Setup

This project uses [SvelteKit](https://kit.svelte.dev).

### 1. Add environment variables

Add [Google OAuth credentials](https://console.cloud.google.com) to a `.env` file in the root of the project. Also add a session secret.

```
# .env
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
SESSION_SECRET=...
```

### 2. Start the development server

```
npm install
npm run dev
```
