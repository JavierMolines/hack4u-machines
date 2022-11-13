import { useEffect, useState } from "react"

const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    try {
      if (window.innerWidth < 1024) {
        setIsMobile(true)
      }
    } catch (error) {}
  }, [isMobile])

  return { isMobile }
}

export { useDevice }
