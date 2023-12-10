<script>
	export let title = 'star';
	export let filled = false;
	export let partialFilled = false;
	export let starId;

	export let partial; 
    let fillPercentage = partial*100;
</script>
<style>
	.star {
		margin-right: 4px;
	}
	.starPath {
		fill: none;
		stroke: #999;
	}
	.filled {
		fill: rgb(255, 179, 57);
	}
	.partialFilled {
		fill: url(#grad);
	}
</style>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
{#if !partialFilled}
	<svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 51 48" class="star" on:mouseover on:mouseleave on:click data-starid={starId} let:class>
		<title>{title}</title>
		<path class:filled  data-starid={starId} class="starPath" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
	</svg>
{:else}
	<svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 51 48" class="star">
		<defs>
		<linearGradient id="grad">
			<stop offset="0%" stop-color="rgb(255, 179, 57)" />
			<stop offset="{fillPercentage}%" stop-color="rgb(255, 179, 57)" />
			<stop offset="{fillPercentage}%" stop-color="white" />
			<stop offset="100%" stop-color="white" />
		</linearGradient>
		</defs>
		<title>{title}</title>
		<path class:partialFilled data-starid={starId} class="starPath" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
	</svg>
{/if}