import { IContainerMachines } from "./types"
import { Container, LabelFound } from "./styles"
import { MachineCard } from "../MachineCard"
import { randomId } from "../../utils/methods"

const ContainerMachines: React.FC<IContainerMachines> = ({ machines }) => {
  return machines.length > 0 ? (
    <>
      <LabelFound>Machines found {machines.length}</LabelFound>
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
              key={randomId() + data.name}
            />
          )
        })}
      </Container>
    </>
  ) : (
    <></>
  )
}

export { ContainerMachines }
