<script>
    import { A, Checkbox, Radio } from 'flowbite-svelte';
    import TeamLineInfo from '../TeamLineInfo.svelte';
    import { flip } from 'svelte/animate';
    import { fade, fly } from 'svelte/transition';


    export let allTeams = allTeams;
    export let type = type;


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

<div class="w-full flex justify-center items-center flex-col">
        <div class="w-full h-96 flex items-center justify-center flex-col" id="banner">
        <p id="title" class="text-9xl font-bold text-white">Crew<i class="fa-solid fa-school" /></p>
    </div>
    <div class="w-full">
        <div>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2000 45"
            class="absolute -translate-y-[50%]"
            >
            <path
                d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z"
                transform="translate(0 0)"
                fill="#ccf3ff"
            ></path>
            </svg>
        </div>
    </div>
    <div class="w-full max-w-4xl m-10">
        <!-- <h1>{sport}</h1>
        <h1>{zip}</h1> -->
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
        <p class="text-black">Showing {filteredTeams.length} of {allTeams.length} total teams</p>
        </div>

        <div class="relative flex flex-col items-start gap-4 md:flex-row">
        <!-- Search fields -->
        <div
            class="top-4 flex min-w-[12rem] flex-col gap-4 border border-neutral-200 p-4 pb-6 md:sticky bg-white"
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
                class="border-0.5 flex w-full flex-row items-center justify-between gap-0 border border-neutral-200 transition-all hover:bg-neutral-50 sm:gap-4 bg-white"
                href="/teams/{team.slug}-{type}"
                in:fade={{ duration: 500 }}
                animate:flip={{ duration: 500 }}
            >
                <!-- Actual content -->
                <div class="box-border p-5">
                <h4 class="mb-1 text-[#346dc2]">{team.name}</h4>
                <TeamLineInfo data={team} type={"crew"}/>
                </div>

                <img
                class="m-2 h-12 w-12 object-contain sm:m-4 sm:h-24 sm:w-24"
                src={team.logoURL}
                alt="Team logo"
                />
            </a>
            {:else}
            <p class="text-black" in:fade>No teams match your filters ☹️ Try loosening them.</p>
            {/each}
        </div>
        </div>
    </div>
</div>

  
<style>
    :global(.svelte-fa) {
      display: inline;
    }

    #banner {
        background-image: url("/crew.jpg");
        background-position: center;
        background-size: cover;
    }

    #title {
        text-shadow: 1px 1px 2px black;
    }

    a:hover {
    transform: scale(1.02);
    }

</style>

