import {expect, test} from "vitest";
import Home from "@/app/page";
import {render, screen} from "@testing-library/react";

test("Home Test", () => {
  render(<Home/>);
  expect(
    screen.getByText("Get started by editing")
  ).toBeDefined()
});