<script>
  import Utils from './utils.js';
  import { A, Alert, Helper, Input, Label, Review, Button } from 'flowbite-svelte';
  export let user;

  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

  let reviews = [
    {
      text: 'Before I joined my team, I had no idea what I was getting myself into. I would’ve loved getting to hear from older athletes on the team about their experiences before joining so the adjustment period could be smoother.',
      image: 'https://source.unsplash.com/random/400x400/?rowing',
    },
    {
      text: 'The best coaches I had were ones who gave me the tools and the “how” to succeed rather than telling me what to improve on. Over the years, I’ve met coaches who’ve made me the player I am by pushing me both mentally and physically–but it took a long time to find coaches who could do that best for me.',
      image: 'https://source.unsplash.com/random/400x400/?tennis',
    },
    {
      text: 'The athletic environment people are first introduced to often shapes what they deem as ‘normal.’ If we want to shift the culture of certain sports, we need to shift the way athletes view these cultures.',
      image: 'https://source.unsplash.com/random/400x400/?swimming',
    },
    {
      text: 'It took me a lot of trial and error and networking to understand what the various teams in my region were like. I could’ve saved a lot of time if I had a tool to help me with that process',
      image: 'https://source.unsplash.com/random/400x400/?lacrosse',
    },
  ];

  const logout = async () => {
    await fetch('/logout', { method: 'POST' });
    window.location.href = '/';
  };

  import Navbar from '$components/Navbar.svelte';

  import Squiggle from '$components/Squiggle.svelte';

  let utils = new Utils();

  export let data;
</script>

<div
  class="sticky top-0 z-20 flex w-full justify-center bg-white bg-opacity-90 shadow backdrop-blur-sm"
>
  <Navbar class="bg-transparent" user={data.user} />
</div>
<div class="flex w-full flex-col sm:flex-row" id="hero">
  <div class="w-full">
    <img
      class="h-full object-cover"
      src="https://source.unsplash.com/random/1920x1080/?rowing"
      alt=""
    />
  </div>
  <div
    class="flex w-full flex-col items-center gap-4 bg-blue-900 px-10 py-16 text-center text-white sm:py-40"
  >
    <div class="flex max-w-lg flex-col items-center">
      <div class="flex flex-col items-center uppercase">
        <p class="text-lg font-semibold tracking-widest">Find the team</p>
        <p class="text-4xl font-extrabold">That fits you best</p>
      </div>

      <div class="mb-10 mt-5 w-60">
        <Squiggle class="max-w-80 stroke-blue-700" />
      </div>

      <p class="text-lg">
        Finding the right sports team shouldn’t be hard. We make it easy to
        discover and connect with the best ones for you.
      </p>
      <div class="mt-10 flex w-full max-w-sm flex-col gap-4">
        <p class="text-lg font-semibold uppercase tracking-widest">
          Start your search
        </p>
        <div class="container-fluid">
          <form method="GET" action="teams" id="search">
            <div class="grid grid-cols-2 gap-4 sm:gap-6">
              <div class="relative mb-6">
                <Input list="list" placeholder="Sport" required></Input>
                <datalist name="sport" id="list">
                  <option value="Crew"></option>
                  <option value="Swim"></option>
                  <option value="Soccer"></option>
                </datalist>
              </div>
              <div>
                <Input
                  type="text"
                  name="zip"
                  placeholder="Zip Code"
                  maxlength="5"
                  value=""
                  on:input={() => utils.zipCheck()}
                  required
                ></Input>
              </div>
            </div>
            <div style="margin: auto; text-align: center;">
              <Button type="submit" class="w-full">Search!</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Page squiggle -->
<div class="w-full">
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2000 45"
      class="absolute -translate-y-[50%]"
    >
      <path
        d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z"
        transform="translate(0 0)"
        fill="white"
      ></path>
    </svg>
  </div>
</div>

