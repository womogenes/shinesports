<script>
    export let value = 5;
</script>

<div class="relative m-10">
    <div class="range" style="--step:1; --min:0; --max:10">
        <input id="range" type="range" min="0" max="10" bind:value={value}/>
    </div>
</div>



<style>
    .range {
    --ticksThickness: 2px;
    --ticksHeight: 30%;
    --ticksColor: silver;
    display: inline-block;
    background: linear-gradient(to right, var(--ticksColor) var(--ticksThickness), transparent 1px) repeat-x;
    background-size: calc(100%/((var(--max) - var(--min)) / var(--step)) - .1%) var(--ticksHeight);
    background-position: 0 bottom;
    position: relative;
    }


    /* min / max labels at the edges */
    .range::before, .range::after {
    font: 12px monospace;
    content: counter(x);
    position: absolute;
    bottom: -2ch;
    }

    .range::before {
    counter-reset: x var(--min);
    transform: translateX(-50%);
    }

    .range::after {
    counter-reset: x var(--max);
    right: 0;
    transform: translateX(50%);
    }


    .range > input {
    width: 300px;
    margin: 0 -6px; /* Critical adjustment */
    }

    /* #range{
        -webkit-appearance: none;
    } */
</style>