import { IContainerMachines } from "./types"
import { Container } from "./styles"
import { MachineCard } from "../MachineCard"

const ContainerMachines: React.FC<IContainerMachines> = ({ machines }) => {
  return machines.length > 0 ? (
    <Container>
      {machines.map((data, index: number) => {
        return (
          <MachineCard
            platform={data.platform}
            name={data.name}
            os={data.os}
            certification={data.certification}
            techniques={data.techniques}
            video={data.video}
            ip={data.ip}
            state={data.state}
            key={index}
          />
        )
      })}
    </Container>
  ) : (
    <></>
  )
}

export { ContainerMachines }
