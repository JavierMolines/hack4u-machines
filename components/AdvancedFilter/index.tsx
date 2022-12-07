import { IAdvancedFilter } from "./types"
import { ApplyChange, Container, GridOptions, OptionFlex } from "./styles"
import { Icon } from "../Icon"
import { useEffect, useState } from "react"
import { optionsFilters, storagesKeys } from "../../utils/definition"
import { getStorage, setStorage } from "../../utils/storage"

const AdvancedFilter: React.FC<IAdvancedFilter> = ({ callback }) => {
  const dimensionIcon = 15
  const [checks, setChecks] = useState<Array<number>>([])

  const defineFigure = (index: number) => {
    const isCheck = checks.filter((data: number) => index === data).length > 0
    return isCheck ? "squareCheck" : "square"
  }

  const handlerOptionClick = (index: number) => {
    if (checks.includes(index)) {
      setChecks(checks.filter((data: number) => index !== data))
    } else {
      setChecks([...checks, index])
    }
  }

  const buttonClick = () => {
    if (checks.length === 0) {
      localStorage.clear()
    } else {
      setStorage(storagesKeys.filterOption, checks)
    }
    callback()
  }

  useEffect(() => {
    try {
      setChecks(getStorage(storagesKeys.filterOption))
    } catch (error) {}
  }, [])

  return (
    <Container>
      <GridOptions>
        {optionsFilters.map((option, index) => (
          <OptionFlex key={`${option}-${index}`}>
            <p>{option.title}</p>
            <Icon
              click={() => handlerOptionClick(option.id)}
              src={`/${defineFigure(option.id)}.svg`}
              dimension={dimensionIcon}
            />
          </OptionFlex>
        ))}
      </GridOptions>
      <ApplyChange onClick={buttonClick}>Apply</ApplyChange>
    </Container>
  )
}

export { AdvancedFilter }
