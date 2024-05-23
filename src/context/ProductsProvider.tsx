/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext, useState, useEffect, useMemo,
} from "react";
import { ProductContextProps } from "@/app/types/types";
import { ProductsType } from "@/app/types";

export const CartContext = createContext<ProductContextProps>({} as ProductContextProps);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<ProductsType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [isCartLoaded, setIsCartLoaded] = useState<boolean>(false);

  const loadCartFromLocalStorage = () => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
      setIsCartLoaded(true);
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
  };

  const calculateTotal = () => cart.reduce((acc, curr) => acc + parseFloat(curr.price) * curr.qnt, 0);

  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);

  useEffect(() => {
    if (isCartLoaded) {
      try {
        localStorage.setItem("cart", JSON.stringify(cart));
      } catch (error) {
        console.error("Failed to save cart to localStorage:", error);
      }
    }
  }, [cart, isCartLoaded]);

  useEffect(() => {
    if (isCartLoaded) {
      const totalPrice = calculateTotal();
      setTotal(totalPrice);
    }
  }, [cart, isCartLoaded]);

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
  }), [cart, isOpen, total]);

  return (
    <CartContext.Provider value={memoizedValue}>
      {children}
    </CartContext.Provider>
  );
}
