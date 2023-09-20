<!-- src/routes/+page.svelte -->
<script>
  import { Content, isPreviewing } from '@builder.io/sdk-svelte';

  // Add your Public API Key
  const YOUR_API_KEY = 'b86a0f0d073946c7a8c2c111e79ed09a';

  export let data;
  const { content } = data;
</script>

<main class="max-w-4xl px-6 py-10">
  <h1>Welcome to your Builder-integrated Svelte app</h1>
  <p>Below is your Builder Content:</p>

  <pre class="overflow-x-scroll p-4 border text-sm break-all">{JSON.stringify(content, null, 2)}</pre>

  {#if data.content || isPreviewing()}
    <!-- Render builder content with all required props -->
    <Content model="page" {content} apiKey={YOUR_API_KEY} />
  {:else}
    <p>Loading...</p>
  {/if}
</main>
