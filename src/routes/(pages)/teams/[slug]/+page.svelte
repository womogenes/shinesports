<script>
  import Fa from 'svelte-fa';
  import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
  import { A } from 'flowbite-svelte';
  import LeafletMap from '$components/LeafletMap.svelte';
  import Review from '$components/Review.svelte';
  import ReviewPanel from '$components/ReviewPanel.svelte';
  import Modal from '$components/Modal.svelte';
  import StarRating from '$components/StarRating.svelte';
  import StatsReview from '$components/StatsReview.svelte';
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

  import Crew from './sports/crew.svelte';
  import Swim from './sports/swim.svelte';


  export let data;
  // const { teamRows, allTeamsInfo } = data;
  const { type, team, coords, subList, starsList, statsList } = data;

  let starRating = starsList;

  let snap;

  let filtered = false;

  let filteredId;

  let filteredReviews;

  let reviewMode;

  let statsRating = statsList;

  const averageStarReviews = (list) => {
    let sum = 0;
    let size = list.length;
    list.forEach((rating) => {
      sum += rating.star;
    })
    return (sum / size);
  };

  const countStarRatios = (list) => {
    let arr = [0, 0, 0, 0, 0]
    list.forEach((rating) => {
      let star = rating.star;
      arr[star - 1] += 1;
    })
    return arr;
  }

  const averageStatsReviews = (list) => { 
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    list.forEach((rating) => {
      for (let i = 0; i < rating.stats.length; i++) {
        arr[i] = arr[i] + rating.stats[i];
      }
    })
    arr = arr.map((element) => {
      return element / list.length
    })
    return arr;
  }

  const createFilter = (id) => {
    filtered = true;
    filteredId = id;
    filter(filteredId);
  }

  const removeFilter = () => {
    filtered = false;
  }

  const filter = (id) => {
    filteredReviews = starRating.filter((review) => review.star == id);
  }

  let averageStar = averageStarReviews(starRating);

  let starRatios = countStarRatios(starRating);

  let averageStats = averageStatsReviews(statsRating);


  onMount(() => {
    onSnapshot(collection(db, type, team.ref, "reviews"), (snapshot) => {
      snap = snapshot.docs;

      let newStars = []

      let newStats = []
  
      snap.forEach((doc) => {
        if(doc.data()["type"] == "star" || doc.data()["type"] == "both"){
          const review = 
          {
            id: doc.id,
            username: doc.data()["username"],
            star: doc.data()["star"],
            title: doc.data()["title"],
            comment: doc.data()["comment"],
            time: doc.data()["time"],
            type: doc.data()["type"],
            edited: doc.data()["edited"],
          }
          newStars.push(review);
        }
        if(doc.data()["type"] == "stats" || doc.data()["type"] == "both"){
          const review = 
          {
            id: doc.id,
            username: doc.data()["username"],
            time: doc.data()["time"],
            type: doc.data()["type"],
            stats: doc.data()["stats"]
          }
          newStats.push(review);
        }
      })
      const compareTime = (a, b) => {
        return b.time - a.time;
      }

      starRating = newStars.sort(compareTime);
      statsRating = newStats.sort(compareTime);
      averageStar = averageStarReviews(starRating);
      starRatios = countStarRatios(starRating);
      averageStats = averageStatsReviews(statsRating);
      filter(filteredId);
    });
  });

  const testUser = {
    name: 'test'
  }

  let rating;
  let title;
  let comment;

  let stats;

  let closeModal;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Id = crypto.randomUUID();
    const date = new Date();
    const time = date.getTime();
    console.log(reviewMode);
    if(reviewMode == "star"){
      await setDoc(doc(db, type, team.ref, "reviews", Id), {
        username: testUser.name,
        time: time,
        type: "star",
        star: rating,
        title: title,
        comment: comment,
        edited: false,
      });
      rating = null;
      title = "";
      comment = "";
    }
    else if(reviewMode == "stats"){
      await setDoc(doc(db, type, team.ref, "reviews", Id), {
        username: testUser.name,
        time: time,
        type: "stats",
        stats: stats,
      });
    }
    else{
      await setDoc(doc(db, type, team.ref, "reviews", Id), {
        username: testUser.name,
        time: time,
        type: "both",
        star: rating,
        title: title,
        comment: comment,
        edited: false,
        stats: stats,
      });
      rating = null;
      title = "";
      comment = "";
    }
    closeModal();
  };

  let editing = false;

  const changeMode = (mode) => {
    editing = mode;
  } 

  let utils = new Utils();

  let showModal = false;
</script>

