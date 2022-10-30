import { IVerticalMenu } from "./types"
import { Container } from "./styles"

const VerticalMenu: React.FC<IVerticalMenu> = () => {
  const example = <p>VerticalMenu Test Commit is alive.</p>
  return <Container>{example}</Container>
}

export { VerticalMenu }
