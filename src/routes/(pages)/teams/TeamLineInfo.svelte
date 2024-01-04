<script>
  import Fa from 'svelte-fa';
  import {
    faSchool,
    faUsers,
    faVenus,
    faMars,
    faVenusMars,
    faNeuter,
    faBroom,
    faSkull,
    faLocationDot,
  } from '@fortawesome/free-solid-svg-icons';

  export let data;

  export let type;
</script>

<div class="flex flex-col gap-2 text-sm">
  <div class="flex flex-wrap items-center gap-x-2 text-neutral-600">
    {#if type === "crew"}
        <!-- School or club -->
        <div class="flex items-center gap-2">
          {#if data.schoolOrClub === 'School'}
            <Fa icon={faSchool} />
          {:else}
            <Fa icon={faUsers} />
          {/if}
          <span>{data.schoolOrClub}</span>
        </div>
    
        <span>&bull;</span>

        <!-- Team types (M/W/Co-Ed) -->
        <div class="flex items-center gap-2">
          <div class="flex gap-1">
            {#if data.teamTypes === 'Only W'}
              <Fa icon={faVenus} />
            {:else if data.teamTypes === 'Only M'}
              <Fa icon={faMars} />
            {:else if data.teamTypes === 'Separate M/W'}
              <Fa icon={faVenus} />
              <Fa icon={faMars} />
            {:else if data.teamTypes === 'Co-Ed'}
              <Fa icon={faVenusMars} />
            {:else}
              <Fa icon={faNeuter} />
            {/if}
          </div>
          <span>{data.teamTypes}</span>
        </div>

        <span>&bull;</span>

        <!-- Scull/sweep -->
        <div class="flex items-center gap-2">
          <div class="flex gap-1">
            <Fa icon={faSkull} />
            <Fa icon={faBroom} />
          </div>
          <span
            >{data.scullSweep === 'B'
              ? 'Scull/sweep both offered'
              : 'Scull/sweep not both offered'}</span
          >
        </div>
          <!-- Address -->
        <div class="flex items-start gap-2 text-neutral-600">
          <Fa class="mt-0.5" icon={faLocationDot} />
          <a
            class="underline-offset-2 hover:underline"
            href={`https://google.com/maps/place/${data.address}`}
            target="_blank"
            >{data.address}
          </a>
        </div>
    {:else if type === "swim"}
        <!-- Address -->
        <div id="menu-addresses">
          <div class="flex items-start gap-2 text-neutral-600" id="first-address">
            <Fa class="mt-0.5" icon={faLocationDot} />
            <a
              class="underline-offset-2 hover:underline"
              href={`https://google.com/maps/place/${data.address[0]}`}
              target="_blank"
              > 
            {data.address[0]}
            {#if data.address.length > 1}
              <span class="font-bold"> and {data.address.length - 1} more</span>
            {/if} 
            </a>
          </div>
          <ul id="dropdown-addresses">
            {#each data.address as address}
              <li>
                <div class="flex items-start gap-2 text-neutral-600">
                  <Fa class="mt-0.5" icon={faLocationDot} />
                  <a
                    class="underline-offset-2 hover:underline"
                    href={`https://google.com/maps/place/${address}`}
                    target="_blank"
                    >{address}
                  </a>
                </div>
              </li>
            {/each}
          </ul>
        </div>
    {/if}
  </div>
</div>

<style>
  #dropdown-addresses {
  display: none;
  }

  #menu-addresses:hover #dropdown-addresses {
    display: block;
  }

  #menu-addresses:hover #first-address {
    display: none;
  }
</style>
