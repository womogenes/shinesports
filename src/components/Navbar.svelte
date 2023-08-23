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
  <div class="flex items-center md:order-2">
    {#if user}
      <Button class="ml-4 mr-2" size="sm" on:click={logout}>Log out</Button>
      <a
        class="h-10 w-10 rounded-full border-2 border-neutral-300"
        href="/profile"
      >
        <img src={user.picture} alt="Profile" />
      </a>
    {:else}
      <Button class="ml-6" size="sm" href="/signin">Sign in</Button>
    {/if}

    <NavHamburger on:click={toggle} tabindex="-1" />
  </div>
</Navbar>
