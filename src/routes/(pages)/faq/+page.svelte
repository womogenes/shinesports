<script>
  import Squiggle from '$components/Squiggle.svelte';
  import Dropdown from '/src/components/Dropdown.svelte'
</script>

<div class="mt-4 w-full">
  <div class="w-full text-center">
    <div class="bg-blue-900 p-10 w-full">
      <div class="m-10 h-96 flex justify-center items-center">
        <h1 class="text-7xl text-white">
          FAQ
        </h1>
      </div>
    </div>
    <div class="w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 45"
          class="absolute -translate-y-[50%]"
        >
          <path
            d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50h4000Z"
            transform="translate(0 0)"
            fill="white"
          ></path>
        </svg>
      </div>
    </div>
    <div class="w-full my-20 flex justify-center">
      <div class="w-full max-w-5xl">
        <h4 class="text-left uppercase my-10 text-blue-900">
          About Shine
        </h4>
        <Dropdown title={"How does your website generate revenue?"} text={"The majority of our revenue will be through teams who advertising to sponsor themselves on our website and paying for marketing to show up on the top of a user feed. Besides this, we’ll also have a premium account version for athletes that will give users greater access to information about teams."}></Dropdown>
        <Dropdown title={"Do coaches/team officials get to choose to be on the website? How will they add additional information? "} text={"If a team’s information is publicly available, their team will most likely be on the site. We are currently working on an option for coaches/officials to “claim” their team through a verification process, in which they’d be able to change information about the team accordingly. "}></Dropdown>
        <Dropdown title={"What are the phases of release and functionality for future versions?"} text={"Our first release will involve a website where users can find information about crew teams in their area and post reviews. Users will be able to search for teams and create their own list of saved teams to review later. Future versions will expand to include sports other than crew, review monitoring, a more advanced search system, a way for users to contact experienced athletes, and a paid team advertising system."}></Dropdown>
        <hr>
        <h4 class="text-left uppercase my-10 text-blue-900">
          Review System
        </h4>
        <Dropdown title={"If a team improves over time, are new reviews/ratings weighted higher than old reviews?"} text={"Yes, they are. After every “season” of the sport ends, any reviews made in that season will be weighted lower than new reviews coming in. "}></Dropdown>
        <Dropdown title={"What prevents fake reviews? Will there be a verified member feature?"} text={"We are looking into ways in which large platforms such as Google, Yelp, or Amazon deal with fake reviews. They often will use a sort of AI algorithm to detect bots or fake reviews. Since we don’t have this AI yet, for the time being, we’ll start off with a dedicated team to filter through fake reviews or consider implementing a verification system for users before they post reviews."}></Dropdown>
        <hr>
        <h4 class="text-left uppercase my-10 text-blue-900">
          Privacy
        </h4>
        <Dropdown title={"Are reviews anonymous? What if I use my account to leave a review?"} text={"All reviews will show up as being left by “anonymous,” even if you use your account to leave a review. Having an account is merely for your benefit to track reviews you have made, follow teams, or compare teams; no one else can track your reviews through your account. "}></Dropdown>
        <Dropdown title={"Can I delete my reviews and/or account? "} text={"Yes, you can. Please understand that all personal information will be deleted and this data may not be retrievable after."}></Dropdown>
        <Dropdown title={"If an athlete leaves a review with more serious allegations, will there be a system/connections that serious reports can be made to?"} text={"We plan to partner with Safe Sports from the IOC or similar organizations to ensure that reviews like these will not be glossed over. "}></Dropdown>
        <hr>
      </div>
    </div>
  </div>
</div>

<style>
  
</style>