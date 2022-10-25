import { IFilter } from "./types"
import { ButtonSearch, Container, ContainerSearch, Input } from "./styles"
import Image from "next/image"
import { FormEvent, useRef } from "react"

const Filter: React.FC<IFilter> = () => {
  const dimension: number = 25
  const inputFilter = useRef<HTMLInputElement>(null)
  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const input = inputFilter.current?.value ?? ""
    filterData(input)
  }

  const filterData = (input: string) => {
    console.log(input)
  }

  return (
    <Container onSubmit={onSubmit}>
      <ContainerSearch>
        <Image
          src="/search.svg"
          width={dimension}
          height={dimension}
          alt="search"
        />
      </ContainerSearch>
      <Input
        type="text"
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
