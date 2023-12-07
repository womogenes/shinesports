<script>
	import { fade, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Star from './Star.svelte';

	export let rating = null;
	let hoverRating = null;

	export let staticStars;

	export let setRating;

	const handleHover = (id) => () => {
		hoverRating = id;
	}
	const handleRate = (id) => (event) => {
		if (rating && rating.toString() === event.srcElement.dataset.starid
		) {
			// Do something
			return;
		}
		rating = id;
	}

	let stars = [
		{ id: 1, title: 'One Star' },
		{ id: 2, title: 'Two Stars' },
		{ id: 3, title: 'Three Stars' },
		{ id: 4, title: 'Four Stars' },
		{ id: 5, title: 'Five Stars' },
	]

</script>

<div class="flex justify-evenly max-w-xs w-44">
	{#if staticStars}
		{#each stars as star (star.id)}
		<Star 
			filled={setRating ? (setRating >= star.id) : (setRating >= star.id)} 
			starId={star.id}
		/>
		{/each}	

	{:else}
		{#each stars as star (star.id)}
			<Star 
				filled={hoverRating ? (hoverRating >= star.id) : (rating >= star.id)} 
				starId={star.id}
				on:mouseover={handleHover(star.id)} 
				on:mouseleave={() => hoverRating = null}
				on:click={handleRate(star.id)}
			/>
		{/each}
	{/if}
</div>