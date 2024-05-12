/* eslint-disable no-nested-ternary */
import { useContext, useEffect, useState } from "react";
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

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const page = 1;
        const rows = 10;
        const sortBy = "name";
        const orderBy = "ASC";

        const response = await GetProducts(page, rows, sortBy, orderBy);
        if (response && response.products) {
          setProducts(response.products);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <Container>
      {loading ? (
        <Skeleton count={5} />
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
              <strong>
                R$
                {product.price}
              </strong>
            </ProductItens>

            <p>{product.description}</p>

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
