<script>
  import Fa from 'svelte-fa';
  import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
  import { A } from 'flowbite-svelte';
  import LeafletMap from '$components/LeafletMap.svelte';
  import TeamLineInfo from '../TeamLineInfo.svelte';

  export let data;
  const { teamRows, allTeamsInfo } = data;
</script>

<A class="mb-4" href="/teams">
  <Fa icon={faArrowLeft} />&nbsp;All teams
</A>

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
      <A
        class="mb-2 text-[#346dc2]"
        href={allTeamsInfo.website}
        target="_blank"
      >
        <h3>{data.basicInfo.name}</h3>
      </A>
      <TeamLineInfo data={data.basicInfo} />
    </div>
  </div>
</div>

<div class="px-0 sm:px-8">
  <p>
    Data comes from the second sheet of
    <A
      href="https://docs.google.com/spreadsheets/d/122yIAMXWzBnx5rYZhnzwix6LSAiOEfdUbItxP6JzWmA/edit#gid=753373721"
    >
      this spreadsheet
    </A>.
  </p>

  <p>
    Team website: <A
      class="inline break-words"
      href={allTeamsInfo.website}
      target="_blank"
    >
      {allTeamsInfo.website}
    </A>
  </p>
  <p><b>Age range:</b> {allTeamsInfo.ageRange}</p>

  <!-- Different teams -->
  <div class="flex w-full flex-col justify-between gap-4 sm:flex-row">
    {#each teamRows as teamRow}
      <div class="w-full">
        {#if teamRow.teamType}<h4>{teamRow.teamType}</h4>{/if}
        <hr class="mb-2 mt-1" />
        <div class="flex flex-col">
          <span><b>Coach name:</b> {teamRow.coachName}</span>
          {#if teamRow.contactEmail}
            <span>
              <b>Contact email:</b>
              <A href="mailto:{teamRow.contactEmail}">{teamRow.contactEmail}</A>
            </span>
          {/if}
          {#if teamRow.contactNumber}
            <span><b>Contact number:</b> {teamRow.contactNumber}</span>
          {/if}
          {#if teamRow.teamSize}
            <span><b>Team size:</b> {teamRow.teamSize}</span>
          {/if}
          {#if teamRow.practiceSchedule}
            <span><b>Practice schedule:</b> {teamRow.practiceSchedule}</span>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
