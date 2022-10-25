import { IHeader } from "./types"
import { Container } from "./styles"
import { useMachines } from "../../hooks/useMachines"

const Header: React.FC<IHeader> = () => {
  const { machines } = useMachines()

  return (
    <Container>
      <h1>S4vitar Machine&apos;s Resolutions</h1>
      <h2>Loaded HTB Machines: {machines.length}</h2>
    </Container>
  )
}

export { Header }
