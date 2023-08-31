<script>
  import {
    A,
    Button,
    Card,
    Checkbox,
    Drawer,
    CloseButton,
  } from 'flowbite-svelte';
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
  <div class="flex flex-col gap-4 md:flex-row">
    <!-- Search fields -->
    <div
      class="flex min-w-[12rem] gap-4 rounded border border-neutral-200 p-4 pb-6 md:flex-col"
    >
      <div class="flex flex-col gap-2">
        <b>Team association</b>
        <Checkbox>School</Checkbox>
        <Checkbox>Club</Checkbox>
      </div>
      <hr />
      <div class="flex flex-col gap-2">
        <b>Gender</b>
        <Checkbox>Has womens</Checkbox>
        <Checkbox>Has mens</Checkbox>
        <Checkbox>Has co-ed</Checkbox>
      </div>
      <hr />
      <div class="flex flex-col gap-2">
        <b>Scull/sweep</b>
        <Checkbox>Womens team</Checkbox>
        <Checkbox>Mens team</Checkbox>
      </div>
    </div>

    <!-- Main list -->
    <div class="flex w-full flex-col gap-4">
      {#each teamData as team (team.slug)}
        <a
          class="border-0.5 flex w-full flex-row items-center justify-between gap-0 rounded-sm border border-neutral-200 transition-shadow hover:shadow-xl sm:gap-4"
          href="/teams/{team.slug}"
        >
          <!-- Actual content -->
          <div class="box-border p-6">
            <h4 class="mb-1 text-[#346dc2]">{team.name}</h4>

            <!-- Basic info -->
            <div class="flex flex-wrap text-neutral-600">
              <!-- School or club -->
              <div>
                {#if team.schoolOrClub === 'School'}
                  <Fa icon={faSchool} />
                {:else}
                  <Fa icon={faUsers} />
                {/if}
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
                {:else}
                  <Fa icon={faNeuter} />
                {/if}
                <span>{team.teamTypes}</span>
              </div>

              <span>&nbsp;&bull;&nbsp;</span>

              <!-- Scull/sweep -->
              <div>
                <Fa icon={faSkull} />
                <Fa icon={faBroom} />
                <span
                  >{team.scullSweep === 'B'
                    ? 'Scull/sweep both offered'
                    : 'Scull/sweep not both offered'}</span
                >
              </div>
            </div>

            <!-- Address -->
            <div class="text-neutral-600">
              <Fa icon={faLocationDot} />&nbsp;
              <a
                class="underline-offset-2 hover:underline"
                href={`https://google.com/maps/place/${team.address}`}
                target="_blank"
                >{team.address}
              </a>
            </div>
          </div>

          <img
            class="m-4 h-24 w-24 object-contain"
            src={team.logoURL}
            alt="Team logo"
          />
        </a>
      {/each}
    </div>
  </div>
</div>

<style>
  :global(.svelte-fa) {
    display: inline;
  }
</style>
