<script>
  import Fa from 'svelte-fa';
  import { faGoogle } from '@fortawesome/free-brands-svg-icons';
  import { Button } from 'flowbite-svelte';
</script>

<main class="max-w-sm p-6">
  <h1 class="text-4xl font-bold">Sign in</h1>
  <p class="my-2">
    We've implemented sign in with Google. Click the button below to sign in!
  </p>
  <form method="post" action="?/OAuth2">
    <div>
      <Button type="submit">
        <Fa class="mr-4" icon={faGoogle} />
        <span>Sign in with Google</span>
      </Button>
    </div>
  </form>
</main>
