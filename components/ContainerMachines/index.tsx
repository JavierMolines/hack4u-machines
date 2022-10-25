import { IContainerMachines } from "./types"
import { Container } from "./styles"
import { MachineCard } from "../MachineCard"
// import { useUserInfo } from "../../hooks/useUser"
import { useMachines } from "../../hooks/useMachines"
import { useState } from "react"

const ContainerMachines: React.FC<IContainerMachines> = () => {
  const { machines } = useMachines()
  const [machinesInView, setMachinesInView] = useState<Array<any>>([1, 2, 3, 4])

  return (
    <Container>
      {machinesInView.map((data: any, index: number) => {
        return <MachineCard title={data.name} key={index} />
      })}
    </Container>
  )
}

export { ContainerMachines }
