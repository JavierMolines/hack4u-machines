import { IFilter } from "./types"
import { FormEvent, useContext, useRef } from "react"
import { MachinesContext } from "../../context/MachineContent"
import { Icon } from "../Icon/"

import {
  ButtonSearch,
  Container,
  ContainerFilter,
  ContainerSearch,
  Input,
} from "./styles"

const Filter: React.FC<IFilter> = ({ callbackShowMachines }) => {
  const dimension: number = 25
  const contextMachine = useContext(MachinesContext)
  const inputFilter = useRef<HTMLInputElement>(null)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const input = inputFilter.current?.value ?? ""
    if (input === "") {
      callbackShowMachines([])
      return
    }

    const regExpTmp = new RegExp(`${input}`, "ig")
    const filter = contextMachine.machines.filter((box) => {
      if (regExpTmp.test(box.name)) return true
      if (regExpTmp.test(box.ip)) return true
      if (regExpTmp.test(box.os)) return true
      if (regExpTmp.test(box.techniques)) return true
      if (regExpTmp.test(box.certification)) return true
      if (regExpTmp.test(box.state)) return true
      if (regExpTmp.test(box.video)) return true

      return false
    })

    callbackShowMachines(filter)
  }

  const filterOnClick = () => {
    alert("Coming Soon.")
  }

  return (
    <>
      <Container autoComplete="off" onSubmit={onSubmit}>
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
      </Container>
    </>
  )
}

export { Filter }
