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
</script>

<div class="flex flex-wrap items-center gap-x-2 text-neutral-600">
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
      {#if data.teamGender === 'Only W'}
        <Fa icon={faVenus} />
      {:else if data.teamGender === 'Only M'}
        <Fa icon={faMars} />
      {:else if data.teamGender === 'Separate M/W'}
        <Fa icon={faVenus} />
        <Fa icon={faMars} />
      {:else if data.teamGender === 'Co-Ed'}
        <Fa icon={faVenusMars} />
      {:else}
        <Fa icon={faNeuter} />
      {/if}
    </div>
    <span>{data.teamGender}</span>
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
</div>

<!-- Address -->
<div class="flex items-center gap-2 text-neutral-600">
  <Fa icon={faLocationDot} />
  <a
    class="underline-offset-2 hover:underline"
    href={`https://google.com/maps/place/${data.address}`}
    target="_blank"
    >{data.address}
  </a>
</div>
