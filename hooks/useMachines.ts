import { useContext, useEffect, useState } from "react"
import { MachinesContext } from "../context/MachineContent"

const useMachines = () => {
  const { machines, setMachines } = useContext(MachinesContext)
  const [mapTotalMachines, setMapTotalMachines] = useState<any>({})

  const callApi = async () => {
    try {
      const response = await fetch("/api/machines")
      const data = await response.json()
      setMachines(data.newData)
      setMapTotalMachines(data.totalMachines)
    } catch (error) {}
  }

  useEffect(() => {
    callApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { machines, mapTotalMachines }
}

export { useMachines }
