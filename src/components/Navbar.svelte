<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Button,
  } from 'flowbite-svelte';
</script>

<Navbar
  class="mx-auto flex w-full max-w-4xl items-center"
  let:hidden
  let:toggle
>
  <NavBrand href="/">
    <img src="/favicon.svg" class="h-4 pl-4 sm:h-6" alt="Flowbite Logo" />
    <span class="whitespace-nowrap p-4 font-semibold"> ratemycrewteam </span>
  </NavBrand>

  <NavUl {hidden} class="order-1 ml-auto">
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
  </NavUl>
  <div class="flex md:order-2">
    <Button class="ml-6" size="sm" href="/signup">Sign up</Button>
    <NavHamburger on:click={toggle} tabindex="-1" />
  </div>
</Navbar>
