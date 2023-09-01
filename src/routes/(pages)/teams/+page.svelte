<script>
  import { A, Checkbox } from 'flowbite-svelte';
  import TeamLineInfo from './TeamLineInfo.svelte';

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
      class="flex min-w-[12rem] flex-col gap-4 border border-neutral-200 p-4 pb-6"
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
          class="border-0.5 flex w-full flex-row items-center justify-between gap-0 border border-neutral-200 transition-shadow hover:shadow-lg sm:gap-4"
          href="/teams/{team.slug}"
        >
          <!-- Actual content -->
          <div class="box-border p-5">
            <h4 class="mb-1 text-[#346dc2]">{team.name}</h4>
            <TeamLineInfo data={team} />
          </div>

          <img
            class="m-2 h-12 w-12 object-contain sm:m-4 sm:h-24 sm:w-24"
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
