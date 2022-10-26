import { IHeader } from "./types"
import { Container } from "./styles"

const Header: React.FC<IHeader> = ({ totalMachines }) => {
  return (
    <Container>
      <h1>S4vitar Machine&apos;s Resolutions</h1>
      <h2>Loaded HTB Machines: {totalMachines}</h2>
    </Container>
  )
}

export { Header }
