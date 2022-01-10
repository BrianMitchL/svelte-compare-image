<script lang="ts">
  import { writable } from "svelte/store";

  /**
   * src attribute of the left HTMLImageElement
   */
  export let imageLeftSrc: string = "";
  /**
   * alt text for the left image
   */
  export let imageLeftAlt: string = "";
  /**
   * src attribute of the right HTMLImageElement
   */
  export let imageRightSrc: string = "";
  /**
   * alt text for the left image
   */
  export let imageRightAlt: string = "";
  /**
   * width of slider line in pixels
   */
  export let sliderWidth: number = 2;

  function syncWidth(el: HTMLElement | null) {
    return writable(0, (set) => {
      if (!el) {
        return;
      }
      let ro = new ResizeObserver(([entry]) => {
        set(entry.target.getBoundingClientRect().width);
      });
      ro.observe(el);
      return () => ro.disconnect();
    });
  }

  let containerRef: HTMLDivElement | null = null;
  $: containerWidthStore = syncWidth(containerRef);

  let imageLeftRef: HTMLImageElement | null = null;
  let imageRightRef: HTMLImageElement | null = null;
  let leftLoaded: boolean;
  let rightLoaded: boolean;

  $: {
    imageLeftSrc;
    leftLoaded = imageLeftRef?.complete ?? false;
  }
  $: {
    imageRightSrc;
    rightLoaded = imageRightRef?.complete ?? false;
  }

  let height = 0;
  $: {
    leftLoaded;
    rightLoaded;
    imageLeftSrc;
    imageRightSrc;
    if (imageLeftRef && imageRightRef) {
      const leftImageRatio =
        imageLeftRef.naturalHeight / imageLeftRef.naturalWidth;
      const rightImageRatio =
        imageRightRef.naturalHeight / imageRightRef.naturalWidth;

      const ratio = Math.max(leftImageRatio, rightImageRatio);

      height = $containerWidthStore * ratio;
    }
  }

  let sliderPosition: number = 0.5;

  function handleSliding(e: TouchEvent | MouseEvent) {
    // touch/cursor from left of viewport
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    // account for horizontal window scroll
    const cursorX = pageX - window.scrollX;

    // get the cursor position from the left edge of the image
    const imagePosition = imageRightRef?.getBoundingClientRect()?.left ?? 0;
    const targetPos = cursorX - imagePosition;
    const minPos = sliderWidth / 2;
    const maxPos = $containerWidthStore - sliderWidth / 2;
    const clampedPos = Math.min(Math.max(targetPos, minPos), maxPos);

    sliderPosition = clampedPos / $containerWidthStore;
  }

  function slideStart(e: TouchEvent | MouseEvent) {
    // we prevent default, but still want to focus on the container
    // so that interaction behavior is consistent, and we see keyboard events
    containerRef?.focus();
    // Slide the image even if you just click or tap (not drag)
    handleSliding(e);

    window.addEventListener("mousemove", handleSliding);
    window.addEventListener("touchmove", handleSliding);
  }

  function slideEnd() {
    window.removeEventListener("mousemove", handleSliding);
    window.removeEventListener("touchmove", handleSliding);
  }

  function keyDown(e: KeyboardEvent) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      sliderPosition = Math.max(sliderPosition - 0.1, 0);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      sliderPosition = Math.min(sliderPosition + 0.1, 1);
    }
  }
</script>

<div
  bind:this={containerRef}
  on:touchstart|preventDefault={slideStart}
  on:touchend={slideEnd}
  on:mousedown|preventDefault={slideStart}
  on:mouseup={slideEnd}
  on:keydown={keyDown}
  class="compare-image-container"
  tabindex="0"
  style:display={leftLoaded && rightLoaded ? "block" : "none"}
  style="--container-height: {height}px; --container-width: {$containerWidthStore}px; --slider-width: {sliderWidth}px; --slider-position: {sliderPosition};"
>
  <img
    bind:this={imageLeftRef}
    src={imageLeftSrc}
    alt={imageLeftAlt}
    class="left-img"
    on:load={() => {
      leftLoaded = true;
    }}
  />
  <img
    bind:this={imageRightRef}
    src={imageRightSrc}
    alt={imageRightAlt}
    class="right-img"
    on:load={() => {
      rightLoaded = true;
    }}
  />
  <div class="slider" aria-hidden="true">
    <div class="line" />
    <div class="handle">
      <div class="left-arrow" />
      <div class="right-arrow" />
    </div>
    <div class="line" />
  </div>
</div>

<style>
  .compare-image-container {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: var(--container-height);
    overflow: hidden;
  }

  img {
    display: block;
    height: 100%;
    object-fit: cover;
    position: absolute;
    width: 100%;
  }

  .left-img {
    clip: rect(
      auto,
      calc(var(--container-width) * var(--slider-position)),
      auto,
      auto
    );
  }

  .right-img {
    clip: rect(
      auto,
      auto,
      auto,
      calc(var(--container-width) * var(--slider-position))
    );
  }

  .slider {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: var(--handle-size);
    cursor: ew-resize;
    position: absolute;
    left: calc(
      var(--container-width) * var(--slider-position) -
        var(--handle-size, 2.5rem) / 2
    );
    top: 0;
  }

  .line {
    background: #ffffff;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    flex: 0 1 auto;
    height: 100%;
    width: var(--slider-width);
  }

  .handle {
    box-sizing: border-box;
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: var(--slider-width) solid #ffffff;
    border-radius: 100%;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    height: var(--handle-size, 2.5rem);
    width: var(--handle-size, 2.5rem);
  }

  .left-arrow {
    border: inset calc(var(--handle-size, 2.5rem) * 0.15) rgba(0, 0, 0, 0);
    border-right: calc(var(--handle-size, 2.5rem) * 0.15) solid #ffffff;
    height: 0;
    margin-right: calc(var(--handle-size, 2.5rem) * 0.25);
    width: 0;
  }

  .right-arrow {
    border: inset calc(var(--handle-size, 2.5rem) * 0.15) rgba(0, 0, 0, 0);
    border-left: calc(var(--handle-size, 2.5rem) * 0.15) solid #ffffff;
    height: 0;
    width: 0;
  }
</style>
