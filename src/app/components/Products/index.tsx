/* eslint-disable no-shadow */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { RiShoppingBag3Line } from "react-icons/ri";
import {
  Container,
  Product,
  ProductImage,
  ProductItens,
  Buy,
  BuyButton,
} from "./style";
import { GetProducts } from "@/app/components/Service/index";
import { CartContext } from "@/context/ProductsProvider";
import { ProductsType } from "@/app/types";

export default function Products() {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);
        const page = 1;
        const rows = 10;
        const sortBy = "name";
        const orderBy = "ASC";

        const response = await GetProducts(page, rows, sortBy, orderBy);
        if (response && response.products) {
          setProducts(response.products);
        } else {
          setError("Falha ao carregar produtos.");
        }
      } catch (error) {
        setError("Erro ao buscar produtos.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const formatPrice = (price: string) => {
    const numericPrice = typeof price === "string" ? parseFloat(price) : price;
    if (isNaN(numericPrice)) {
      return "Preço inválido";
    }

    return numericPrice.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <Container>
      {loading ? (
        <Skeleton count={5} height={200} />
      ) : error ? (
        <p>{error}</p>
      ) : products && products.length > 0 ? (
        products.map((product) => (
          <Product key={product.id}>
            <ProductImage>
              <Image
                src={product.photo}
                alt={product.name}
                width={100}
                height={100}
              />
            </ProductImage>
            <ProductItens>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <strong>{formatPrice(product.price)}</strong>
            </ProductItens>
            <Buy>
              <RiShoppingBag3Line />
              <BuyButton onClick={() => addToCart(product)}>COMPRAR</BuyButton>
            </Buy>
          </Product>
        ))
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
    </Container>
  );
}
