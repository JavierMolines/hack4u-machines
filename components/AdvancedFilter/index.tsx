import { IAdvancedFilter } from "./types"
import { ApplyChange, Container, GridOptions, OptionFlex } from "./styles"
import { Icon } from "../Icon"
import { useEffect, useState } from "react"
import { optionsFilters } from "../../utils/definition"

const AdvancedFilter: React.FC<IAdvancedFilter> = () => {
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
      return
    }
    localStorage.setItem("filters", JSON.stringify(checks))
  }

  useEffect(() => {
    try {
      const filterText = localStorage.getItem("filters") ?? ""
      setChecks(JSON.parse(filterText))
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
      <ApplyChange onClick={buttonClick} selected={checks.length > 0}>
        Apply
      </ApplyChange>
    </Container>
  )
}

export { AdvancedFilter }
