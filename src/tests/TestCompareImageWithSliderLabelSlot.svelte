<script>
  import CompareImage from "$lib/CompareImage.svelte";
</script>

<CompareImage {...$$props}>
  <svelte:fragment slot="slider-label">Custom label!</svelte:fragment>
</CompareImage>
