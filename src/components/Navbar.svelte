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
  class="flex w-full max-w-4xl items-center px-4 sm:px-6 {_class}"
  let:hidden
  let:toggle
  fluid
>
  <NavBrand href="/" class="flex-auto">
    <div class="mr-2 h-8 w-8 content-center justify-center">
      <img
        src="/favicon.png"
        class="ml-0 mr-2 h-full w-full object-fill"
        alt="shine-logo"
      />
    </div>
    <span class=" whitespace-nowrap text-xl font-semibold sm:block">
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
    <NavLi class="flex justify-center text-base" href="/">Home</NavLi>
    <NavLi class="flex justify-center text-base" href="/about">About</NavLi>
    <NavLi class="flex justify-center text-base" href="/faq">FAQ</NavLi>

    <!-- Extra stuff below main nav links -->
    <div class="w-full sm:w-auto">
      {#if user}
        <Button class="mr-2 w-full" size="md" on:click={logout}>Log out</Button>
      {:else}
        <Button class="mr-2 w-full" size="md" href="/signin">Sign in</Button>
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
