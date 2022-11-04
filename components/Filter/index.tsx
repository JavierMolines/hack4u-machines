import { IFilter } from "./types"
import { FormEvent, useContext, useRef, useState } from "react"
import { MachinesContext } from "../../context/MachineContent"
import { Icon } from "../Icon/"
import { AdvancedFilter } from "../AdvancedFilter"

import {
  ButtonSearch,
  Container,
  ContainerFilter,
  ContainerSearch,
  FilterContainer,
  Input,
} from "./styles"

const Filter: React.FC<IFilter> = ({ callbackShowMachines }) => {
  const dimension: number = 25
  const contextMachine = useContext(MachinesContext)
  const inputFilter = useRef<HTMLInputElement>(null)
  const [showAdvancedFilter, setShowAdvancedFilter] = useState<boolean>(false)
  const filterOnClick = () => setShowAdvancedFilter(!showAdvancedFilter)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const input = inputFilter.current?.value ?? ""
    if (input === "") {
      callbackShowMachines([])
      return
    }

    const filter = contextMachine.machines.filter((box) => {
      let count = 0
      const totalMachines = input.split(" ")
      const filterApproval = totalMachines.length

      for (const iterator of totalMachines) {
        const regExpTmp = new RegExp(`${iterator}`, "ig")

        if (
          regExpTmp.test(box.name) ||
          regExpTmp.test(box.os) ||
          regExpTmp.test(box.techniques) ||
          regExpTmp.test(box.certification) ||
          regExpTmp.test(box.state) ||
          regExpTmp.test(box.platform)
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

    callbackShowMachines(filter)
  }

  return (
    <Container>
      <FilterContainer autoComplete="off" onSubmit={onSubmit}>
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
          id="machineSearch"
          name="machineSearch"
          placeholder="Search (filter by) platform, name, so, difficulty, skills."
        />

        <ButtonSearch>Search</ButtonSearch>
      </FilterContainer>
      {showAdvancedFilter && <AdvancedFilter />}
    </Container>
  )
}

export { Filter }
