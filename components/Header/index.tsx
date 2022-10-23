import { IHeader } from './types'
import { Container } from './styles'

const Header: React.FC<IHeader> = () => {
  const example = (<p>Header is alive.</p>)
  return (
    <Container>
      {example}
    </Container>
  )
}

export { Header }
