<script>
  import { onMount } from 'svelte';
  import MarkdownIt from 'markdown-it';

  let md = new MarkdownIt();

  let renderedMarkdown = '';
  let inputElement;

  onMount(() => {
    if (inputElement) {
      const markdownText = inputElement.innerHTML;
      console.log(markdownText);
      renderedMarkdown = md.render(markdownText);
    }
  });
</script>

{@html renderedMarkdown}

<span hidden bind:this={inputElement}><slot /></span>
