import { useEffect, useState } from "react"
import { IMachineCard } from "../components/MachineCard/types"

const useMachines = () => {
  const [machines, setMachines] = useState<Array<IMachineCard>>([])

  const callApi = async () => {
    try {
      const response = await fetch("/api/machines")
      const data = await response.json()
      setMachines(data.newData)
    } catch (error) {}
  }

  useEffect(() => {
    callApi()
  }, [])

  return { machines }
}

export { useMachines }
