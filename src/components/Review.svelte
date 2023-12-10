<script>
    import StarRating from "./StarRating.svelte";
    import { Button, Input } from 'flowbite-svelte';
    import Utils from '/src/routes/utils.js';
    import db from "/src/firebase.js";
    import {
        setDoc,
        collection,
        onSnapshot,
        deleteDoc,
        doc,
    } from "firebase/firestore";

    const utils = new Utils();

    export let review;

    export let username;

    export let teamName;

    export let editMode = false;

    export let editing;

    export let editTrue;

    export let editFalse;

    let rating = review.star;
    let title = review.title;
    let comment = review.comment;

    const formatTime = (time) => {
        const currDate = new Date();
        const currTime = currDate.getTime();
        const difference = currTime - time;
        if (difference < 60000){
            const second = parseInt(difference/1000)
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
    const handleSubmit = async (e) => {
        editMode = false;
        e.preventDefault();
            await setDoc(doc(db, "teams", teamName, "reviews", review.id), {
                username: review.username,
                time: review.time,
                type: "star",
                star: rating,
                title: title,
                comment: comment,
                edited: true,
            });
        editFalse();
    };

</script>

<div class="w-full">
    <hr>
    {#if editMode && (review.username == username)}
    <div class="p-10">
        <form on:submit={handleSubmit}>
            <div class="flex flex-2 flex-col px-10 h-full bg-blue-40">
                <div>
                    <StarRating bind:rating={rating} setRating="" staticStars="{false}" partialStars="{false}"/>
                </div>
                <div class="flex flex-col py-5 px-2">
                    <input class="p-5 w-32 h-10 px-3 my-5" type="text" id="title" name="title" placeholder="Title" bind:value={title} maxlength=100/>
                    <textarea class="h-32" id="comment" name="comment" placeholder="Comments" style="resize: none;" bind:value={comment} maxlength=5000 on:input={() => utils.countChar()}></textarea>  
                    <div id="the-count">
                        <span id="current">0</span>
                        <span id="maximum">/ 5000</span>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center items-center">
                <button class="w-64 underline text-gray-500" on:click={() => {editMode = false; rating = review.star; title = review.title; comment = review.comment; editFalse();}}>Cancel</button>  
                <button class="w-64 underline text-blue-500" type="submit">Save</button>        
            </div> 
        </form>
    </div>
    {:else}
        <div class="w-full p-10 flex flex-row">
            <div class="w-12 text-center">
                <img src="/defaultprofile.png" alt=""/>
                <p>{review.username}</p>
            </div>
            <div class="flex flex-2 flex-col px-10 h-full bg-blue-40">
                <div>
                    <StarRating setRating="{review.star}" staticStars="{true}" partialStars="{false}"/>
                </div>
                <div class="py-5 px-2">
                    <h5 class="font-bold">{review.title}</h5>
                    <p>{review.comment}</p>
                </div>
            </div>
        </div>
    {/if}
    <div class="w-full flex flex-col justify-start p-10">
        {#if !editMode}
            {#if !editing && (review.username == username)}
                <a href="#" class="underline text-blue-500" on:click={() => {editMode = true; editTrue();}}>edit</a>
            {/if}
            {#if review.edited}
                <p class="text-xs text-gray-500">{formatTime(review.time)} | edited</p>
            {:else}
                <p class="text-xs text-gray-500">{formatTime(review.time)}</p>
            {/if}
        {/if}
    </div>
    <hr>
</div>