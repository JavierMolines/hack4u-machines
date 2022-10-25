import { IContainerMachines } from "./types"
import { Container } from "./styles"
import { MachineCard } from "../MachineCard"
import { useEffect } from "react"

const ContainerMachines: React.FC<IContainerMachines> = () => {
  const machines: Array<any> = [
    {
      name: "generate1",
    },
    {
      name: "generate2",
    },
    {
      name: "generate3",
    },
    {
      name: "generate4",
    },
    {
      name: "generate5",
    },
  ]

  const callApi = async () => {
    const data = await fetch("https://randomuser.me/api/")
    const text = await data.json()
    return text
  }

  useEffect(() => {
    console.log("hello")
    const general = callApi()
    console.log(general)
  }, [])

  return (
    <Container>
      {machines.map((data: any, index: number) => {
        return <MachineCard title={data.name} key={index} />
      })}
    </Container>
  )
}

export { ContainerMachines }
