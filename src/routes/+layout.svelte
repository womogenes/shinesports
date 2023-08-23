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
  :global(h1),
  :global(h2) {
    letter-spacing: -0.7pt;
  }
</style>
