import { IAdvancedFilter, IOption } from "./types"
import { ApplyChange, Container, GridOptions, OptionFlex } from "./styles"
import { Icon } from "../Icon"
import { useState } from "react"

const AdvancedFilter: React.FC<IAdvancedFilter> = () => {
  const dimensionIcon = 15
  const [checks, setChecks] = useState<Array<number>>([])
  const options: Array<any> = [
    { id: 3, title: "exact search" },
    { id: 1, title: "detail machine expand" },
    { id: 2, title: "sort by most skills" },
  ]

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
    if (checks.length === 0) return
    alert("Coming soon.")
  }

  return (
    <Container>
      <GridOptions>
        {options.map((option, index) => {
          return (
            <OptionFlex key={`${option}-${index}`}>
              <p>{option.title}</p>
              <Icon
                click={() => handlerOptionClick(option.id)}
                src={`/${defineFigure(option.id)}.svg`}
                dimension={dimensionIcon}
              />
            </OptionFlex>
          )
        })}
      </GridOptions>
      <ApplyChange onClick={buttonClick} selected={checks.length > 0}>
        Apply
      </ApplyChange>
    </Container>
  )
}

export { AdvancedFilter }
