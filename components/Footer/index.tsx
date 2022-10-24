import { IFooter } from "./types"
import { Container, LinePerson } from "./styles"

const Footer: React.FC<IFooter> = () => {
  return (
    <Container>
      <p>
        Made by
        <LinePerson target="_blank" href="https://github.com/JavierMolines/">
          JavierVoid
        </LinePerson>
        with more love to the Hack4u community.
      </p>

      <p>
        Special thanks to
        <LinePerson target="_blank" href="https://twitter.com/cheatmodes4/">
          @CheatMode4
        </LinePerson>
        because this page is based on their website.
      </p>
    </Container>
  )
}

export { Footer }
