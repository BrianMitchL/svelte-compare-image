import { vi } from "vitest";
import { act, render, screen, fireEvent } from "@testing-library/svelte";
import CompareImage from "$lib/CompareImage.svelte";
import TestCompareImageWithSliderLabelSlot from "./TestCompareImageWithSliderLabelSlot.svelte";
import type { ComponentType } from "svelte";

// all 6px x 4px
const orange =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAE0lEQVR42mP8v4rhPwMWwEg9CQCAUAqlh3DvmwAAAABJRU5ErkJggg==";
const blue =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAE0lEQVR42mNkYPj/nwELYKSeBADXlQf9hqMCfQAAAABJRU5ErkJggg==";
const magenta =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAE0lEQVR42mP8z/D/PwMWwEg9CQDMrgv54stjQgAAAABJRU5ErkJggg==";
const yellow6x10 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAKCAYAAACXDi8zAAAAE0lEQVR42mP8/5/hPwMWwDjcJQDOYx3t9hEGagAAAABJRU5ErkJggg==";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderHelper(
  component: ComponentType = CompareImage,
  props?: Record<string, unknown>,
) {
  const view = render(component, {
    imageLeftSrc: orange,
    imageLeftAlt: "left-alt",
    imageRightSrc: blue,
    imageRightAlt: "right-alt",
    ...props,
  });

  // the images are 6px x 4px, and let's say they're in a container with 2px padding
  vi
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .spyOn(screen.getByAltText("left-alt"), "naturalWidth", "get")
    .mockReturnValue(6);
  vi
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .spyOn(screen.getByAltText("left-alt"), "naturalHeight", "get")
    .mockReturnValue(4);
  vi
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .spyOn(screen.getByAltText("right-alt"), "naturalWidth", "get")
    .mockReturnValue(6);
  vi
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .spyOn(screen.getByAltText("right-alt"), "naturalHeight", "get")
    .mockReturnValue(4);

  return view;
}

describe("CompareImage", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders empty images when no props are provided", () => {
    render(CompareImage);

    for (const image of screen.getAllByRole("img")) {
      expect(image).not.toHaveAttribute("src");
      expect(image).toHaveAttribute("alt", "");
    }
  });

  it("renders two images", async () => {
    renderHelper();

    expect(await screen.findAllByRole("img")).toHaveLength(2);
    expect(screen.getByAltText("left-alt")).toBeInTheDocument();
    expect(screen.getByAltText("right-alt")).toBeInTheDocument();
  });

  it("switches to a new image when props change", async () => {
    const { component } = renderHelper();

    expect(screen.getByAltText("left-alt")).toHaveAttribute("src", orange);
    expect(screen.getByAltText("right-alt")).toHaveAttribute("src", blue);

    await act(() => {
      component.$set({ imageLeftSrc: magenta });
    });

    expect(screen.getByAltText("left-alt")).toHaveAttribute("src", magenta);
    expect(screen.getByAltText("right-alt")).toHaveAttribute("src", blue);
  });

  it("switches to a new image with different dimensions when props change", async () => {
    const { component } = renderHelper();

    expect(screen.getByAltText("left-alt")).toHaveAttribute("src", orange);
    expect(screen.getByAltText("right-alt")).toHaveAttribute("src", blue);

    await act(() => {
      component.$set({ imageRightSrc: yellow6x10 });
    });

    expect(screen.getByAltText("left-alt")).toHaveAttribute("src", orange);
    expect(screen.getByAltText("right-alt")).toHaveAttribute("src", yellow6x10);
  });

  it("sets the --slider-position custom property when changing the slider", async () => {
    renderHelper();

    expect(screen.getByRole("slider")).toHaveValue("50");
    expect(screen.getByTestId("svelte-compare-image")).toHaveStyle(
      "--slider-position: 50%",
    );

    await fireEvent.change(screen.getByRole("slider"), {
      target: { value: 20 },
    });

    expect(screen.getByRole("slider")).toHaveValue("20");

    await act(() => {
      vi.runAllTimers();
    });

    expect(screen.getByTestId("svelte-compare-image")).toHaveStyle(
      "--slider-position: 20%",
    );
  });

  it("has an accessible label for the slider", async () => {
    renderHelper();

    expect(screen.getByRole("slider")).toHaveAccessibleName(
      "Set the visibility of one image over the other. 0 is full visibility of the second image and 100 is full visibility of the first image. Any amount in-between is a left/right cutoff at the percentage of the slider.",
    );
  });

  it("sets the range input label with the slider-label slot", async () => {
    renderHelper(TestCompareImageWithSliderLabelSlot);

    expect(screen.getByRole("slider")).toHaveAccessibleName("Custom label!");
  });

  it("focuses on the range input when clicking it", async () => {
    renderHelper();

    expect(screen.getByRole("slider")).not.toHaveFocus();

    await fireEvent.click(screen.getByRole("slider"));

    expect(screen.getByRole("slider")).toHaveFocus();
  });
});
