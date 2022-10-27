import { IHeader } from "./types"
import { Container, PlatformContainer } from "./styles"

const Header: React.FC<IHeader> = ({ totalMachines }) => {
  return (
    <Container>
      <h1>S4vitar Machine&apos;s Resolutions</h1>
      <h2>Loaded Machines</h2>
      <PlatformContainer>
        <p>HackTheBox: {totalMachines}</p>
        <p>VulnHub: {totalMachines}</p>
        <p>PortSwigger: {totalMachines}</p>
      </PlatformContainer>
    </Container>
  )
}

export { Header }
