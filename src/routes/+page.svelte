<script>
  import { A, Alert, Input, Label } from 'flowbite-svelte';
  import { Button } from 'flowbite-svelte';

  import Fa from 'svelte-fa';
  import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

  import Squiggle from '$components/Squiggle.svelte';

  let reviewBases = [
    ['Culture', 'users-group-outline'],
    ['Coach', 'user-circle-solid'],
    ['Recuritment', 'thumbs-up-outline'],
    ['Results', 'rocket-solid'],
  ];
</script>

<div class="flex w-full flex-col md:flex-row" id="hero">
  <div class="w-full">
    <img
      class="h-full object-cover"
      src="https://source.unsplash.com/random/1920x1080/?nature"
      alt=""
    />
  </div>

  <div
    class="flex w-full flex-col items-center gap-4 bg-blue-900 px-10 py-40 text-center text-white"
  >
    <div class="flex max-w-lg flex-col items-center">
      <div class="flex flex-col items-center uppercase">
        <p class="text-lg font-semibold tracking-widest">Find the team</p>
        <p class="text-4xl font-extrabold">That fits you best</p>
      </div>

      <div class="mb-10 mt-5 w-60">
        <Squiggle class="w-80 stroke-blue-700" />
      </div>

      <p class="text-lg">
        Finding the right sports team shouldn’t be hard. From crew teams to
        [other teams], we make it easy to discover and connect with the best
        ones for you.
      </p>

      <div class="mt-10 flex flex-col gap-2">
        <p class="text-lg font-semibold uppercase tracking-widest">
          Start your search
        </p>

        <div class="flex flex-col gap-4 md:flex-row">
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
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
      class="absolute -translate-y-[90%]"
    >
      <path
        d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z"
        transform="translate(0 0)"
        fill="white"
      ></path>
    </svg>
  </div>
</div>

<div class="flex w-full justify-center p-10">
  <div class="flex flex-col items-center gap-4 text-center">
    <div class="flex flex-col items-center gap-6 text-blue-900">
      <p class="uppercase tracking-widest">
        Find <b class="font-extrabold">your</b> team
      </p>
      <p class="text-center text-3xl font-bold">
        Your search is unique. <br />
        Just like you.
      </p>
    </div>
    <Squiggle />
    <p class="max-w-md">
      We give you all of the data, reviews, and insights in one place to make
      your search as easy as possible.
    </p>

    <div class="grid max-w-3xl grid-cols-3 gap-10">
      <div class="flex flex-col items-center gap-4">
        <img
          class="rounded"
          src="https://source.unsplash.com/random/100x100/?lifting"
          alt=""
        />
        <p class="flex h-12 items-center font-bold uppercase text-green-700">
          No heavy lifting
        </p>
        <p>We analyze the data so you don't have to.</p>
      </div>
      <div class="flex flex-col items-center gap-4">
        <img
          class="rounded"
          src="https://source.unsplash.com/random/100x100/?scale"
          alt=""
        />
        <p class="flex h-12 items-center font-bold uppercase text-orange-700">
          The good, the bad, & the honest
        </p>
        <p>
          Our user reviews let you hear directly from athletes to give you an
          honest and holistic view.
        </p>
      </div>
      <div class="flex flex-col items-center gap-4">
        <img
          class="rounded"
          src="https://source.unsplash.com/random/100x100/?glove"
          alt=""
        />
        <p class="flex h-12 items-center font-bold uppercase text-pink-800">
          Like a glove
        </p>
        <p>We personalize your search based on what's most important to you.</p>
      </div>
    </div>
  </div>
</div>

<div class="relative flex w-full justify-center overflow-clip pb-40 lg:-mt-40">
  <!-- Big squiggle -->
  <div class="absolute -z-10 h-0 w-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1512 3578.12"
      class="absolute fill-sky-800 object-cover"
    >
      <path
        d="M1512,556.42s-38-103-214-151.21C1135.43,360.67,1019.11,430,873,371c-141.22-57-70.34-103.33-199.7-163.65-155.48-72.5-326.65,9.32-412.23-72.5C146.07,25,0,.23,0,.23V3578.35H1512Z"
      ></path>
    </svg>
  </div>

  <div class="flex p-10 pt-48 text-white sm:pt-96 2xl:pt-[35rem]">
    <div class="w-full max-w-3xl p-6">
      <img
        class="rounded"
        src="https://source.unsplash.com/random/1920x1080/?tools"
        alt=""
      />
    </div>

    <div class="w-full p-6">
      <div class="flex max-w-xs flex-col gap-4">
        <p class="font-semibold uppercase tracking-widest">Stay on track</p>
        <p class="text-3xl font-bold">Tools to organize your team search.</p>
        <Squiggle class="w-40 stroke-white" />
        <p>
          We'll help you build your list, track your progress, and get new
          recommendations as your search narrows.
        </p>
        <a class="underline" href="/">Start Exploring</a>
      </div>
    </div>
  </div>
</div>

<div class="flex w-full flex-col md:flex-row">
  <div
    class="flex w-full flex-col px-6 py-40 text-green-700 md:items-end md:px-20"
  >
    <div class="flex max-w-sm flex-col gap-4">
      <p class="font-medium uppercase tracking-widest">Choose your team</p>
      <p class="text-3xl font-bold">
        Everything you need to make your decision.
      </p>
      <Squiggle class="w-40 stroke-green-700" />
      <p class="text-black">
        With the information you care about on every (almost) team in America,
        we make it easy for you to compare teams to make your decision.
      </p>
    </div>
  </div>

  <div class="w-full bg-green-600 px-6 py-40">
    <img
      class="max-w-sm rounded"
      src="https://source.unsplash.com/random/1920x1080/?decision"
      alt=""
    />
  </div>
</div>

<div class="flex w-full justify-center bg-blue-900 px-10 py-40">
  <div class="flex flex-col items-center gap-4 text-center text-white">
    <p class="font-medium uppercase tracking-widest text-amber-500">
      {new Date().getFullYear() + 1} rankings
    </p>
    <p class="text-4xl font-bold">Browse teams by "best of" lists.</p>
    <Squiggle class="w-40 stroke-amber-500" />
    <p class="max-w-md">
      We combine the reviews and the data to put together these comprehensive
      lists to get you started.
    </p>

    <div class="mt-6 flex gap-6">
      <a
        class="flex flex-col gap-4 rounded-lg p-6 transition-colors hover:bg-blue-950"
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
        class="flex flex-col gap-4 rounded-lg p-6 transition-colors hover:bg-blue-950"
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
        class="flex flex-col gap-4 rounded-lg p-6 transition-colors hover:bg-blue-950"
        href="/"
      >
        <img
          class="rounded"
          src="https://source.unsplash.com/random/150x150/?recruitment"
          alt=""
        />
        <p>Best Recruitment</p>
      </a>
    </div>
  </div>
</div>

<div class="flex w-full justify-center px-10 py-40">
  <div class="flex w-full max-w-3xl flex-col gap-20 sm:flex-row">
    <div class="flex w-full max-w-sm flex-col gap-4">
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
    <div class="w-full">
      <img
        class="w-full rounded"
        src="https://source.unsplash.com/random/500x500/?leaders"
        alt=""
      />
    </div>
  </div>
</div>
