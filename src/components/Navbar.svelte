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
      el.tabIndex = -1;
    }
  });
</script>

<Navbar
  class="mx-auto flex w-full max-w-4xl items-center px-4 sm:px-6"
  let:hidden
  let:toggle
  fluid
>
  <NavBrand href="/">
    <img src="/favicon.svg" class="ml-0 mr-2 w-5 sm:w-6" alt="Flowbite Logo" />
    <span class=" whitespace-nowrap font-semibold sm:block">
      ratemycrewteam
    </span>
  </NavBrand>

  <NavUl
    class="order-1 ml-auto"
    tabindex="-1"
    {hidden}
    slideParams={{ delay: 0 }}
  >
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>

    <!-- Extra stuff below main nav links -->
    <div>
      {#if user}
        <Button class="mr-2 sm:ml-4" size="sm" on:click={logout}>
          Log out
        </Button>
      {:else}
        <Button class="ml-2" size="sm" href="/signin">Sign in</Button>
      {/if}
    </div>
  </NavUl>
  <div class="flex items-center md:order-2">
    <Avatar href="/profile" src={user.picture} />
    <NavHamburger class="nav-hamburger" on:click={toggle} />
  </div>
</Navbar>

<style>
  :global(.nav-hamburger svg):focus {
    outline: none;
  }
</style>
