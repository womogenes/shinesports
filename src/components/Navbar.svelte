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

<Navbar class="px-4" let:hidden let:toggle>
  <NavBrand href="/">
    <img src="/favicon.svg" class="h-4 sm:h-6" alt="Flowbite Logo" />
    <span class="whitespace-nowrap p-4 font-semibold"> ratemycrewteam </span>
  </NavBrand>

  <NavUl {hidden} class="order-1 ml-auto">
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
  </NavUl>
  <div class="flex md:order-2">
    <Button size="sm" href="/signup">Sign up</Button>
    <NavHamburger on:click={toggle} tabindex="-1" />
  </div>
</Navbar>
