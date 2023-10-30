<script>
  import { onMount } from 'svelte';
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Button,
    Avatar,
  } from 'flowbite-svelte';
  export let user;

  let _class = '';
  export { _class as class };

  const logout = async () => {
    await fetch('/logout', { method: 'POST' });
    window.location.href = '/';
  };

  onMount(() => {
    for (let selector of ['.nav-hamburger svg']) {
      let el = document.querySelector(selector);
      el.tabIndex = -1;
    }
  });
</script>

<Navbar
  class="flex w-full max-w-4xl h-20 items-center px-4 sm:px-6 {_class}"
  let:hidden
  let:toggle
  fluid
>
  <NavBrand href="/" class="flex-auto">
    <div class="h-20 w-20 content-center justify-center">
      <img src="/favicon.png" class="object-fill w-full h-full ml-0 mr-2" alt="shine-logo" />
    </div>
    <span class=" whitespace-nowrap font-semibold sm:block text-5xl">
      Shine
    </span>
  </NavBrand>

  <NavUl
    class="order-1"
    classUl="flex sm:items-center items-stretch sm:py-0 py-4"
    tabindex="-1"
    {hidden}
    slideParams={{ delay: 0 }}
  >
    <NavLi class="flex justify-center text-lg" href="/">Home</NavLi>
    <NavLi class="flex justify-center text-lg" href="/about">About</NavLi>

    <!-- Extra stuff below main nav links -->
    <div class="w-full sm:w-auto">
      {#if user}
        <Button class="mr-2 w-full" size="lg" on:click={logout}>Log out</Button>
      {:else}
        <Button class="mr-2 w-full" size="lg" href="/signin">Sign in</Button>
      {/if}
    </div>
  </NavUl>
  <div class="flex items-center md:order-2">
    {#if user}<Avatar href="/profile" src={user.picture} />{/if}
    <NavHamburger class="nav-hamburger" on:click={toggle} />
  </div>
</Navbar>

<style>
  :global(.nav-hamburger svg):focus {
    outline: none;
  }
</style>
