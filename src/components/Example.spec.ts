import { vi } from "vitest";
import {
  act,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/svelte";
import Example from "./Example.svelte";

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
});
