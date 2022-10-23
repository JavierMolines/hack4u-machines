import { IFooter } from './types'
import { Container } from './styles'

const Footer: React.FC<IFooter> = () => {
  const example = (<p>Footer is alive.</p>)
  return (
    <Container>
      {example}
    </Container>
  )
}

export { Footer }
