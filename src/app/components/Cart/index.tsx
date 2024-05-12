/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from "react";
import { motion } from "framer-motion";
import { HiMiniShoppingCart } from "react-icons/hi2";
import Image from "next/image";
import {
  Container,
  IconCart,
  HeaderCart,
  FooterCart,
  ProductCart,
  ProductQnt,
  ExitButton,
  FinallyButton,
  ButtonRemove,
} from "./style";
import { CartContext } from "@/context/ProductsProvider";

export default function Cart() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const {
    cart,
    toggleCart,
    isOpen,
    total,
    decreaseQuantity,
    increaseQuantity,
    removeItem,
  } = useContext(CartContext);

  return (
    <Container>
      <IconCart onClick={toggleCart}>
        <HiMiniShoppingCart />
        <p>{cart.length}</p>
      </IconCart>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor: "#0f52ba",
            color: "#fff",
            width: isMobile ? "50%" : "27%",
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
            <p>Carrinho de compras</p>
            <ExitButton onClick={toggleCart}>X</ExitButton>
          </HeaderCart>

          <div>
            {cart.map((product) => (
              <ProductCart key={product.id}>
                <Image
                  src={product.photo}
                  alt="Imagem do produto"
                  width={50}
                  height={50}
                />
                <p>{product.name}</p>
                <ProductQnt>
                  <span onClick={() => decreaseQuantity(product.id)}>-</span>
                  <p>{product.qnt}</p>
                  <span onClick={() => increaseQuantity(product.id)}>+</span>
                </ProductQnt>
                <strong>
                  R$
                  {product.price}
                </strong>
                <ButtonRemove onClick={() => removeItem(product.id)}>
                  X
                </ButtonRemove>
              </ProductCart>
            ))}
          </div>
          <FooterCart>
            <p>
              Total: R$
              {total.toFixed(2)}
            </p>
            <FinallyButton>Finalizar Compra</FinallyButton>
          </FooterCart>
        </motion.div>
      )}
    </Container>
  );
}
