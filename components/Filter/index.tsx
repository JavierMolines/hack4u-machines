import { IFilter } from "./types"
import { Container, Input } from "./styles"

const Filter: React.FC<IFilter> = () => {
  return (
    <Container>
      <Input
        type="text"
        id="machineSearch"
        name="machineSearch"
        placeholder="Search (filter by) name, so, difficulty, skills."
      />
    </Container>
  )
}

export { Filter }
