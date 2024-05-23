/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMiniShoppingCart } from "react-icons/hi2";
import Image from "next/image";
import {
  Container,
  IconCart,
  HeaderCart,
  ProductCart,
  ProductQnt,
  ExitButton,
  FinallyButton,
  ButtonRemove,
  TotalFinally,
  Img,
  Price,
} from "./style";
import { CartContext } from "@/context/ProductsProvider";

export default function Cart() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      setIsMobile(mediaQuery.matches);

      const handleResize = () => setIsMobile(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleResize);

      return () => mediaQuery.removeEventListener("change", handleResize);
    }
  }, []);

  const {
    cart,
    toggleCart,
    isOpen,
    total,
    decreaseQuantity,
    increaseQuantity,
    removeItem,
  } = useContext(CartContext);

  const formatReal = (value: number) => value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Container>
      <IconCart onClick={() => toggleCart(true)}>
        <HiMiniShoppingCart />
        <p>{cart ? cart.length : 0}</p>
      </IconCart>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor: "#fff",
            color: "#665635",
            width: isMobile ? "70%" : "33%",
            height: "100%",
            position: "fixed",
            top: "0",
            right: isOpen ? "0" : "-100%",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            zIndex: 999,
          }}
        >
          <HeaderCart>
            <p>Meu carrinho</p>
            <ExitButton onClick={() => toggleCart(false)}>X</ExitButton>
          </HeaderCart>

          <div>
            {cart.map((product) => (
              <ProductCart key={product.id}>
                <Img>
                  <Image
                    src={product.photo}
                    alt={product.name}
                    width={50}
                    height={50}
                  />
                </Img>
                <p>{product.name}</p>
                <ProductQnt>
                  <span onClick={() => decreaseQuantity(product.id)}>-</span>
                  <p>{product.qnt}</p>
                  <span onClick={() => increaseQuantity(product.id)}>+</span>
                </ProductQnt>
                <Price>
                  <strong>
                    R$
                    {product.price}
                  </strong>
                  <ButtonRemove onClick={() => removeItem(product.id)}>
                    X
                  </ButtonRemove>
                </Price>

              </ProductCart>
            ))}
          </div>
          <TotalFinally>
            <p>
              Total:
              {formatReal(total)}
            </p>
            <FinallyButton>Comprar Agora</FinallyButton>
          </TotalFinally>
        </motion.div>
      )}
    </Container>
  );
}
