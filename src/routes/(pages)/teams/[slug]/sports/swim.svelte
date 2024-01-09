<script>
    import LeafletMap from '$components/LeafletMap.svelte';
    import TeamLineInfo from '../../TeamLineInfo.svelte';
    import { A } from 'flowbite-svelte';
    export let data = data;

    const { team, coords} = data;
</script>



<div class="!pointer-events-none -z-10 h-72 sm:h-96">
    <LeafletMap coords={coords}/>
</div>
  <div class="relative">
    <div
      class="absolute -top-7 left-0 bg-white px-4 py-1 font-medium shadow-xl sm:left-8"
    >
      {"Club"}
    </div>
    <div class="relative z-10 bg-white px-4 py-4 sm:px-8">
      <A
        class="mb-2 text-[#346dc2]"
        href={team.website}
        target="_blank"
      >
        <h3>{team.name}</h3>
      </A>
      <TeamLineInfo data={team} />
    </div>
  </div>

<div class="px-0 sm:px-8">
    <p>
      <b>Team website:</b>
      <A
        class="inline break-words"
        href={team.website}
        target="_blank"
      >
        {team.website}
      </A>
    </p>
    <p>
        <b>Swimcloud:</b>
        <A
          class="inline break-words"
          href={team.swimcloud}
          target="_blank"
        >
          {team.swimcloud}
        </A>
      </p>
    <p><b>Male Rank: </b> {team.mrank}</p>
    <p><b>Female Rank: </b> {team.frank}</p>
</div>