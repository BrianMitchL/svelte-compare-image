# svelte-compare-image

A component to compare two images by dragging a slider to reveal the other
image. Find the package on NPM at [svelte-compare-image](https://npmjs.com/package/svelte-compare-image).

An interactive example can be found at https://brianm.me/svelte-compare-image/

## Docs

The component will display the images and fill available width and height using a ResizeObserver according to the aspect ratios of the images.

To use it, render the component as seen below

```sveltehtml
<script>
  import CompareImage from "svelte-compare-image/CompareImage.svelte";
</script>

<CompareImage
  imageLeftSrc="https://via.placeholder.com/600x400/ffaa00/ffffff/?text=Left"
  imageLeftAlt="left"
  imageRightSrc="https://via.placeholder.com/600x400/00aaff/ffffff?text=Right"
  imageRightAlt="right"
/>
```
