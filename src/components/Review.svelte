<script>
    import StarRating from "./StarRating.svelte"

    export let review;

    const formatTime = (time) => {
        const currDate = new Date();
        const currTime = currDate.getTime();
        const difference = currTime - time;
        if (difference < 60000){
            const second = parseInt(difference/60)
            return (second + "s ago")
        }
        else if (difference < 3600000){
            const minute = parseInt(difference/60000)
            return (minute + " min ago")
        }
        else if (difference < 86400000){
            const hour = parseInt(difference/3600000)
            return (hour + " hr ago")
        }
        else if (difference < 2628000000){
            const day = parseInt(difference/86400000)
            return (day + " day(s) ago")
        }
        else if (difference < 31540000000){
            const month = parseInt(difference/2628000000)
            return (month + " month(s) ago")
        }
        else{
            const year = parseInt(difference/31540000000)
            return (year + " year(s) ago")
        }
    } 
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
            <div class="py-5 px-2">
                <h5 class="font-bold">{review.title}</h5>
                <p>{review.comment}</p>
            </div>
        </div>
    </div>
    <div class="w-full flex items-end justify-start p-10">
        <p class="text-xs text-gray-500">{formatTime(review.time)}</p>
    </div>
    <hr>
</div>