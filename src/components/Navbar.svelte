<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Button,
  } from 'flowbite-svelte';
  export let user;

  const logout = async () => {
    await fetch('/logout', { method: 'POST' });
    window.location.href = '/';
  };
</script>

<Navbar
  class="mx-auto flex w-full max-w-4xl items-center"
  let:hidden
  let:toggle
>
  <NavBrand href="/">
    <img src="/favicon.svg" class="h-4 pl-4 sm:h-6" alt="Flowbite Logo" />
    <span class="whitespace-nowrap p-4 font-semibold">ratemycrewteam</span>
  </NavBrand>

  <NavUl {hidden} class="order-1 ml-auto" tabindex="-1">
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
  </NavUl>
  <div class="flex md:order-2">
    {#if user}
      <Button class="ml-4 mr-2" size="sm" on:click={logout}>Log out</Button>
      <img src={user.picture} width="40" alt="Profile" />
    {:else}
      <Button class="ml-6" size="sm" href="/signup">Sign up</Button>
    {/if}

    <NavHamburger on:click={toggle} tabindex="-1" />
  </div>
</Navbar>
