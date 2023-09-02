<!-- https://dev.to/khromov/using-leaflet-with-sveltekit-3jn1 -->

<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';

  // coords is an array with 2 elements
  export let coords;

  let mapElement;
  let map;

  onMount(async () => {
    if (browser) {
      const leaflet = await import('leaflet');

      map = leaflet.map(mapElement).setView(coords, 11);

      leaflet
        .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
        .addTo(map);

      leaflet.marker(coords).addTo(map);
      /* .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup(); */
    }
  });

  onDestroy(async () => {
    if (map) {
      console.log('Unloading Leaflet map.');
      map.remove();
    }
  });
</script>

<div id="leaflet-map" bind:this={mapElement}></div>

<style>
  @import 'leaflet/dist/leaflet.css';

  div#leaflet-map {
    z-index: 0;
    min-width: 100px;
    min-height: 100px;
    height: 100%;
    width: 100%;
  }

  :global(img.leaflet-marker-icon, div.leaflet-control-container) {
    pointer-events: none !important;
  }
</style>
