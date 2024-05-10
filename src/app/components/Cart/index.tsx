import { useContext } from "react";
import { motion } from "framer-motion";
import { HiMiniShoppingCart } from "react-icons/hi2";
import Image from "next/image";
import {
  Container, IconCart, HeaderCart, FooterCart, ProductCart,
} from "./style";
import { Button } from "../Button/style";
import { CartContext } from "@/context/ProductsProvider";

export default function Cart() {
  const {
    cart, toggleCart, isOpen, total, decreaseQuantity, increaseQuantity, removeItem,
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
            width: "27%",
            height: "900px",
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
            <Button $primary onClick={toggleCart}>X</Button>
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
                <div>
                  <button type="button" onClick={(event: React.MouseEvent<HTMLButtonElement>) => decreaseQuantity(product.id)}>-</button>
                  <p>{product.qnt}</p>
                  <button  type="button" onClick={(event: React.MouseEvent<HTMLButtonElement>) => increaseQuantity(product.id)}>+</button>
                </div>
                <strong>
                  R$
                  {product.price}
                </strong>
                <button onClick={() => removeItem(product.id)}>x</button>
                {/* Renderize outros detalhes do produto, se necessário */}
              </ProductCart>
            ))}
          </div>
          <FooterCart>
            <p>
              Total: R$
              {total.toFixed(2)}
            </p>
            <Button>Finalizar Compra</Button>
          </FooterCart>

        </motion.div>
      )}
    </Container>
  );
}
