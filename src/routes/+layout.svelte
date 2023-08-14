<script>
  import '../app.css';
  import Navbar from 'components/Navbar.svelte';
</script>

<svelte:head>
  <title>ratemycrewteam</title>
  <link rel="icon" href="/favicon.svg" />
</svelte:head>

<Navbar />
<div class="flex flex-col items-center">
  <slot />
</div>

<style lang="postcss">
  :global(h1),
  :global(h2) {
    letter-spacing: -0.7pt;
  }
</style>
