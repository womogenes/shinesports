<script>
    import LeafletMap from '$components/LeafletMap.svelte';
    import TeamLineInfo from '../../TeamLineInfo.svelte';
    import { A } from 'flowbite-svelte';
    export let data = data;

    const { team, coords, subList} = data;
</script>



<div class="!pointer-events-none -z-10 h-72 sm:h-96">
    <LeafletMap coords={coords} />
  </div>
  <div class="relative">
    <div
      class="absolute -top-7 left-0 bg-white px-4 py-1 font-medium shadow-xl sm:left-8"
    >
      {team.schoolOrClub}
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
    <p><b>Age range:</b> {team.age}</p>

    {#if team.email !== "N/A"}
    <p>
      <b>Contact email:</b>
      <A href="mailto:{team.email}">{team.email}</A>
    </p>
    {/if}
    {#if team.contact !== "N/A"}
    <p><b>Contact number:</b> {team.contact}</p>
    {/if}
</div>

<div
class="flex w-full flex-col justify-between gap-4 sm:flex-row p-10"
class:mt-8={subList.length > 1}
>
{#each subList as team}
  <div class="w-full">
    {#if team.name}<h4>{team.name}</h4>{/if}
    <hr class="mb-2 mt-1" />
    <div class="flex flex-col">
      <span><b>Coach name:</b> {team.coach}</span>
      {#if team.email !== "N/A"}
        <span>
          <b>Contact email:</b>
          <A href="mailto:{team.email}">{team.email}</A>
        </span>
      {/if}
      {#if team.contact && team.contact !== "N/A"}
        <span><b>Contact number:</b> {team.contact}</span>
      {/if}
      {#if team.size}
        <span><b>Team size:</b> {team.size}</span>
      {/if}
      {#if team.schedule}
        <span><b>Practice schedule:</b> {team.schedule}</span>
      {/if}
    </div>
  </div>
{/each}
</div>