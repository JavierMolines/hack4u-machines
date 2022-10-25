import { IContainerMachines } from "./types"
import { Container } from "./styles"
import { MachineCard } from "../MachineCard"
import { useMachines } from "../../hooks/useMachines"
import { useEffect, useState } from "react"
import { IMachineCard } from "../MachineCard/types"

const ContainerMachines: React.FC<IContainerMachines> = () => {
  const { machines } = useMachines()
  const [machinesInView, setMachinesInView] = useState<Array<IMachineCard>>([])

  useEffect(() => {
    if (machines.length > 0) {
      setMachinesInView(machines.splice(0, 10))
    }
  }, [machines])

  return (
    <Container>
      {machinesInView.map((data, index: number) => {
        return (
          <MachineCard
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
  )
}

export { ContainerMachines }
