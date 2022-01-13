import { jest } from "@jest/globals";
import { act, render, screen, fireEvent } from "@testing-library/svelte";
import CompareImage from "./CompareImage.svelte";

// all 6px x 4px
const orange =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAE0lEQVR42mP8v4rhPwMWwEg9CQCAUAqlh3DvmwAAAABJRU5ErkJggg==";
const blue =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAE0lEQVR42mNkYPj/nwELYKSeBADXlQf9hqMCfQAAAABJRU5ErkJggg==";
const magenta =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAE0lEQVR42mP8z/D/PwMWwEg9CQDMrgv54stjQgAAAABJRU5ErkJggg==";
const yellow6x10 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAKCAYAAACXDi8zAAAAE0lEQVR42mP8/5/hPwMWwDjcJQDOYx3t9hEGagAAAABJRU5ErkJggg==";

async function renderHelper(props?: Record<string, any>) {
  let listener: ((entry: ResizeObserverEntry[]) => void) | undefined =
    undefined;
  /* good god, the hacks in here to get these tests to run in jsdom 😬 */
  (window as any).ResizeObserver = class ResizeObserver {
    constructor(ls: (entry: ResizeObserverEntry[]) => void) {
      listener = ls;
    }
    observe() {
      return;
    }
    disconnect() {
      return;
    }
  };

  const view = render(CompareImage, {
    imageLeftSrc: orange,
    imageLeftAlt: "left-alt",
    imageRightSrc: blue,
    imageRightAlt: "right-alt",
    ...props,
  });

  // the images are 6px x 4px, and let's say they're in a container with 2px padding
  jest
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .spyOn(screen.getByAltText("left-alt"), "naturalWidth", "get")
    .mockReturnValue(6);
  jest
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .spyOn(screen.getByAltText("left-alt"), "naturalHeight", "get")
    .mockReturnValue(4);
  jest
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .spyOn(screen.getByAltText("right-alt"), "naturalWidth", "get")
    .mockReturnValue(6);
  jest
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .spyOn(screen.getByAltText("right-alt"), "naturalHeight", "get")
    .mockReturnValue(4);

  await fireEvent.load(screen.getByAltText("left-alt"));
  await fireEvent.load(screen.getByAltText("right-alt"));

  await act(() => {
    listener!([
      {
        target: {
          getBoundingClientRect: () => ({
            width: 6,
            height: 4,
            top: 2,
            left: 2,
            right: 8,
            bottom: 6,
            x: 2,
            y: 2,
          }),
        },
      } as ResizeObserverEntry,
    ]);
  });

  jest
    .spyOn(screen.getByAltText("left-alt"), "getBoundingClientRect")
    .mockReturnValue({
      width: 6,
      height: 4,
      top: 2,
      left: 2,
    } as DOMRect);

  jest
    .spyOn(screen.getByAltText("right-alt"), "getBoundingClientRect")
    .mockReturnValue({
      width: 6,
      height: 4,
      top: 2,
      left: 2,
    } as DOMRect);

  return view;
}

