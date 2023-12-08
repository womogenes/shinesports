<script>
    import StarRating from "./StarRating.svelte"

    export let review;
</script>

<div class="w-full">
    <hr>
    <div class="w-full p-10 flex flex-row">
        <div class="w-12 text-center">
            <img src="/defaultprofile.png" alt=""/>
            <p>{review.username}</p>
        </div>
        <div class="flex flex-2 flex-col px-10 h-full bg-blue-40">
            <div>
                <StarRating setRating="{review.star}" staticStars="{true}"/>
            </div>
            <div class="py-5">
                <h5 class="font-bold">{review.title}</h5>
                <p>{review.comment}</p>
            </div>
        </div>
    </div>
    <hr>
</div>