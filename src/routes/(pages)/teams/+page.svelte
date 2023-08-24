<script>
  import { A, Button, Card } from 'flowbite-svelte';

  export let data;
  let { teamData } = data;
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/3f784ca570.js"
    crossorigin="anonymous"
  ></script>
</svelte:head>

<h1>Hello there</h1>
<p>
  For now, all this data is fetched from Google Sheets instead of a proper
  database. 👿
</p>

<div class="py-4">
  <div class="flex justify-end"><p>Showing {teamData.length} results</p></div>
  <div class="flex flex-col gap-4">
    {#each teamData as team (team.slug)}
      <a
        class="border-0.5 flex h-36 w-full rounded-sm border border-neutral-200 shadow-md transition-shadow hover:shadow-xl"
        href="/{team.slug}"
      >
        <img
          class="h-full w-36 object-cover"
          src={team.logoURL}
          alt="Team logo"
        />

        <!-- Actual content -->
        <div class="box-border p-6">
          <h4 class="text-blue-800">{team.name}</h4>

          <!-- Basic info -->
          <div class="mt-2 flex text-neutral-600">
            <!-- School or club -->
            <div>
              {#if team.schoolOrClub === 'School'}
                <i class="fa-solid fa-school"></i>
              {:else}
                <i class="fa-solid fa-users"></i>
              {/if}&nbsp;
              <span>{team.schoolOrClub}</span>
            </div>

            <span>&nbsp;&bull;&nbsp;</span>

            <!-- Team types (M/W/Co-Ed) -->
            <div>
              {#if team.teamTypes === 'Only W'}
                <i class="fa-solid fa-venus"></i>
              {:else if team.teamTypes === 'Only M'}
                <i class="fa-solid fa-mars"></i>
              {:else if team.teamTypes === 'Separate M/W'}
                <i class="fa-solid fa-venus"></i>
                <i class="fa-solid fa-mars"></i>
              {:else if team.teamTypes === 'Co-Ed'}
                <i class="fa-solid fa-venus-mars"></i>
              {/if}&nbsp;
              <span>{team.teamTypes}</span>
            </div>

            <span>&nbsp;&bull;&nbsp;</span>

            <!-- Scull/sweep -->
            <div>
              <i class="fa-solid fa-broom -mr-3"></i>
              <i class="fa-solid fa-skull"></i>&nbsp;
              <span
                >{team.scullSweep === 'B'
                  ? 'Scull/sweep both offered'
                  : 'Scull/sweep not both offered'}</span
              >
            </div>
          </div>

          <!-- Address -->
          <div>
            <i class="fa-solid fa-location-dot"></i>&nbsp;
            <A
              class="text-neutral-600"
              href={`https://google.com/maps/place/${team.address}`}
              target="_blank"
              >{team.address}
            </A>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
