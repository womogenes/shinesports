<script>
  import { Button } from 'flowbite-svelte';
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/3f784ca570.js"
    crossorigin="anonymous"
  ></script>
</svelte:head>

<main class="max-w-sm p-6">
  <h1 class="text-4xl font-bold">Sign in</h1>
  <p class="my-2">
    We've implemented sign in with Google. Click the button below to sign in!
  </p>
  <form method="post" action="?/OAuth2">
    <div>
      <Button type="submit">
        <i class="fa-brands fa-google mr-4"></i>
        <span>Sign in with Google</span>
      </Button>
    </div>
  </form>
</main>
