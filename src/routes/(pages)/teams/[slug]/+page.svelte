<script>
  import Fa from 'svelte-fa';
  import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
  import { A } from 'flowbite-svelte';
  import LeafletMap from '$components/LeafletMap.svelte';
  import Review from '$components/Review.svelte';
  import Modal from '$components/Modal.svelte';
  import StarRating from '$components/StarRating.svelte';
  import TeamLineInfo from '../TeamLineInfo.svelte';
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
  import { onMount } from "svelte";


  export let data;
  // const { teamRows, allTeamsInfo } = data;
  const { team, coords, subList, reviewList } = data;

  let snap;

  onMount(() => {
    onSnapshot(collection(db, "teams", team.name, "reviews"), (snapshot) => {
      snap = snapshot.docs;
    });
  });

  const testUser = {
    name: 'test'
  }

  let rating;
  let title;
  let comment;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Id = crypto.randomUUID();
    const date = new Date();
    const time = date.getTime();
    await setDoc(doc(db, "teams", team.name, "reviews", Id), {
      username: testUser.name,
      time: time,
      type: "star",
      star: rating,
      title: title,
      comment: comment,
    });
    rating = null;
    title = "";
    comment = "";
  };

  let utils = new Utils();

  let showModal = false;
</script>

<div class="w-full my-20 flex justify-center">
  <div class="w-full max-w-5xl">
    <A class="mb-4" href="/teams">
      <Fa icon={faArrowLeft} />&nbsp;All teams
    </A>
    
    <div class="mb-3 border" id="top-container">
      <div class="!pointer-events-none -z-10 h-72 sm:h-96">
        <LeafletMap coords={coords} />
      </div>
      <div class="relative">
        <div
          class="absolute -top-7 left-0 bg-white px-4 py-1 font-medium shadow-xl sm:left-8"
        >
          {team.schoolOrClub}
        </div>
        <div class="relative z-10 bg-white px-4 py-4 sm:px-8">
          <A
            class="mb-2 text-[#346dc2]"
            href={team.website}
            target="_blank"
          >
            <h3>{team.name}</h3>
          </A>
          <TeamLineInfo data={team} />
        </div>
    </div>
    
    <div class="px-0 sm:px-8">
      <p>
        <b>Team website:</b>
        <A
          class="inline break-words"
          href={team.website}
          target="_blank"
        >
          {team.website}
        </A>
      </p>
      <p><b>Age range:</b> {team.age}</p>

      {#if team.email !== "N/A"}
      <p>
        <b>Contact email:</b>
        <A href="mailto:{team.email}">{team.email}</A>
      </p>
      {/if}
      {#if team.contact !== "N/A"}
      <p><b>Contact number:</b> {team.contact}</p>
      {/if}
    </div>
    
      <div
        class="flex w-full flex-col justify-between gap-4 sm:flex-row p-10"
        class:mt-8={subList.length > 1}
      >
        {#each subList as team}
          <div class="w-full">
            {#if team.name}<h4>{team.name}</h4>{/if}
            <hr class="mb-2 mt-1" />
            <div class="flex flex-col">
              <span><b>Coach name:</b> {team.coach}</span>
              {#if team.email !== "N/A"}
                <span>
                  <b>Contact email:</b>
                  <A href="mailto:{team.email}">{team.email}</A>
                </span>
              {/if}
              {#if team.contact && team.contact !== "N/A"}
                <span><b>Contact number:</b> {team.contact}</span>
              {/if}
              {#if team.size}
                <span><b>Team size:</b> {team.size}</span>
              {/if}
              {#if team.schedule}
                <span><b>Practice schedule:</b> {team.schedule}</span>
              {/if}
            </div>
          </div>
        {/each}
      </div>
      <div class="w-full m-10">
        <h3>Reviews</h3>
        {#each reviewList as review}
          <Review bind:review></Review>
        {/each}
        <Button on:click={() => (showModal = true)}>Write a Review!</Button>
      </div>
      <div>
      </div>
      <Modal bind:showModal on:close{utils.countChar()}>
        <div class="p-10 max-h-32">
          <form class="grid grid-rows-6" on:submit={handleSubmit}>
            <StarRating bind:rating={rating} staticStars="{false}"/>
            <Input type="hidden" id="rating" name="rating" value={rating}></Input>
            <input class="p-5 w-32 h-10 px-3 my-5" type="text" id="title" name="title" placeholder="Title" maxlength=100 bind:value={title}/>
            <div class="flex flex-col">
              <textarea class="h-32" id="comment" name="comment" placeholder="Comments" style="resize: none;" maxlength=5000 bind:value={comment} on:input={() => utils.countChar()}></textarea>  
            </div>
            <div id="the-count">
              <span id="current">0</span>
              <span id="maximum">/ 5000</span>
            </div>
            <div class="w-full flex justify-center items-center">
              <Button class="w-64" type="submit" on:click={() => (showModal = false)}>Submit Review!</Button>       
            </div> 
          </form>
        </div>
      </Modal>   
    </div>
  </div>
</div>


<!-- <A class="mb-4" href="/teams">
  <Fa icon={faArrowLeft} />&nbsp;All teams
</A>

<div class="mb-3 border" id="top-container">
  <div class="!pointer-events-none -z-10 h-72 sm:h-96">
    <LeafletMap coords={data.coords} />
  </div>
  <div class="relative">
    <div
      class="absolute -top-7 left-0 bg-white px-4 py-1 font-medium shadow-xl sm:left-8"
    >
      {data.basicInfo.schoolOrClub}
    </div>
    <div class="relative z-10 bg-white px-4 py-4 sm:px-8">
      <A
        class="mb-2 text-[#346dc2]"
        href={allTeamsInfo.website}
        target="_blank"
      >
        <h3>{data.basicInfo.name}</h3>
      </A>
      <TeamLineInfo data={data.basicInfo} />
    </div>
  </div>
</div>

<div class="px-0 sm:px-8">
  <p>
    Data comes from the second sheet of
    <A
      href="https://docs.google.com/spreadsheets/d/122yIAMXWzBnx5rYZhnzwix6LSAiOEfdUbItxP6JzWmA/edit#gid=753373721"
    >
      this spreadsheet
    </A>.
  </p>

  <p>
    Team website: <A
      class="inline break-words"
      href={allTeamsInfo.website}
      target="_blank"
    >
      {allTeamsInfo.website}
    </A>
  </p>
  <p><b>Age range:</b> {allTeamsInfo.ageRange}</p>

  Different teams -->
  <!-- <div
    class="flex w-full flex-col justify-between gap-4 sm:flex-row"
    class:mt-8={teamRows.length > 1}
  >
    {#each teamRows as teamRow}
      <div class="w-full">
        {#if teamRow.teamType}<h4>{teamRow.teamType}</h4>{/if}
        <hr class="mb-2 mt-1" />
        <div class="flex flex-col">
          <span><b>Coach name:</b> {teamRow.coachName}</span>
          {#if teamRow.contactEmail}
            <span>
              <b>Contact email:</b>
              <A href="mailto:{teamRow.contactEmail}">{teamRow.contactEmail}</A>
            </span>
          {/if}
          {#if teamRow.contactNumber}
            <span><b>Contact number:</b> {teamRow.contactNumber}</span>
          {/if}
          {#if teamRow.teamSize}
            <span><b>Team size:</b> {teamRow.teamSize}</span>
          {/if}
          {#if teamRow.practiceSchedule}
            <span><b>Practice schedule:</b> {teamRow.practiceSchedule}</span>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div> -->
