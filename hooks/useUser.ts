import { useEffect, useState } from "react"

const useUserInfo = () => {
  const [dataUserApi, setDataUserApi] = useState<any>(null)

  const callApi = async () => {
    const data = await fetch("https://randomuser.me/api/")
    const text = await data.json()
    setDataUserApi(text)
  }

  useEffect(() => {
    callApi()
  }, [])

  return { dataUserApi }
}

export { useUserInfo }
