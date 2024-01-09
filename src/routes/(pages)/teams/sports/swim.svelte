<script>
    import { A, Checkbox, Radio } from 'flowbite-svelte';
    import TeamLineInfo from '../TeamLineInfo.svelte';
    import { flip } from 'svelte/animate';
    import { fade, fly } from 'svelte/transition';


    export let allTeams = allTeams;
    export let type = type;

    let sortedTeams = allTeams;

    const sortTeams = (a, b) => {
        console.log("hi")
        if(filters.sort == "mrank"){
            return(b.mrank - a.mrank);
        }
        else if(filters.sort == "frank"){
            return(b.frank - a.frank);
        }
        else{
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }
    }

    const updateSort = () => {
        sortedTeams = allTeams.sort(sortTeams);
    }

    let filters = {
        sort: 'any',
    };

    // $: sortedTeams = allTeams.sort(sortTeams);

    $: filteredTeams = sortedTeams.filter((team) => {
        return true;
    });
</script>

<div class="w-full flex justify-center items-center flex-col">
    <div class="w-full h-96 flex items-center justify-center flex-col" id="banner">
        <p id="title" class="text-9xl font-bold text-white">Swim<i class="fa-solid fa-school" /></p>
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
        <div class="flex w-full flex-col items-end text-sm">
        <p class="text-black">Showing {filteredTeams.length} of {allTeams.length} total teams</p>
        </div>

        <div class="relative flex flex-col items-start gap-4 md:flex-row">
        <!-- Search fields -->
        <div
            class="top-4 flex min-w-[12rem] flex-col gap-4 border border-neutral-200 p-4 pb-6 md:sticky bg-white"
        >
            <div class="flex flex-col gap-2">
                <Radio name="any" value="any" bind:group={filters.sort} on:change={updateSort}>
                    Sort Alphabetical
                </Radio>
                <Radio
                    name="mrank"
                    value="mrank"
                    bind:group={filters.sort}
                    on:change={updateSort}
                >
                    Sort by Boys Team Rankings
                </Radio>
                <Radio name="frank" value="frank" bind:group={filters.sort} on:change={updateSort}>
                    Sort by Girls Team Rankings
                </Radio>
            </div>
        </div>

        <!-- Main list -->
        <div class="flex w-full flex-col gap-4">
            {#each sortedTeams as team (team.slug)}
            <a
                class="border-0.5 flex w-full flex-row items-center justify-between gap-0 border border-neutral-200 transition-all hover:bg-neutral-50 sm:gap-4 bg-white"
                href="/teams/{team.slug}-{type}"
                in:fade={{ duration: 500 }}
                animate:flip={{ duration: 500 }}
            >
                <!-- Actual content -->
                <div class="box-border p-5">
                <h4 class="mb-1 text-[#346dc2]">{team.name}</h4>
                <TeamLineInfo data={team} type={"swim"}/>
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
        background-image: url("/swim.jpg");
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

