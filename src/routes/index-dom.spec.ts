import { render, screen } from "@testing-library/svelte";
import Index from "./index.svelte";

describe("index", () => {
  beforeEach(() => {
    render(Index);
  });

  describe("once the component has been rendered", () => {
    it("renders the proper heading", () => {
      expect(
        screen.getByRole("heading", { name: "Svelte Compare Image" })
      ).toBeInTheDocument();
    });

    it("renders the correct links", () => {
      expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
        "href",
        "https://github.com/BrianMitchL/svelte-compare-image"
      );
      expect(
        screen.getByRole("link", { name: "svelte-compare-image" })
      ).toHaveAttribute(
        "href",
        "https://npmjs.com/package/svelte-compare-image"
      );
      expect(
        screen.getByRole("link", { name: "react-compare-image" })
      ).toHaveAttribute(
        "href",
        "https://github.com/junkboy0315/react-compare-image"
      );
    });
  });
});