<div class="w-full flex justify-end">
  <form method="POST" action="/teams" id="search">
    <div class="grid grid-cols-2 gap-4 sm:gap-6">
      <div class="relative mb-6">
        <Input list="list" placeholder="Search Sport" name="sport" required></Input>
        <datalist id="list">
          <option value="Crew"></option>
          <option value="Swim"></option>
          <option value="Soccer"></option>
        </datalist>
      </div>
    </div>
    <!-- <div style="margin: auto; text-align: center;">
      <Button type="submit" class="w-full">Search!</Button>
    </div> -->
  </form>
</div>

<div class="w-full my-20 flex justify-center">
  <div class="w-full max-w-5xl">
    <A class="mb-4" href="/teams">
      <Fa icon={faArrowLeft} />&nbsp;All teams
    </A>
    
    <div class="mb-3 border" id="top-container">

      {#if type == "crew"}
        <Crew {data}></Crew>
      {:else if type == "swim"}
        <Swim {data}></Swim>
      {/if}

      <!-- Reviews -->

      <div class="w-full">
        <div class="w-full px-10">
          <h3>Reviews</h3>
          {#key snap}
            <ReviewPanel {snap} bind:averageStar bind:starRatios bind:averageStats filter={createFilter} removeFilter={removeFilter}></ReviewPanel>
          {/key}
          {#if starRating <= 0}
            <div class="p-10 flex flex-col justify-center items-center">
              <p>
                Oops... Nobody has written a review yet!
                <a href="#" class="underline text-blue-500" on:click={() => (showModal = true)}>Be the first!</a>
              </p>
            </div>
          {:else}
            <div class="w-full flex justify-center items-center p-10">
              <Button on:click={() => (showModal = true)}>Write a Review!</Button>
            </div>
          {/if}
        </div>
        <div class="w-full my-10">
          <hr>
          {#if filtered}
            {#if filteredReviews.length > 0}
              {#each filteredReviews as review}
                <Review bind:review editTrue="{() => changeMode(true)}" editFalse="{() => changeMode(false)}" editing="{editing}" username="{testUser.name}" teamName="{team.name}"></Review>
              {/each}
            {:else if starRating.length > 0}
              <div class="h-24 flex justify-center items-center">
                Oops... No reviews here!
              </div>
            {:else}
              <div class="p-10 flex flex-col justify-center items-center">
                <p>
                  Oops... Nobody has written a review yet!
                  <a href="#" class="underline text-blue-500" on:click={() => (showModal = true)}>Be the first!</a>
                </p>
              </div>
            {/if}
          {:else}
          {#if starRating.length > 0}
            {#each starRating as review}
              <Review bind:review editTrue="{() => changeMode(true)}" editFalse="{() => changeMode(false)}" editing="{editing}" username="{testUser.name}" teamName="{team.name}"></Review>
            {/each}
          {/if}
          {/if}
          <hr>
        </div>
      </div>
      <div>
      </div>
      <Modal bind:showModal bind:closeModal={closeModal} on:close{utils.countChar()}>
        <div class="p-10 max-h-32">
          <form class="grid grid-rows-7" on:submit={handleSubmit}>
            <label for="mode">Choose a Review Mode:</label>
            <select class="mb-10" name="mode" id="mode" bind:value={reviewMode}>
              <option value="star">Traditional</option>
              <option value="stats">Stats Rankings</option>
              <option value="both">Both</option>
            </select>
            {#if reviewMode === "stats"}
              <StatsReview bind:values={stats}></StatsReview>
            {:else if reviewMode === "star"}
              <StarRating bind:rating={rating} setRating="" staticStars="{false}" partialStars="{false}"/>
              <input class="p-5 w-32 h-10 px-3 my-5" type="text" id="title" name="title" placeholder="Title" maxlength=100 bind:value={title}/>
              <textarea class="h-32" id="comment" name="comment" placeholder="Comments" style="resize: none;" maxlength=5000 bind:value={comment} on:input={() => utils.countChar()}></textarea>  
              <div id="the-count">
                <span id="current">0</span>
                <span id="maximum">/ 5000</span>
              </div>
            {:else}
              <StatsReview bind:values={stats}></StatsReview>
              <StarRating bind:rating={rating} setRating="" staticStars="{false}" partialStars="{false}"/>
              <input class="p-5 w-32 h-10 px-3 my-5" type="text" id="title" name="title" placeholder="Title" maxlength=100 bind:value={title}/>
              <textarea class="h-32" id="comment" name="comment" placeholder="Comments" style="resize: none;" maxlength=5000 bind:value={comment} on:input={() => utils.countChar()}></textarea>  
              <div id="the-count">
                <span id="current">0</span>
                <span id="maximum">/ 5000</span>
              </div>
            {/if}
            <div class="w-full flex justify-center items-center my-10">
              <Button type="submit">Submit!</Button>
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
