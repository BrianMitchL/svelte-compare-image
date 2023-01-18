# svelte-compare-image

A Svelte component to compare two images.
Find the package on NPM at [svelte-compare-image](https://npmjs.com/package/svelte-compare-image).

An interactive example can be found at https://projects.brianm.me/svelte-compare-image/

![screen recording example](https://github.com/BrianMitchL/svelte-compare-image/raw/main/example.gif)

The markup, state logic, and styling were originally adapted from [react-compare-image](https://github.com/junkboy0315/react-compare-image).

## Docs

The component will display the images and fill available width and height using a ResizeObserver according to the aspect ratios of the images.

To use it, render the component as seen below, providing image src and alt text for the left and right images.
The following CSS custom properties are optional and can be set to customize the appearance of the slider.

| Property         | Default Value |
| ---------------- | ------------- |
| `--handle-size`  | `2.5rem`      |
| `--slider-color` | `#ffffff`     |
| `--slider-width` | `0.125rem`    |

```svelte
<script lang="ts">
  import { CompareImage } from "svelte-compare-image";
  // or
  import CompareImage from "svelte-compare-image/CompareImage.svelte";
</script>

<CompareImage
  imageLeftSrc="https://via.placeholder.com/600x400/ffaa00/ffffff/?text=Left"
  imageLeftAlt="left"
  imageRightSrc="https://via.placeholder.com/600x400/00aaff/ffffff?text=Right"
  imageRightAlt="right"
  --handle-size="2.5rem"
  --slider-color="#ffffff"
  --slider-width="0.125rem"
/>
```
