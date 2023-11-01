<script>
  import {
    Footer,
    FooterLinkGroup,
    FooterLink,
    FooterBrand,
  } from 'flowbite-svelte';
</script>

<Footer class="flex justify-center border-t-2 !p-0" footerType="socialmedia">
  <div class="m-10 h-28 w-full max-w-4xl md:flex md:justify-between">
    <div class="mb-6 md:mb-0 flex justify-center items-center w-28 h-28">
      <a href="/">
        <img src="/logo.png" alt="Shine logo"/>
      </a>
    </div>
    <div class="w-full grid grid-rows-3 flex items-center text-center justify-center">
      <h1 class="text-lg">Where athletes shine, teams shine</h1>
      <hr>
      <div class="grid grid-cols-2 gap-4 flex justify-center">
        <!-- Socials -->
        <div>
          <a href="/">Discover Teams</a>
          <!-- <FooterLinkGroup>
            <FooterLink
              liClass="mb-2"
              href="/"
              >Discover Teams</FooterLink
            >
          </FooterLinkGroup> -->
        </div>

        <!-- About Us -->
        <div>
          <a href="/about">About Us</a>
          <!-- <FooterLinkGroup>
            <FooterLink liClass="mb-2" href="/about">About Us</FooterLink>
          </FooterLinkGroup> -->
        </div>
      </div>
    </div>
  </div>
</Footer>
