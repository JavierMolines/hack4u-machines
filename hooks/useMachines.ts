import { useContext, useEffect } from "react"
import { MachinesContext } from "../context/MachineContent"

const useMachines = () => {
  const { machines, setMachines } = useContext(MachinesContext)

  const callApi = async () => {
    try {
      const response = await fetch("/api/machines")
      const data = await response.json()
      setMachines(data.newData)
    } catch (error) {}
  }

  useEffect(() => {
    callApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setMachines])

  return { machines }
}

export { useMachines }
