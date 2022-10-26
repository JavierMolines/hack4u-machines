import { ILoading } from "./types"
import { Container } from "./styles"

const Loading: React.FC<ILoading> = () => {
  const example = <p>Loading</p>
  return <Container>{example}</Container>
}

export { Loading }
