<script>
  import { A, Button, Card } from 'flowbite-svelte';
  import Fa from 'svelte-fa';
  import {
    faSchool,
    faUsers,
    faVenus,
    faMars,
    faVenusMars,
    faNeuter,
    faBroom,
    faSkull,
    faLocationDot,
  } from '@fortawesome/free-solid-svg-icons';

  export let data;
  let { teamData } = data;
</script>

<h1>Crew teams <i class="fa-solid fa-school" /></h1>
<p>
  For now, all this data is fetched from Google Sheets instead of a proper
  database. 👿
</p>
<p>
  <A
    href="https://docs.google.com/spreadsheets/d/122yIAMXWzBnx5rYZhnzwix6LSAiOEfdUbItxP6JzWmA/edit#gid=0"
    target="_blank"
    >Spreadsheet
  </A>
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
          <h4 class="text-sky-700">{team.name}</h4>

          <!-- Basic info -->
          <div class="mt-2 flex text-neutral-600">
            <!-- School or club -->
            <div>
              {#if team.schoolOrClub === 'School'}
                <Fa icon={faSchool} />
              {:else}
                <Fa icon={faUsers} />
              {/if}&nbsp;
              <span>{team.schoolOrClub}</span>
            </div>

            <span>&nbsp;&bull;&nbsp;</span>

            <!-- Team types (M/W/Co-Ed) -->
            <div>
              {#if team.teamTypes === 'Only W'}
                <Fa icon={faVenus} />
              {:else if team.teamTypes === 'Only M'}
                <Fa icon={faMars} />
              {:else if team.teamTypes === 'Separate M/W'}
                <Fa icon={faVenus} />
                <Fa icon={faMars} />
              {:else if team.teamTypes === 'Co-Ed'}
                <Fa icon={faVenusMars} />
              {/if}&nbsp;
              <span>{team.teamTypes}</span>
            </div>

            <span>&nbsp;&bull;&nbsp;</span>

            <!-- Scull/sweep -->
            <div>
              <Fa class="-mr-3" icon={faBroom} />
              <Fa icon={faSkull} />&nbsp;
              <span
                >{team.scullSweep === 'B'
                  ? 'Scull/sweep both offered'
                  : 'Scull/sweep not both offered'}</span
              >
            </div>
          </div>

          <!-- Address -->
          <div>
            <Fa icon={faLocationDot} />&nbsp;
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

<style>
  :global(.svelte-fa) {
    display: inline;
  }
</style>
