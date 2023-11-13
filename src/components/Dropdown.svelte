<script>
    import Utils from '../routes/utils.js';

    let utils = new Utils();
    const contentId = Math.random();
    const signId = Math.random();

    export let title = "Insert Title Here";
    export let text = "Insert Text Here";
</script>

<div class="w-full">
    <hr>
    <button color="light" outline="false" class="py-10 w-full text-black flex" on:click={() => utils.dropdown(contentId, signId)}>
        <p class="flex-2 text-left w-full text-xl mr-5">
            {title}
        </p>
        <p id="{signId}" class="flex-1 text-right w-full text-xl">
            +
        </p>
    </button>
    <div id="{contentId}" class="flex w-full" style="display: none">
        <p class="text-left pb-10 mr-5">
            {text}
        </p>
    </div>
</div>