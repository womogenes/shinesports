// src/routes/+page.server.js
import { fetchOneEntry } from '@builder.io/sdk-svelte';

export async function load({ page }) {
  if (!page) {
    page = []; // Set a default value if page is not provided
  }

  const urlPath = `/${page.join('/')}`;

  // fetch your Builder content
  const content = await fetchOneEntry({
    model: 'page',
    apiKey: 'b86a0f0d073946c7a8c2c111e79ed09a',
    userAttributes: {
      urlPath,
    },
  });

  // return content from `fetchOneEntry()`
  return { content };
}
