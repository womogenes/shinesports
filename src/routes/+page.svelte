<script>
  import { Alert, Input, Label } from 'flowbite-svelte';
  import { Button } from 'flowbite-svelte';

  import { Icon } from 'flowbite-svelte-icons';

  let reviewBases = [
    ['Culture', 'users-group-outline'],
    ['Coach', 'user-circle-solid'],
    ['Recuritment', 'thumbs-up-outline'],
    ['Results', 'rocket-solid'],
  ];
</script>

<div
  class="flex w-full flex-col items-center border-b-2 border-neutral-200 px-10 py-40"
>
  <div class="flex w-full max-w-md flex-col items-center">
    <h1 class="mb-4 text-5xl font-bold">Find a team</h1>
    <Input class="w-full" type="text" size="lg" placeholder="Location">
      <Icon name="search-outline" slot="right" class="h-4 w-4" tabindex="-1" />
    </Input>
  </div>
</div>

<div class="flex w-full flex-col items-center px-4 py-40">
  <div class="mb-6 flex w-full flex-col items-center sm:max-w-3xl">
    <h2 class="text-3xl">Reviews based on</h2>
    <div class="flex w-96 flex-wrap justify-between sm:w-full sm:flex-row">
      {#each reviewBases as [desc, icon]}
        <div class="flex w-48 flex-col items-center p-6">
          <Icon class="mb-3 h-16 w-16" name={icon} tabindex="-1" />
          <p class="text-xl">{desc}</p>
        </div>
      {/each}
    </div>
  </div>

  <h2 class="mb-2 text-3xl">Have something to say?</h2>
  <Button href="/signup">
    <span class="mr-2">Sign up today</span>
    <Icon name="angle-right-solid" size="xs" />
  </Button>
</div>
