import { useEffect, useState } from "react"

const useMachines = () => {
  const [machines, setMachines] = useState<Array<any>>([])

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
