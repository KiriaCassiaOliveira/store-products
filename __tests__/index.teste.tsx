/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import test from "node:test";
import Home from "@/app/page";
import "@testing-library/jest-dom/extend-expect";

test("renders Home component with Header and Products", () => {
  const { getByTestId } = render(<Home />);

  const homeComponent = getByTestId("home-component");
  expect(homeComponent).toBeInTheDocument();

  const headerComponent = getByTestId("header-component");
  expect(headerComponent).toBeInTheDocument();

  const productsComponent = getByTestId("products-component");
  expect(productsComponent).toBeInTheDocument();
});
