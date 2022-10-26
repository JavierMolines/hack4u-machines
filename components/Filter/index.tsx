import { IFilter } from "./types"
import { ButtonSearch, Container, ContainerSearch, Input } from "./styles"
import Image from "next/image"
import { FormEvent, useContext, useRef } from "react"
import { MachinesContext } from "../../context/MachineContent"

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

  return (
    <Container aria-autocomplete="none" autoComplete="off" onSubmit={onSubmit}>
      <ContainerSearch>
        <Image
          src="/search.svg"
          width={dimension}
          height={dimension}
          alt="search"
        />
      </ContainerSearch>
      <Input
        autoFocus
        type="text"
        aria-autocomplete="none"
        autoComplete="off"
        ref={inputFilter}
        id="machineSearch"
        name="machineSearch"
        placeholder="Search (filter by) name, so, difficulty, skills."
      />
      <ButtonSearch>Search</ButtonSearch>
    </Container>
  )
}

export { Filter }
