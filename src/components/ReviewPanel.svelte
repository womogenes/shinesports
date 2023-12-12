<script>
import StarRating from "./StarRating.svelte";
import BarChart from './BarChart.svelte';

export let averageStar;

export let starRatios;

export let filter;

export let removeFilter;

export let snap;

let sum = 0;

starRatios.forEach((num) => {
    sum += num
})

let percentage = starRatios.map((num) => {
    return Math.round((num / sum)*100)
});

let stars = [
        { id: 5, value: percentage[4] },
        { id: 4, value: percentage[3] },
        { id: 3, value: percentage[2] },
        { id: 2, value: percentage[1] },
		{ id: 1, value: percentage[0]},	
	]
</script>

<div class="w-full my-10">
    <div class="w-full flex flex-row items-center">
        <StarRating setRating="{averageStar}" partialStars="{true}" staticStars="{false}"/>
        <p class="text-xl">({sum})</p>
    </div>
    {#if sum != 0}
        <hr class="my-10">
        <div class="w-full flex">
            <div class="flex-1 h-full flex-col justify-evenly">
                {#each stars as star}
                    <a href="#" class="flex flex-row" on:click={() => filter(star.id)}>
                        <div class="hoverline w-12 min-w-fit m-2 flex justify-start items-center">
                            {star.id} star
                        </div>
                        <div id="{star.id}" class="w-full rounded-lg border-2 h-3 my-5 overflow-hidden">
                            <div style="height: 100%; background-color: rgb(255, 179, 57); width: {star.value}%;">
                            </div>
                        </div>
                        <div class="hoverline w-12 min-w-fit m-2 flex justify-end items-center">
                            <p>{star.value}%</p>
                        </div>
                    </a>
                {/each}
                <a href="#" class="underline text-blue-500" on:click={() => removeFilter()}>see all reviews</a>
            </div>
        </div>
        <hr class="my-10">
        <BarChart></BarChart>
    {/if}
</div>

<style>
    .hoverline:hover {
        text-decoration: underline;
    }
</style>