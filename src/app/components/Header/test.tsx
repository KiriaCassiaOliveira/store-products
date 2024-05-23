import React from "react";
import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it("renders product list correctly", () => {
    render(<Header />);
    expect(screen.getByText("Loja Produtos")).toBeInTheDocument();
  });
});
