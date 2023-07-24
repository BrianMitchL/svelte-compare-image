import { vi } from "vitest";
import {
  act,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/svelte";
import Example from "../components/Example.svelte";

function getRangeInput(image: "Left" | "Right", dimension: "Width" | "Height") {
  return within(
    screen.getByRole("group", { name: `${image} Image Size` })
  ).getByLabelText(dimension);
}

describe("Example", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    render(Example);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("initializes with default dimensions", () => {
    expect(getRangeInput("Left", "Width")).toHaveValue("600");
    expect(getRangeInput("Left", "Height")).toHaveValue("400");
    expect(
      screen.getByRole("group", { name: "Left Image Size" })
    ).toHaveAccessibleDescription("Dimensions are 600px x 400px");
    expect(getRangeInput("Right", "Width")).toHaveValue("600");
    expect(getRangeInput("Right", "Height")).toHaveValue("400");
    expect(
      screen.getByRole("group", { name: "Right Image Size" })
    ).toHaveAccessibleDescription("Dimensions are 600px x 400px");
  });

  it("resizes the left image", async () => {
    expect(getRangeInput("Left", "Width")).toHaveValue("600");
    expect(getRangeInput("Left", "Height")).toHaveValue("400");
    expect(
      screen.getByRole("group", { name: "Left Image Size" })
    ).toHaveAccessibleDescription("Dimensions are 600px x 400px");

    await fireEvent.input(getRangeInput("Left", "Width"), {
      target: { value: 450 },
    });
    await fireEvent.input(getRangeInput("Left", "Height"), {
      target: { value: 200 },
    });

    expect(getRangeInput("Left", "Width")).toHaveValue("450");
    expect(getRangeInput("Left", "Height")).toHaveValue("200");

    await act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(
      screen.getByRole("group", { name: "Left Image Size" })
    ).toHaveAccessibleDescription("Dimensions are 450px x 200px");
  });

  it("resizes the right image", async () => {
    expect(getRangeInput("Right", "Width")).toHaveValue("600");
    expect(getRangeInput("Right", "Height")).toHaveValue("400");
    expect(
      screen.getByRole("group", { name: "Right Image Size" })
    ).toHaveAccessibleDescription("Dimensions are 600px x 400px");

    await fireEvent.input(getRangeInput("Right", "Width"), {
      target: { value: 450 },
    });
    await fireEvent.input(getRangeInput("Right", "Height"), {
      target: { value: 200 },
    });

    expect(getRangeInput("Right", "Width")).toHaveValue("450");
    expect(getRangeInput("Right", "Height")).toHaveValue("200");

    await act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(
      screen.getByRole("group", { name: "Right Image Size" })
    ).toHaveAccessibleDescription("Dimensions are 450px x 200px");
  });

  it("changes the handle size", async () => {
    expect(screen.getByLabelText("Handle Size")).toHaveValue("2.5");
    expect(screen.getByLabelText("Code Snippet")).toHaveTextContent(
      /--handle-size="2\.5rem"/
    );

    await fireEvent.input(screen.getByLabelText("Handle Size"), {
      target: { value: 1.25 },
    });

    expect(screen.getByLabelText("Handle Size")).toHaveValue("1.25");
    expect(screen.getByLabelText("Code Snippet")).toHaveTextContent(
      /--handle-size="1\.25rem"/
    );
  });

  it("changes the handle background color", async () => {
    expect(screen.getByLabelText("Handle Background Color")).toHaveValue(
      "#000000"
    );
    expect(screen.getByLabelText("Code Snippet")).toHaveTextContent(
      /--handle-background-color="rgba\(0, 0, 0, 0\.6\)"/
    );

    await fireEvent.input(screen.getByLabelText("Handle Background Color"), {
      target: { value: "#bada55" },
    });

    expect(screen.getByLabelText("Handle Background Color")).toHaveValue(
      "#bada55"
    );
    expect(screen.getByLabelText("Code Snippet")).toHaveTextContent(
      /--handle-background-color="#bada55"/
    );
  });

  it("changes the handle border width", async () => {
    expect(screen.getByLabelText("Handle Border Width")).toHaveValue("0.125");
    expect(screen.getByLabelText("Code Snippet")).toHaveTextContent(
      /--handle-border-width="0\.125rem"/
    );

    await fireEvent.input(screen.getByLabelText("Handle Border Width"), {
      target: { value: 0.75 },
    });

    expect(screen.getByLabelText("Handle Border Width")).toHaveValue("0.75");
    expect(screen.getByLabelText("Code Snippet")).toHaveTextContent(
      /--handle-border-width="0\.75rem"/
    );
  });

  it("changes the slider color", async () => {
    expect(screen.getByLabelText("Slider Color")).toHaveValue("#ffffff");
    expect(screen.getByLabelText("Code Snippet")).toHaveTextContent(
      /--slider-color="#ffffff"/
    );

    await fireEvent.input(screen.getByLabelText("Slider Color"), {
      target: { value: "#bada55" },
    });

    expect(screen.getByLabelText("Slider Color")).toHaveValue("#bada55");
    expect(screen.getByLabelText("Code Snippet")).toHaveTextContent(
      /--slider-color="#bada55"/
    );
  });

  it("changes the slider width", async () => {
    expect(screen.getByLabelText("Slider Width")).toHaveValue("0.125");
    expect(screen.getByLabelText("Code Snippet")).toHaveTextContent(
      /--slider-width="0\.125rem"/
    );

    await fireEvent.input(screen.getByLabelText("Slider Width"), {
      target: { value: 0.25 },
    });

    expect(screen.getByLabelText("Slider Width")).toHaveValue("0.25");
    expect(screen.getByLabelText("Code Snippet")).toHaveTextContent(
      /--slider-width="0\.25rem"/
    );
  });
});
