import { IMachineCard } from "./types"
import { CardLabel, Container } from "./styles"

const MachineCard: React.FC<IMachineCard> = ({ title }) => {
  return (
    <Container>
      <CardLabel>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </CardLabel>
    </Container>
  )
}

export { MachineCard }
