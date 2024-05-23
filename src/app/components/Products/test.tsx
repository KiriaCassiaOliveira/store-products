import React from "react";
import { render } from "@testing-library/react";
import Products from ".";

describe("Products", () => {
  it("renders product list correctly", () => {
    render(<Products />);
  });
});
