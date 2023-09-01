<script>
  import Fa from 'svelte-fa';
  import { faArrowLeft, faLeftLong } from '@fortawesome/free-solid-svg-icons';
  import { A } from 'flowbite-svelte';
  import LeafletMap from '../../../../lib/LeafletMap.svelte';
  import TeamLineInfo from '../TeamLineInfo.svelte';

  export let data;
</script>

<A class="mb-4" href="/teams"><Fa icon={faArrowLeft} />&nbsp;All teams</A>

<div class="mb-3 border" id="top-container">
  <div class="!pointer-events-none -z-10 h-72 sm:h-96">
    <LeafletMap coords={data.coords} />
  </div>
  <div class="relative">
    <div
      class="absolute -top-7 left-0 bg-white px-4 py-1 font-medium shadow-xl sm:left-8"
    >
      {data.basicInfo.schoolOrClub}
    </div>
    <div class="relative z-10 bg-white px-4 py-4 sm:px-8">
      <h3 class="mb-2">{data.basicInfo.name}</h3>
      <TeamLineInfo data={data.basicInfo} />
    </div>
  </div>
</div>

<p>
  More data will come later from the second sheet of <A
    href="https://docs.google.com/spreadsheets/d/122yIAMXWzBnx5rYZhnzwix6LSAiOEfdUbItxP6JzWmA/edit#gid=753373721"
    >this spreadsheet</A
  >.
</p>
