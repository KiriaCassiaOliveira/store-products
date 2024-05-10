/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext, useState, useEffect, useMemo,
} from "react";
import { ProductContextProps } from "@/app/types/types";
import { ProductsType } from "@/app/types";

export const CartContext = createContext({} as ProductContextProps);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<ProductsType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const addToCart = (product: ProductsType) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) => (item.id === product.id ? { ...item, qnt: item.qnt + 1 } : item)),
      );
    } else {
      setCart([...cart, { ...product, qnt: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  useEffect(() => {
    const totalPrice = cart.reduce((acc, curr) => {
      const price = parseFloat(curr.price);
      return acc + price;
    }, 0);
    setTotal(totalPrice);
  }, [cart]);

  const increaseQuantity = (productId: number) => {
    setCart(
      cart.map((item) => (item.id === productId ? { ...item, qnt: item.qnt + 1 } : item)),
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCart(
      cart.map((item) => (item.id === productId && item.qnt > 1 ? { ...item, qnt: item.qnt - 1 } : item)),
    );
  };

  const calculateTotal = () => cart.reduce((acc, curr) => acc + parseFloat(curr.price) * curr.qnt, 0);

  useEffect(() => {
    const totalPrice = calculateTotal();
    setTotal(totalPrice);
  }, [cart, calculateTotal]);

  const removeItem = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const memoizedValue = useMemo(() => ({
    cart,
    addToCart,
    removeFromCart,
    toggleCart,
    isOpen,
    total,
    decreaseQuantity,
    increaseQuantity,
    removeItem,
  }), [cart, addToCart, removeFromCart, toggleCart, isOpen, total, decreaseQuantity, increaseQuantity, removeItem]);

  return (
    <CartContext.Provider value={memoizedValue}>
      {children}
    </CartContext.Provider>
  );
}
