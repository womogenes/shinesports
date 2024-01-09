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

<div class="w-full flex justify-center items-center">
    <div class="w-full max-w-4xl m-10">
        <h1>Swim teams <i class="fa-solid fa-school" /></h1>

        <div class="flex w-full flex-col items-end text-sm">
        <p>Showing {filteredTeams.length} of {allTeams.length} total teams</p>
        </div>

        <div class="relative flex flex-col items-start gap-4 md:flex-row">
        <!-- Search fields -->
        <div
            class="top-4 flex min-w-[12rem] flex-col gap-4 border border-neutral-200 p-4 pb-6 md:sticky"
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
                class="border-0.5 flex w-full flex-row items-center justify-between gap-0 border border-neutral-200 transition-all hover:bg-neutral-50 sm:gap-4"
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

