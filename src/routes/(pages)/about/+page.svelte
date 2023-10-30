<script>
  import Squiggle from '$components/Squiggle.svelte';
</script>

<div class="mt-4 w-full">
  <div class="w-full text-center">
    <div class="bg-blue-900 p-10 w-full">
      <h1 class="text-5xl m-10 text-white">
        The Shine Story
      </h1>
    </div>
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
    <p class="text-xl text-left text-blue-900 font-bold m-10">
      Our mission is to empower junior athletes to shine in a healthy and supportive environment that fits their individual needs and dreams.
    </p>
    <div class="grid grid-rows-7 gap-20 justify-evenly">
      <div class="w-full grid grid-cols-2 justify-evenly gap-10 bg-sky-800 p-10 text-white">
        <div class="rounded flex flex-wrap bg-gray-50 content-center justify-center text-black">
          <div>Insert Image Here</div>
        </div>
        <div>
          <div class="mb-10">
            <h2 class="text-4xl m-5">
              About Shine
            </h2>
            <Squiggle class="m-auto w-40 stroke-white"/>
          </div>
          <p class="text-xl text-left m-5">
            Shine strives to provide junior athletes and their parents & guardians with the information necessary to make educated and well-informed decisions when choosing a sports team. We make various key decision making factors of this process transparent, such as the team’s culture, coaching style, competition ranking, practice logistics, cost of attendance, and so on. We believe athletes deserve to be on teams that will make them shine, especially during the most formative years of their life.
          </p>
        </div>
      </div>
      <div class="w-full grid grid-cols-2 justify-evenly gap-10">
        <div>
          <div class="m-10">
            <h2 class="text-4xl m-5 text-green-900">
              Safe Sport
            </h2>
            <Squiggle class="m-auto w-40 stroke-green-900"/>
          </div>
          <p class="text-xl text-left m-5">
            The International Olympic Committee (IOC) defines Safe Sport as an environment where athletes can train and compete in healthy and supportive surroundings; an environment which is respectful, equitable, and free from all forms of harassment and abuse.
          </p>
        </div>
        <div class="flex flex-wrap content-center justify-center">
          <img class="rounded" src="/logo.png" alt=""/>
        </div>
      </div>
      <div class="bg-blue-50 p-10">
        <div>
          <h2 class="m-10">
            Meet the Team
          </h2>
        </div>
        <div class="w-full grid grid-rows-2 grid-cols-2 justify-evenly gap-10">
          <div class="w-full flex flex-col gap-10">
            <div class="flex flex-wrap h-full content-center justify-center">
              <img class="rounded" src="/kaitlin.jpg" alt=""/>
            </div>
            <div class="flex-none justify-center grid grid-rows-2">
              <h3 class="text-lg text-center">
                Kaitlin Yeoh (Founder & CEO) 
              </h3>
              <p>
                Insert Bio Here...
              </p>
            </div>
          </div>
          <div class="w-full flex flex-col gap-10">
            <div class="flex flex-wrap h-full content-center justify-center">
              <img class="rounded" src="/bill.jpg" alt=""/>
            </div>
            <div class="flex-none justify-center grid grid-rows-2">
              <h3 class="text-lg text-center">
                William Feng (CTO)
              </h3>
              <p>
                Web dev, recreational badminton player.
              </p>
            </div>
          </div>
          <div class="w-full flex flex-col gap-10">
            <div class="flex flex-wrap content-center justify-center">
              <img class="rounded" src="/ayden.jpg" alt=""/>
            </div>
            <div class="flex-none justify-center grid grid-rows-2">
              <h3 class="text-lg text-center">
                Ayden Tan (SVP)
              </h3>
              <p>
                Insert Bio Here...
              </p>
            </div>
          </div>
          <div class="w-full flex flex-col gap-10">
            <div class="flex flex-wrap content-center justify-center">
              <img class="rounded" src="/felix.jpg" alt=""/>
            </div>
            <div class="flex-none justify-center grid grid-rows-2">
              <h3 class="text-lg text-center">
                Felix Yu (SVP) 
              </h3>
              <p>
                Developer of <span class="italic">Among Us Real Life Edition</span> and former crew athlete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  
</style>