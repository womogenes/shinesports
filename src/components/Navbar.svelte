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

  const logout = async () => {
    await fetch('/logout', { method: 'POST' });
    window.location.href = '/';
  };

  onMount(() => {
    for (let selector of ['.nav-hamburger svg']) {
      let el = document.querySelector(selector);
      console.log(el);
      el.tabIndex = -1;
    }
  });
</script>

<Navbar
  class="mx-auto flex w-full max-w-4xl items-center px-4 sm:px-6"
  let:hidden
  let:toggle
>
  <NavBrand href="/">
    <img src="/favicon.svg" class="h-4 sm:h-6" alt="Flowbite Logo" />
    <span class="whitespace-nowrap p-4 font-semibold">ratemycrewteam</span>
  </NavBrand>

  <NavUl {hidden} class="order-1 ml-auto" tabindex="-1">
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
  </NavUl>
  <div class="flex items-center md:order-2">
    {#if user}
      <Button class="ml-4 mr-2" size="sm" on:click={logout}>Log out</Button>
      <Avatar href="/profile" src={user.picture} />
    {:else}
      <Button class="ml-2" size="sm" href="/signin">Sign in</Button>
    {/if}

    <NavHamburger class="nav-hamburger" on:click={toggle} />
  </div>
</Navbar>

<style>
  :global(.nav-hamburger svg):focus {
    outline: none;
  }
</style>
