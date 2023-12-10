<script>
    import Slider from "./Slider.svelte";
    export let values = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
</script>

<div class="my-10">
    <hr>
    <div class="my-10">
        <h4>Recruitment</h4>
        <p>Coaches are supportive in the recruitment process</p>
        <Slider bind:value={values[0]}></Slider>
        <p>Team helps athletes get noticed by recruiting coaches</p>
        <Slider bind:value={values[1]}></Slider>
        <p>Team prepares athletes well for the recruitment process</p>
        <Slider bind:value={values[2]}></Slider>
        <h4>Coaching</h4>
        <p>Coaches emphasize "how" athletes can improve rather than just telling them what they need to improve</p>
        <Slider bind:value={values[3]}></Slider>
        <p>Coaches give a balance of positive feedback and constructive criticism</p>
        <Slider bind:value={values[4]}></Slider>
        <p>Coaches get to know athletes personally</p>
        <Slider bind:value={values[5]}></Slider>
        <p>Coaches communicate effectively and clearly with athletes</p>
        <Slider bind:value={values[6]}></Slider>
        <h4>Team Culture</h4>
        <p>Getting integrated into the team was a smooth process</p>
        <Slider bind:value={values[7]}></Slider>
        <p>Team is more competitive than collaborative</p>
        <Slider bind:value={values[8]}></Slider>
        <p>Everyone feels included on the team</p>
        <Slider bind:value={values[9]}></Slider>
        <p>Teammates push each other to be better as an athlete and as a person</p>
        <Slider bind:value={values[10]}></Slider>
    </div>
    <hr>
</div>


<style>
</style>