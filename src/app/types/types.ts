/* eslint-disable no-unused-vars */
import React from "react";
import { ProductsType } from "./ProductsType";

export type ProductContextProps = {
  cart: ProductsType[];
  addToCart: (product: ProductsType) => void;
  removeFromCart: (productId: number) => void;
  toggleCart: (isOpen: boolean) => void;
  isOpen: boolean;
  total: number;
  decreaseQuantity: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  removeItem: (productId: number) => void;
};
