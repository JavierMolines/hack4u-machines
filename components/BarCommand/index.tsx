import { IBarCommand } from "./types"
import { Container } from "./styles"

const BarCommand: React.FC<IBarCommand> = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const example = (
    <form onSubmit={onSubmit}>
      <input
        id="machinesCommand"
        type="text"
        autoComplete="off"
        placeholder=""
      />
    </form>
  )

  return <Container>{example}</Container>
}

export { BarCommand }
