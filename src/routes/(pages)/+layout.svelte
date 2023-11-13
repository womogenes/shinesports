<script>
  import Navbar from '$components/Navbar.svelte';

  export let data;
</script>

<Navbar user={data.user} />

<main class="w-full">
  <slot />
</main>