describe("CompareImage", () => {
  const originalResizeObserver = window.ResizeObserver;

  afterEach(() => {
    window.ResizeObserver = originalResizeObserver;
  });

  it("renders empty images when no props are provided", () => {
    render(CompareImage);

    for (const image of screen.getAllByRole("img")) {
      expect(image).toHaveAttribute("src", "");
      expect(image).toHaveAttribute("alt", "");
    }
  });

  it("renders two images", async () => {
    await renderHelper();

    expect(await screen.findAllByRole("img")).toHaveLength(2);
    expect(screen.getByAltText("left-alt")).toBeInTheDocument();
    expect(screen.getByAltText("right-alt")).toBeInTheDocument();
  });

  it("switches to a new image when props change", async () => {
    const { component } = await renderHelper();

    expect(screen.getByAltText("left-alt")).toHaveAttribute("src", orange);
    expect(screen.getByAltText("right-alt")).toHaveAttribute("src", blue);

    await act(() => {
      component.$set({ imageLeftSrc: magenta });
    });

    expect(screen.getByAltText("left-alt")).toHaveAttribute("src", magenta);
    expect(screen.getByAltText("right-alt")).toHaveAttribute("src", blue);
  });

  it("switches to a new image with different dimensions when props change", async () => {
    const { component } = await renderHelper();

    expect(screen.getByAltText("left-alt")).toHaveAttribute("src", orange);
    expect(screen.getByAltText("right-alt")).toHaveAttribute("src", blue);

    await act(() => {
      component.$set({ imageRightSrc: yellow6x10 });
    });

    expect(screen.getByAltText("left-alt")).toHaveAttribute("src", orange);
    expect(screen.getByAltText("right-alt")).toHaveAttribute("src", yellow6x10);
  });

  it("sets style on the container element", async () => {
    await renderHelper();

    expect(screen.getByTestId("svelte-compare-image")).toHaveStyle({
      "--container-height": "4px",
      "--container-width": "6px",
      "--slider-width": "2px",
    });
  });

  it("sets style on the container element with a custom slider width", async () => {
    await renderHelper({
      sliderWidth: 7,
    });

    expect(screen.getByTestId("svelte-compare-image")).toHaveStyle({
      "--container-height": "4px",
      "--container-width": "6px",
      "--slider-width": "7px",
    });
  });

  it("changes the slider position with arrow keys", async () => {
    async function keyDownArrow(dir: "Left" | "Right" | "Up" | "Down") {
      await fireEvent.keyDown(screen.getByRole("slider"), {
        key: `Arrow${dir}`,
      });
    }

    function expectValueNow(value: string) {
      expect(screen.getByRole("slider")).toHaveAttribute(
        "aria-valuenow",
        value
      );
    }

    await renderHelper();

    expectValueNow("0.5");
    await keyDownArrow("Left");
    expectValueNow("0.4");
    await keyDownArrow("Down");
    expectValueNow("0.3");
    await keyDownArrow("Left");
    expectValueNow("0.2");
    await keyDownArrow("Left");
    expectValueNow("0.1");
    await keyDownArrow("Down");
    expectValueNow("0");
    await keyDownArrow("Left");
    expectValueNow("0");
    await keyDownArrow("Right");
    expectValueNow("0.1");
    await keyDownArrow("Right");
    expectValueNow("0.2");
    await keyDownArrow("Up");
    expectValueNow("0.3");
    await keyDownArrow("Right");
    expectValueNow("0.4");
    await keyDownArrow("Right");
    expectValueNow("0.5");
    await keyDownArrow("Right");
    expectValueNow("0.6");
    await keyDownArrow("Right");
    expectValueNow("0.7");
    await keyDownArrow("Up");
    expectValueNow("0.8");
    await keyDownArrow("Right");
    expectValueNow("0.9");
    await keyDownArrow("Right");
    expectValueNow("1");
    await keyDownArrow("Right");
    expectValueNow("1");
    await keyDownArrow("Left");
    expectValueNow("0.9");
  });

  it("changes the slider position with mouse events", async () => {
    await renderHelper();

    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "0.5");

    await fireEvent.mouseDown(screen.getByTestId("svelte-compare-image"), {
      clientX: 4,
    });

    expect(screen.getByRole("slider")).toHaveFocus();
    expect(screen.getByRole("slider")).toHaveAttribute(
      "aria-valuenow",
      "0.3333333333333333"
    );

    await fireEvent.mouseMove(screen.getByTestId("svelte-compare-image"), {
      clientX: 6,
    });
    await fireEvent.mouseUp(screen.getByTestId("svelte-compare-image"));

    expect(screen.getByRole("slider")).toHaveAttribute(
      "aria-valuenow",
      "0.6666666666666666"
    );
  });

  it("changes the slider position with touch events", async () => {
    await renderHelper();

    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "0.5");

    await fireEvent.touchStart(screen.getByTestId("svelte-compare-image"), {
      touches: [
        {
          clientX: 4,
        },
      ],
    });

    expect(screen.getByRole("slider")).toHaveFocus();
    expect(screen.getByRole("slider")).toHaveAttribute(
      "aria-valuenow",
      "0.3333333333333333"
    );

    await fireEvent.touchMove(screen.getByTestId("svelte-compare-image"), {
      touches: [
        {
          clientX: 3,
        },
      ],
    });
    await fireEvent.touchEnd(screen.getByTestId("svelte-compare-image"));

    expect(screen.getByRole("slider")).toHaveAttribute(
      "aria-valuenow",
      "0.16666666666666666"
    );
  });
});
