<script>
  import '../app.css';
  import Navbar from '$components/Navbar.svelte';
  import Footer from '$components/Footer.svelte';

  // Show progress bar while navigating
  // https://devdojo.com/posandu/how-to-add-nprogress-to-sveltekit
  import '$lib/nprogress/nprogress.css';
  import { NProgress } from '$lib/nprogress/nprogress';
  import { navigating } from '$app/stores';
  NProgress.configure({
    // Full list: https://github.com/rstacruz/nprogress#configuration
    minimum: 0.16,
  });
  $: {
    if ($navigating) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }

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
<Footer />

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
  :global(h3) {
    @apply text-3xl;
  }
  :global(h4) {
    @apply text-2xl;
  }
  :global(button) {
    @apply border px-4 py-2;
  }
</style>
