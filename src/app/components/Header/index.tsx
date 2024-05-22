import { Container, Title } from "./style";
import Cart from "@/app/components/Cart";

export default function Header() {
  return (
    <Container>
      <Title> Loja Produtos </Title>
      <Cart />
    </Container>
  );
}
