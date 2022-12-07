import { IFilter } from "./types"
import { FormEvent, useContext, useRef, useState } from "react"
import { MachinesContext } from "../../context/MachineContent"
import { Icon } from "../Icon/"
import { AdvancedFilter } from "../AdvancedFilter"
import { getStorage, setStorage } from "../../utils/storage"
import { filterExact, sortHight, storagesKeys } from "../../utils/definition"
import { useDevice } from "../../hooks/useDevice"
import { handlerOverflowVertical } from "../../utils/domMethods"

import {
  ButtonSearch,
  Container,
  ContainerFilter,
  ContainerMobileIcon,
  ContainerMobileSearch,
  ContainerSearch,
  FilterContainer,
  Input,
} from "./styles"

const Filter: React.FC<IFilter> = ({ callbackShowMachines }) => {
  const dimension: number = 25
  const inputPlaceHolder =
    "Filter for anything you want: (Ex: HackTheBox Medium Active Directory OSEP Kerberos)"
  const { isMobile } = useDevice()
  const contextMachine = useContext(MachinesContext)
  const inputFilter = useRef<HTMLInputElement>(null)
  const [showAdvancedFilter, setShowAdvancedFilter] = useState<boolean>(false)
  const filterOnClick = () => setShowAdvancedFilter(!showAdvancedFilter)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    handlerOverflowVertical(false)
    const options = getStorage(storagesKeys.filterOption)
    const input = inputFilter.current?.value.trim() ?? ""

    if (input === "") {
      callbackShowMachines([])
      return
    }

    const filter = contextMachine.machines.filter((box) => {
      let count = 0
      const totalMachines = input.split(" ")
      setStorage(storagesKeys.paramSearchOption, totalMachines)
      const filterApproval = totalMachines.length

      for (const iterator of totalMachines) {
        const innerFilter = options.includes(filterExact)
          ? `^${input.trim()}$`
          : `${iterator}`
        const regExpTmp = new RegExp(innerFilter, "ig")

        if (
          regExpTmp.test(box.name.trim()) ||
          regExpTmp.test(box.os.trim()) ||
          regExpTmp.test(box.techniques.trim()) ||
          regExpTmp.test(box.certification.trim()) ||
          regExpTmp.test(box.state.trim()) ||
          regExpTmp.test(box.platform.trim())
        ) {
          count++
          continue
        }

        if (count === filterApproval) break
      }

      if (count === filterApproval) {
        return true
      } else {
        return false
      }
    })

    if (options.includes(sortHight)) {
      callbackShowMachines(
        filter.sort((a, b) => {
          return (
            b.techniques.split("\n").length - a.techniques.split("\n").length
          )
        })
      )
    } else {
      callbackShowMachines(filter)
    }
  }

  return (
    <Container>
      <FilterContainer autoComplete="off" onSubmit={onSubmit}>
        {isMobile ? (
          <>
            <ContainerMobileIcon>
              <ContainerFilter onClick={filterOnClick}>
                <Icon src="/filter.svg" dimension={dimension} />
              </ContainerFilter>
              <ButtonSearch>Search</ButtonSearch>
            </ContainerMobileIcon>

            <ContainerMobileSearch>
              <ContainerSearch>
                <Icon src="/search.svg" dimension={dimension} />
              </ContainerSearch>
              <Input
                autoFocus
                type="text"
                aria-autocomplete="none"
                autoComplete="off"
                ref={inputFilter}
                placeholder={inputPlaceHolder}
              />
            </ContainerMobileSearch>
          </>
        ) : (
          <>
            <ContainerFilter onClick={filterOnClick}>
              <Icon src="/filter.svg" dimension={dimension} />
            </ContainerFilter>
            <ContainerSearch>
              <Icon src="/search.svg" dimension={dimension} />
            </ContainerSearch>
            <Input
              autoFocus
              type="text"
              aria-autocomplete="none"
              autoComplete="off"
              ref={inputFilter}
              placeholder={inputPlaceHolder}
            />
            <ButtonSearch>Search</ButtonSearch>
          </>
        )}
      </FilterContainer>

      {showAdvancedFilter && <AdvancedFilter callback={filterOnClick} />}
    </Container>
  )
}

export { Filter }
