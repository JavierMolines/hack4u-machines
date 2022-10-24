import { IHeader } from "./types"
import { Container } from "./styles"

const Header: React.FC<IHeader> = () => {
  return (
    <Container>
      <h1>S4vitar Machine&apos;s Resolutions</h1>
    </Container>
  )
}

export { Header }
