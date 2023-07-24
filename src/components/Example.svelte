<script lang="ts">
  import CompareImage from "$lib/CompareImage.svelte";

  let leftHeight = 400;
  let leftWidth = 600;
  let rightHeight = 400;
  let rightWidth = 600;

  const debounce = (node: HTMLInputElement) => {
    let timer: number;

    function handleChange(e: Event) {
      const { valueAsNumber, id } = e.target as HTMLInputElement;

      clearTimeout(timer);

      timer = window.setTimeout(() => {
        switch (id) {
          case "left-image-height": {
            leftHeight = valueAsNumber;
            break;
          }
          case "left-image-width": {
            leftWidth = valueAsNumber;
            break;
          }
          case "right-image-height": {
            rightHeight = valueAsNumber;
            break;
          }
          case "right-image-width": {
            rightWidth = valueAsNumber;
            break;
          }
        }
      }, 300);
    }

    node.addEventListener("input", handleChange);

    return {
      destroy() {
        node.removeEventListener("input", handleChange);
      },
    };
  };

  let handleSize = 2.5;
  let handleBackgroundColor = "rgba(0, 0, 0, 0.6)";
  let handleBackgroundImage =
    'url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M3 12L7 8M3 12L7 16M21 12L17 16M21 12L17 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>\')';
  let handleBorderWidth = 0.125;
  let sliderColor = "#ffffff";
  let sliderWidth = 0.125;

  $: snippet = `<CompareImage
  imageLeftSrc="https://via.placeholder.com/${leftWidth}x${leftHeight}/ffaa00/ffffff/?text=Example+Text"
  imageLeftAlt="left"
  imageRightSrc="https://via.placeholder.com/${rightWidth}x${rightHeight}/00aaff/ffffff?text=Example+Text"
  imageRightAlt="right"
  --handle-size="${handleSize}rem"
  --handle-background-color="${handleBackgroundColor}"
  --handle-background-image="${handleBackgroundImage}"
  --handle-border-width="${handleBorderWidth}rem"
  --slider-color="${sliderColor}"
  --slider-width="${sliderWidth}rem"
>
  <svelte:fragment slot="slider-label">
    Set the visibility of one image over the other. 0 is full visibility of
    the second image and 100 is full visibility of the first image. Any
    amount in-between is a left/right cutoff at the percentage of the slider.
  </svelte:fragment>
</CompareImage>`;
</script>

<h2>Example</h2>

<div class="image-resizers form-group">
  <fieldset aria-describedby="left-dimensions">
    <legend>Left Image Size</legend>
    <div>
      <label for="left-image-width">Width</label>
      <input
        id="left-image-width"
        type="range"
        min="100"
        max="2000"
        step="50"
        value={leftWidth}
        use:debounce
      />
    </div>
    <div>
      <label for="left-image-height">Height</label>
      <input
        id="left-image-height"
        type="range"
        min="100"
        max="2000"
        step="50"
        value={leftHeight}
        use:debounce
      />
    </div>
    <output id="left-dimensions" for="left-image-width left-image-height">
      Dimensions are <code>{leftWidth}px x {leftHeight}px</code>
    </output>
  </fieldset>
  <fieldset aria-describedby="right-dimensions">
    <legend>Right Image Size</legend>
    <div>
      <label for="right-image-width">Width</label>
      <input
        id="right-image-width"
        type="range"
        min="100"
        max="2000"
        step="50"
        value={rightWidth}
        use:debounce
      />
    </div>
    <div>
      <label for="right-image-height">Height</label>
      <input
        id="right-image-height"
        type="range"
        min="100"
        max="2000"
        step="50"
        value={rightHeight}
        use:debounce
      />
    </div>
    <output id="right-dimensions" for="right-image-width right-image-height">
      Dimensions are <code>{rightWidth}px x {rightHeight}px</code>
    </output>
  </fieldset>
</div>
<div class="form-group">
  <div>
    <label>
      Handle Size
      <input
        id="handle-size"
        type="range"
        bind:value={handleSize}
        min="1"
        max="5"
        step="0.125"
      />
    </label>
    <output for="handle-size">{handleSize}rem</output>
  </div>
  <div>
    <label>
      Handle Background Color
      <input
        id="handle-background-color"
        type="color"
        bind:value={handleBackgroundColor}
      />
    </label>
    <output for="handle-background-color">{handleBackgroundColor}</output>
  </div>
  <div>
    <div id="handle-background-image-label">Handle Background Image</div>
    <pre
      contenteditable="true"
      aria-labelledby="handle-background-image-label"
      bind:textContent={handleBackgroundImage}
    />
  </div>
  <div>
    <label>
      Handle Border Width
      <input
        id="handle-border-width"
        type="range"
        bind:value={handleBorderWidth}
        min="0"
        max="1"
        step="0.0625"
      />
    </label>
    <output for="handle-border-width">{handleBorderWidth}rem</output>
  </div>
  <div>
    <label>
      Slider Color
      <input id="slider-color" type="color" bind:value={sliderColor} />
    </label>
    <output for="slider-color">{sliderColor}</output>
  </div>
  <div>
    <label>
      Slider Width
      <input
        id="slider-width"
        type="range"
        bind:value={sliderWidth}
        min="0"
        max="1"
        step="0.0625"
      />
    </label>
    <output for="slider-width">{sliderWidth}rem</output>
  </div>
</div>

<div class="wrapper">
  <CompareImage
    imageLeftSrc="https://via.placeholder.com/{leftWidth}x{leftHeight}/ffaa00/ffffff/?text=Example+Text"
    imageLeftAlt="left"
    imageRightSrc="https://via.placeholder.com/{rightWidth}x{rightHeight}/00aaff/ffffff?text=Example+Text"
    imageRightAlt="right"
    --handle-size={handleSize + "rem"}
    --handle-background-color={handleBackgroundColor}
    --handle-background-image={handleBackgroundImage}
    --handle-border-width={handleBorderWidth + "rem"}
    --slider-color={sliderColor}
    --slider-width={sliderWidth + "rem"}
  >
    <svelte:fragment slot="slider-label">
      Set the visibility of one image over the other. 0 is full visibility of
      the second image and 100 is full visibility of the first image. Any amount
      in-between is a left/right cutoff at the percentage of the slider.
    </svelte:fragment>
  </CompareImage>
</div>

<h3>Code Snippet</h3>
<p>
  The CSS Custom Properties are optional. The default values are used below.
</p>
<pre>{snippet}</pre>

<style>
  .image-resizers {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  fieldset {
    flex: 1 1 auto;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group pre {
    white-space: pre-wrap;
  }

  .wrapper {
    max-width: 400px;
  }
</style>