<div class="flex w-full justify-center px-10 py-10 sm:py-40">
  <div class="flex flex-col items-center gap-4 rounded-lg bg-white text-center">
    <div class="flex flex-col items-center gap-6 text-blue-900">
      <p class="mb-10 text-center text-5xl font-bold">Reviews Based On</p>
    </div>

    <div
      class="my-4 grid max-w-xs grid-rows-3 gap-4 sm:max-w-3xl sm:grid-cols-4 sm:grid-rows-1 sm:gap-10"
    >
      <div class="flex flex-col items-center gap-4">
        <img
          class="h-28 w-28 rounded object-cover"
          src="teamculture.jpg"
          alt=""
        />
        <p class="flex items-center font-bold uppercase text-green-700">
          Culture
        </p>
        <p class="flex items-center text-sm italic text-green-700">
          Athletes deserve to thrive socially and athletically. Hear directly
          from athletes about their experiences on a team
        </p>
      </div>
      <div class="flex flex-col items-center gap-4">
        <img class="h-28 w-28 rounded object-cover" src="coaching.jpg" alt="" />
        <p class="flex items-center font-bold uppercase text-orange-700">
          Coaches
        </p>
        <p class="flex items-center text-sm italic text-orange-700">
          Each athlete deserves coaches who can help them grow to their fullest
          potential. Find a team where the coaching style fits you
        </p>
      </div>
      <div class="flex flex-col items-center gap-4">
        <img
          class="h-28 w-28 rounded object-cover"
          src="competition.jpg"
          alt=""
        />
        <p class="flex items-center font-bold uppercase text-pink-800">
          Competition
        </p>
        <p class="flex items-center text-sm italic text-pink-800">
          We analyze the data for you. Choose the team with the athletic goals
          that match yours
        </p>
      </div>
      <div class="flex flex-col items-center gap-4">
        <img
          class="h-28 w-28 rounded object-cover"
          src="recruitment.jpg"
          alt=""
        />
        <p class="flex items-center font-bold uppercase text-blue-900">
          Recruitment
        </p>
        <p class="flex items-center text-sm italic text-blue-900">
          The athletic journey doesn’t have to stop in high school. See which
          teams are getting recruited to which colleges
        </p>
      </div>
    </div>
    <p class="flex items-center font-bold uppercase text-blue-500">
      Have Something to Say?
    </p>
    <div class="w-full sm:w-auto">
      {#if user}
        <a class="mr-2 w-full" size="xl" href="/"
          >Search for a team and review!</a
        >
      {:else}
        <Button class="mr-2 w-full" size="xl" href="/signin">Sign Up!</Button>
      {/if}
    </div>
  </div>
</div>

<div class="relative w-full bg-sky-800 px-10 py-10 text-center md:py-40">
  <h1 class="mb-20 text-white">See Reviews From Real Athletes!</h1>
  <div class="w-full">
    <!-- <Carousel autoplay="7500">
      {#each reviews as review}
        <ReviewExample text={review['text']} image={review['image']}></ReviewExample>
      {/each}
    </Carousel> -->
    <!-- <Carousel
      autoplay
      autoplayDuration={7500}
    >
      {#each reviews as review}
        <ReviewExample text={review['text']} image={review['image']}></ReviewExample>
      {/each}
    </Carousel> -->
  </div>
</div>

<div class="flex w-full justify-center bg-blue-900 px-10 py-10 sm:py-40">
  <div class="flex flex-col items-center gap-4 text-center text-white">
    <!-- <p class="font-medium uppercase tracking-widest text-amber-500">
      {new Date().getFullYear() + 1} rankings
    </p>
    <p class="text-4xl font-bold">
      Browse teams by &ldquo;best&nbsp;of&rdquo; lists.
    </p>
    <Squiggle class="w-40 stroke-amber-500" />
    <p class="max-w-md">
      We combine the reviews and the data to put together these comprehensive
      lists to get you started.
    </p>

    <div class="mt-6 grid grid-cols-3 gap-4 sm:gap-6">
      <a
        class="flex flex-col gap-4 rounded-lg p-4 transition-colors hover:bg-blue-950"
        href="/"
      >
        <img
          class="rounded"
          src="https://source.unsplash.com/random/150x150/?teams"
          alt=""
        />
        <p>Best Culture</p>
      </a>
      <a
        class="flex flex-col gap-4 rounded-lg p-4 transition-colors hover:bg-blue-950"
        href="/"
      >
        <img
          class="rounded"
          src="https://source.unsplash.com/random/150x150/?sports+coaches"
          alt=""
        />
        <p>Best Coaches</p>
      </a>
      <a
        class="flex flex-col gap-4 rounded-lg p-4 transition-colors hover:bg-blue-950"
        href="/"
      >
        <img
          class="rounded"
          src="https://source.unsplash.com/random/150x150/?recruitment"
          alt=""
        />
        <p>Best Recruitment</p>
      </a>
    </div> -->
  </div>
</div>
<!-- 
<div class="flex w-full justify-center px-10 py-10 sm:py-40">
  <div class="flex w-full max-w-3xl flex-col gap-10 sm:flex-row">
    <div class="flex w-full max-w-sm flex-col justify-center gap-4">
      <p class="font-medium uppercase tracking-widest">Partner with us</p>
      <p class="text-4xl font-bold">For coaches and captains</p>
      <Squiggle />
      <p>
        Are you a school or club team representative? Learn more about how you
        can partner with us to connect with athletes and families throughout the
        sports team search process.
      </p>
      <a class="flex items-center gap-2 underline" href="/">
        <Fa icon={faCheckCircle} />Claim your team
      </a>
    </div>
    <div class="flex w-full items-center">
      <img
        class="aspect-video w-full rounded object-cover"
        src="https://source.unsplash.com/random/500x500/?leaders"
        alt=""
      />
    </div>
  </div>
</div> -->
