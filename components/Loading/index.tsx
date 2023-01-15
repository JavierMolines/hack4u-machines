import { ILoading } from "./types"
import { CircleRed, CircleWhite, Container, Spinner } from "./styles"
import { useEffect } from "react"
import { removeStorage } from "../../utils/storage"
import { storagesKeys } from "../../utils/definition"

const Loading: React.FC<ILoading> = () => {
  useEffect(() => {
    removeStorage(storagesKeys.paramSearchOption)
  }, [])

  return (
    <Container>
      <Spinner>
        <CircleRed />
        <CircleWhite />
      </Spinner>
    </Container>
  )
}

export { Loading }
