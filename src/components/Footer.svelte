<script>
  import {
    Footer,
    FooterLinkGroup,
    FooterLink,
    FooterBrand,
  } from 'flowbite-svelte';
</script>

<Footer class="flex justify-center border-t-2 !p-0" footerType="socialmedia">
  <div class="w-full max-w-4xl p-6 sm:p-12 md:flex md:justify-between">
    <div class="mb-6 md:mb-0">
      <FooterBrand
        href="/"
        src="/favicon.svg"
        alt="RateMyCrewTeam logo"
        name="ratemycrewteam"
      />
    </div>
    <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
      <div>
        <h2
          class="mb-2 text-sm font-semibold uppercase tracking-normal text-gray-900 dark:text-white"
        >
          Resources
        </h2>
        <FooterLinkGroup>
          <FooterLink
            liClass="mb-2"
            href="https://docs.google.com/spreadsheets/d/122yIAMXWzBnx5rYZhnzwix6LSAiOEfdUbItxP6JzWmA/edi"
          >
            Spreadsheet
          </FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2
          class="mb-2 text-sm font-semibold uppercase tracking-normal text-gray-900 dark:text-white"
        >
          Follow us
        </h2>
        <FooterLinkGroup>
          <FooterLink
            liClass="mb-2"
            href="https://github.com/womogenes/ratemycrewteam"
            >GitHub</FooterLink
          >
        </FooterLinkGroup>
      </div>
      <div>
        <h2
          class="mb-2 text-sm font-semibold uppercase tracking-normal text-gray-900 dark:text-white"
        >
          Legal
        </h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-2" href="/about">Privacy Policy</FooterLink>
        </FooterLinkGroup>
      </div>
    </div>
  </div>
</Footer>
