import { IAdvancedFilter } from "./types"
import { Icon } from "../Icon"
import { useEffect, useState } from "react"
import { optionsFilters, storagesKeys } from "../../utils/definition"
import { getStorage, setStorage } from "../../utils/storage"

import {
  ApplyChange,
  Container,
  GridOptions,
  MultipleOptions,
  OptionFlex,
} from "./styles"

const AdvancedFilter: React.FC<IAdvancedFilter> = ({ callback }) => {
  const dimensionIcon = 17
  const [checks, setChecks] = useState<Array<number>>([])

  const defineFigure = (index: number) => {
    const isCheck = checks.filter((data: number) => index === data).length > 0
    return isCheck ? "squareCheck" : "square"
  }

  const buttonActions = {
    click: () => {
      if (checks.length === 0) {
        localStorage.clear()
      } else {
        setStorage(storagesKeys.filterOption, checks)
      }
      callback()
    },
    clear: () => {
      localStorage.clear()
      callback()
    },
    all: () => {
      setStorage(
        storagesKeys.filterOption,
        optionsFilters.map((data) => data.id)
      )
      callback()
    },
  }

  const handlerOptionClick = (index: number) => {
    if (checks.includes(index)) {
      setChecks(checks.filter((data: number) => index !== data))
    } else {
      setChecks([...checks, index])
    }
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
              id={`advancedFilterOption${option.id}`}
              src={`/${defineFigure(option.id)}.svg`}
              dimension={dimensionIcon}
            />
          </OptionFlex>
        ))}
      </GridOptions>

      <MultipleOptions>
        <ApplyChange
          id="advancedFilterButtonClear"
          onClick={buttonActions.clear}
        >
          Clear
        </ApplyChange>
        <ApplyChange id="advancedFilterButtonAll" onClick={buttonActions.all}>
          Mark All
        </ApplyChange>
        <ApplyChange
          id="advancedFilterButtonApply"
          onClick={buttonActions.click}
        >
          Apply
        </ApplyChange>
      </MultipleOptions>
    </Container>
  )
}

export { AdvancedFilter }
