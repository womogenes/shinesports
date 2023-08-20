<script>
  import { Button } from 'flowbite-svelte';
</script>

<div>
  <div>
    <h2 class="mb-2 text-xl font-bold">Sign in</h2>
    <form method="post" action="?/OAuth2">
      <div>
        <Button type="submit">Sign in</Button>
      </div>
    </form>
  </div>
</div>
