import { IHeader } from "./types"
import { Container, PlatformContainer } from "./styles"

const Header: React.FC<IHeader> = ({ totalMachines }) => {
  const htb = totalMachines.filter(
    (data) => data.platform === "HackTheBox"
  ).length
  const vuln = totalMachines.filter(
    (data) => data.platform === "VulnHub"
  ).length

  return (
    <Container>
      <h1>S4vitar Machine&apos;s Resolutions</h1>
      <h2>Loaded Machines</h2>
      <PlatformContainer>
        <p>HackTheBox: {htb}</p>
        <p>VulnHub: {vuln}</p>
      </PlatformContainer>
    </Container>
  )
}

export { Header }
