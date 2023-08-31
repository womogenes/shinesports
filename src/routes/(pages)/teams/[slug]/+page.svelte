<script>
  import Fa from 'svelte-fa';
  import { faArrowLeft, faLeftLong } from '@fortawesome/free-solid-svg-icons';
  import { A } from 'flowbite-svelte';

  export let data;
</script>

<A class="mb-4" href="/teams"><Fa icon={faArrowLeft} />&nbsp;All teams</A>

<h1>{data.basicInfo[1]}</h1>
<pre>
{JSON.stringify(data, null, 1)}
</pre>
