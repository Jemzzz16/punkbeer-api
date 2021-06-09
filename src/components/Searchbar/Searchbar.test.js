import React from "react";
import { render } from "@testing-library/react";
import Searchbar from "./Searchbar";

describe("Searchbar tests", () => {
  it("should render", () => {
    expect(render(<Searchbar />)).toBeTruthy();
  });
});
