import { ILoading } from "./types"
import { Container, Spinner } from "./styles"

const Loading: React.FC<ILoading> = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  )
}

export { Loading }
