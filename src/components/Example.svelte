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
</script>

<div class="image-resizers">
  <fieldset aria-describedby="left-dimensions">
    <legend>Left Image Size</legend>
    <div>
      <label for="left-image-width">Width</label>
      <input
        id="left-image-width"
        type="range"
        min="100"
        max="1000"
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
        max="1000"
        step="50"
        value={leftHeight}
        use:debounce
      />
    </div>
    <p id="left-dimensions">
      Dimensions are <code>{leftWidth}px x {leftHeight}px</code>
    </p>
  </fieldset>
  <fieldset aria-describedby="right-dimensions">
    <legend>Right Image Size</legend>
    <div>
      <label for="right-image-width">Width</label>
      <input
        id="right-image-width"
        type="range"
        min="100"
        max="1000"
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
        max="1000"
        step="50"
        value={rightHeight}
        use:debounce
      />
    </div>
    <p id="right-dimensions">
      Dimensions are <code>{rightWidth}px x {rightHeight}px</code>
    </p>
  </fieldset>
</div>

<div class="wrapper">
  <CompareImage
    imageLeftSrc="https://via.placeholder.com/{leftWidth}x{leftHeight}/ffaa00/ffffff/?text=Left"
    imageLeftAlt="left"
    imageRightSrc="https://via.placeholder.com/{rightWidth}x{rightHeight}/00aaff/ffffff?text=Right"
    imageRightAlt="right"
    sliderWidth={2}
    --handle-size="2.5rem"
  />
</div>

<style>
  .image-resizers {
    display: flex;
    flex-wrap: wrap;
  }

  fieldset {
    flex: 1 1 auto;
  }

  fieldset p {
    margin: 0;
  }

  .wrapper {
    max-width: 400px;
  }
</style>
