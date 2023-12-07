<script>
    import StarRating from "./StarRating.svelte"

    export let review;
</script>

<div class="w-full">
    <hr>
    <div class="w-full p-10 flex flex-cols">
        <div class="w-12 text-center">
            <img src="/defaultprofile.png" alt=""/>
            <p>{review.username}</p>
        </div>
        <div class="flex flex-2 flex-rows p-10">
            <div>
                <StarRating setRating="{review.star}" staticStars="{true}"/>
            </div>
            <div>
                <h5 class="font-bold">{review.title}</h5>
                <p>{review.comment}</p>
            </div>
        </div>
    </div>
    <hr>
</div>