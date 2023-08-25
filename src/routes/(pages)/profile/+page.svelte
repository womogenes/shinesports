<script>
  import { Card, Avatar } from 'flowbite-svelte';
  export let data;

  let { user } = data;
</script>

<p class="mb-2">This is you!</p>
<Card padding="sm">
  <div class="flex flex-col items-center">
    <Avatar class="mb-4" size="lg" src={user.picture} />
    <p class="text-2xl font-bold text-black">{user.name}</p>
    <p>{user.email}</p>
  </div>
</Card>
