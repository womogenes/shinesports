<script>
	import { scaleLinear } from 'd3-scale';

	const points = [
		{ question: 1, rating: 2, category: "recruitment" },
		{ question: 2, rating: 3, category: "recruitment" },
		{ question: 3, rating: 4, category: "recruitment" },
		{ question: 1, rating: 2, category: "coach" },
		{ question: 2, rating: 3, category: "coach" },
		{ question: 3, rating: 4, category: "coach" },
        { question: 4, rating: 2, category: "coach" },
		{ question: 1, rating: 3, category: "team" },
		{ question: 2, rating: 4, category: "team" },
        { question: 3, rating: 2, category: "team" },
		{ question: 4, rating: 3, category: "team" },
	];

	const xTicks = [1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4];
	const yTicks = [0, 2, 4, 6, 8, 10];
	const padding = { top: 20, right: 15, bottom: 20, left: 25 };

	let width = 500;
	let height = 200;

	function formatMobile(tick) {
		return "'" + tick.toString().slice(-2);
	}

	$: xScale = scaleLinear()
		.domain([0, xTicks.length])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain([0, Math.max.apply(null, yTicks)])
		.range([height - padding.bottom, padding.top]);

	$: innerWidth = width - (padding.left + padding.right);
	$: barWidth = innerWidth / xTicks.length / 3;
</script>

<!-- <h2>US rating by question</h2> -->

<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
	<svg>
		<!-- y axis -->
		<g class="axis y-axis">
			{#each yTicks as tick}
				<g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
					<line x2="100%" />
					<text y="-4">{tick} {tick === 20 ? ' per 1,000 population' : ''}</text>
				</g>
			{/each}
		</g>

		<!-- x axis -->
		<g class="axis x-axis">
			{#each points as point, i}
				<g class="tick" transform="translate({xScale(i)},{height})">
					<text x={barWidth / 2} y="-4">{width > 380 ? point.question : formatMobile(point.question)}</text>
				</g>
			{/each}
		</g>

		<g class="bars">
			{#each points as point, i}
				<rect
					x={xScale(i) + 2}
					y={yScale(point.rating)}
					width={barWidth - 4}
					height={yScale(0) - yScale(point.rating)}
                    rx="5"
                    ry="5"
                    style={(point.category == "recruitment")? "fill: red;" : (point.category == "coach")? "fill: blue;" : "fill: green;"}
				/>
			{/each}
		</g>
	</svg>
</div>

<style>
	h2 {
		text-align: center;
	}

	.chart {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
	}

	svg {
		position: relative;
		width: 100%;
		height: 200px;
	}

	.tick {
		font-family: Helvetica, Arial;
		font-size: 0.725em;
		font-weight: 200;
	}

	.tick line {
		stroke: #e2e2e2;
		stroke-dasharray: 2;
	}

	.tick text {
		fill: #ccc;
		text-anchor: start;
	}

	.tick.tick-0 line {
		stroke-dasharray: 0;
	}

	.x-axis .tick text {
		text-anchor: middle;
	}

	.bars rect {
        border-radius: 50px;
		stroke: none;
		opacity: 0.65;
	}
</style>
