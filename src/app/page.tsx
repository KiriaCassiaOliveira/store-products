"use client";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/assets/styles/global";
import defaultTheme from "@/assets/styles/themes/default";
import { Container } from "./style";
import Header from "./components/Header";
import Products from "./components/Products";
import { CartProvider } from "@/context/ProductsProvider";

export default function Home() {
  return (
    <CartProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container data-testid="home-component">
          <Header data-testid="header-component" />
          <Products data-testid="products-component" />
        </Container>
      </ThemeProvider>
    </CartProvider>

  );
}
