"use client";

import { ThemeProvider } from "styled-components";
import Head from "next/head";
import GlobalStyles from "@/assets/styles/global";
import defaultTheme from "@/assets/styles/themes/default";
import { Container } from "./style";
import Header from "./components/Header";
import Products from "./components/Products";
import { CartProvider } from "@/context/ProductsProvider";
import vercel from "../../public/vercel.svg";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <CartProvider>
      <ThemeProvider theme={defaultTheme}>
        <Head><link rel="icon" href={vercel} /></Head>
        <GlobalStyles />
        <Container>
          <Header />
          <Products />
          <Footer />
        </Container>
      </ThemeProvider>
    </CartProvider>

  );
}
