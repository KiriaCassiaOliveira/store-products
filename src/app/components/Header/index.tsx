import { Container, Title } from "./style";
import Cart from "@/app/components/Cart";

export default function Header() {
  return (
    <Container>
      <Title> MKS Sistemas </Title>
      <Cart />
    </Container>
  );
}
