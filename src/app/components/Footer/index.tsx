import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Container } from "./style";

export default function Footer() {
  return (
    <Container>
      Kíria Tecnologia
      <strong>2024</strong>
      <Link href="https://www.linkedin.com/in/kiriacassia/">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link href="https://github.com/KiriaCassiaOliveira">
        <FontAwesomeIcon icon={faGithub} />
      </Link>

    </Container>
  );
}
