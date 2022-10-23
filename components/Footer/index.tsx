import { IFooter } from "./types"
import { Container } from "./styles"

const Footer: React.FC<IFooter> = () => {
  return (
    <Container>
      <p>Made by JavierVoid with more love to the Hack4u community.</p>

      <p>
        Special thanks to CheatMode4 because this page is based on their
        website.
      </p>
    </Container>
  )
}

export { Footer }
