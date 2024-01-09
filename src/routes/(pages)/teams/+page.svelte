<script>
  import { A, Checkbox, Radio } from 'flowbite-svelte';
  import TeamLineInfo from './TeamLineInfo.svelte';
  import { flip } from 'svelte/animate';
  import { fade, fly } from 'svelte/transition';

  import Crew from './sports/crew.svelte';
  import Swim from './sports/swim.svelte';
  import Empty from './sports/empty.svelte';


  export let data;

  // let { sport, zip } = form;

  // export const actions = {
  //   login: async ({request}) => {
  //     const selection = await request.formData();
  //   }
  // }

  // console.log(actions.login(selection));

  //https://kit.svelte.dev/docs/form-actions

  let { allTeams, type } = data;

</script>

{#if type == "crew"}
  <Crew {allTeams} {type}></Crew>
{:else if type == "swim"}
  <Swim {allTeams} {type}></Swim>
{:else}
  <Empty></Empty>
{/if}


