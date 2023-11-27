<script>
  import { A, Checkbox, Radio } from 'flowbite-svelte';
  import TeamLineInfo from './TeamLineInfo.svelte';
  import { flip } from 'svelte/animate';
  import { fade, fly } from 'svelte/transition';

  export let data;

  // export const actions = {
  //   login: async ({request}) => {
  //     const selection = await request.formData();
  //   }
  // }

  // console.log(actions.login(selection));

  //https://kit.svelte.dev/docs/form-actions

  let { allTeams } = data;

  let filters = {
    schoolOrClub: 'Any',
    hasWomens: false,
    hasMens: false,
    hasCoed: false,
  };

  $: filteredTeams = allTeams.filter((team) => {
    // School/club filter
    if (
      filters.schoolOrClub !== 'Any' &&
      filters.schoolOrClub !== team.schoolOrClub
    ) {
      return false;
    }

    // Team types filter
    if (filters.hasWomens && ['Only M', 'Co-Ed'].includes(team.teamTypes))
      return false;
    if (filters.hasMens && ['Only W', 'Co-Ed'].includes(team.teamTypes))
      return false;
    if (filters.hasCoed && team.teamTypes !== 'Co-Ed') return false;

    // Scull/sweep filter

    return true;
  });
</script>

<div class="w-full flex justify-center items-center">
  <div class="w-full max-w-4xl m-10">
    <h1>Crew teams <i class="fa-solid fa-school" /></h1>
    <!-- <p>
      For now, all this data is fetched from Google Sheets instead of a proper
      database. 👿
    </p>
    <p>
      <A
        href="https://docs.google.com/spreadsheets/d/122yIAMXWzBnx5rYZhnzwix6LSAiOEfdUbItxP6JzWmA/edit#gid=0"
        target="_blank"
        >Spreadsheet
      </A>
    </p> -->

    <div class="flex w-full flex-col items-end text-sm">
      <p>Showing {filteredTeams.length} of {allTeams.length} total teams</p>
    </div>

    <div class="relative flex flex-col items-start gap-4 md:flex-row">
      <!-- Search fields -->
      <div
        class="top-4 flex min-w-[12rem] flex-col gap-4 border border-neutral-200 p-4 pb-6 md:sticky"
      >
        <div class="flex flex-col gap-2">
          <b>Team association</b>
          <Radio
            name="schoolOrClub"
            value="School"
            bind:group={filters.schoolOrClub}
          >
            School
          </Radio>
          <Radio name="schoolOrClub" value="Club" bind:group={filters.schoolOrClub}>
            Club
          </Radio>
          <Radio name="schoolOrClub" value="Any" bind:group={filters.schoolOrClub}>
            Both
          </Radio>
        </div>
        <hr />
        <div class="flex flex-col gap-2">
          <b>Team type</b>
          <Checkbox bind:checked={filters.hasWomens}>Has womens</Checkbox>
          <Checkbox bind:checked={filters.hasMens}>Has mens</Checkbox>
          <Checkbox bind:checked={filters.hasCoed}>Has co-ed</Checkbox>
        </div>
        <hr />
        <div class="flex flex-col gap-2">
          <b>Scull/sweep</b>
          <Checkbox>B</Checkbox>
        </div>
      </div>

      <!-- Main list -->
      <div class="flex w-full flex-col gap-4">
        {#each filteredTeams as team (team.slug)}
          <a
            class="border-0.5 flex w-full flex-row items-center justify-between gap-0 border border-neutral-200 transition-all hover:bg-neutral-50 sm:gap-4"
            href="/teams/{team.slug}"
            in:fade={{ duration: 500 }}
            animate:flip={{ duration: 500 }}
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
        {:else}
          <p in:fade>No teams match your filters ☹️ Try loosening them.</p>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  :global(.svelte-fa) {
    display: inline;
  }
</style>
