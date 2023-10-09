<script>
  import Navbar from '$components/Navbar.svelte';

  export let data;
</script>

<Navbar user={data.user} />

<main class="box-border w-full max-w-4xl px-6 pb-12 pt-12 sm:px-12">
  <slot />
</main>
