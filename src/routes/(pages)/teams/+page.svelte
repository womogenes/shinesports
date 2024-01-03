<script>
  import { A, Checkbox, Radio } from 'flowbite-svelte';
  import TeamLineInfo from './TeamLineInfo.svelte';
  import { flip } from 'svelte/animate';
  import { fade, fly } from 'svelte/transition';

  import Crew from './sports/crew.svelte';


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

<Crew {allTeams}></Crew>

