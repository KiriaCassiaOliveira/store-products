import Link from "next/link";
import { Container } from "./style";

export default function Footer() {
  return (
    <Container>
      Kíria Tecnologia
      <strong>2024</strong>
      <Link href="https://www.linkedin.com/in/kiriacassia/">
        <p>Linkedin</p>
      </Link>
      <Link href="https://github.com/KiriaCassiaOliveira">
        <p>Git</p>
      </Link>

    </Container>
  );
}
