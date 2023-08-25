<script>
  import '../app.css';
  import Navbar from '$components/Navbar.svelte';

  export let data;
</script>

<svelte:head>
  <title>ratemycrewteam</title>
  <link rel="icon" href="/favicon.svg" />
</svelte:head>

<Navbar user={data.user} />
<div class="flex flex-col items-center">
  <slot />
</div>

<style lang="postcss">
  :global(h1, h2, h3, h4) {
    font-weight: bold;
    letter-spacing: -0.7pt;
  }

  :global(h1) {
    @apply text-5xl;
    @apply mb-1;
  }
  :global(h2) {
    @apply text-4xl;
  }
  :global(h4) {
    @apply text-3xl;
  }
  :global(p) {
    @apply mb-2;
  }
</style>
