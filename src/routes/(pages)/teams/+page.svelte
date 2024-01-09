<script>
  import { A, Checkbox, Radio, Input, Button } from 'flowbite-svelte';
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
<div style="background-color: #ccf3ff">
  <div class="w-full flex justify-end absolute p-2">
    <form method="POST" action="teams" id="search">
      <Input list="list" placeholder="Search Sport" name="sport" required></Input>
      <datalist id="list">
        <option value="Crew"></option>
        <option value="Swim"></option>
        <option value="Soccer"></option>
      </datalist>
    </form>
  </div>
  
  {#if type == "crew"}
    <Crew {allTeams} {type}></Crew>
  {:else if type == "swim"}
    <Swim {allTeams} {type}></Swim>
  {:else}
    <Empty></Empty>
  {/if}
</div>



