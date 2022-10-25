import { IVerticalMenu } from "./types"
import { Container } from "./styles"

const VerticalMenu: React.FC<IVerticalMenu> = () => {
  const example = <p>VerticalMenu is alive.</p>
  return <Container>{example}</Container>
}

export { VerticalMenu }
