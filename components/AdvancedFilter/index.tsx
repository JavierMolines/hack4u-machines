import { IAdvancedFilter } from "./types"
import { Container, OptionFlex } from "./styles"
import { Icon } from "../Icon"

const AdvancedFilter: React.FC<IAdvancedFilter> = () => {
  const dimensionIcon = 15
  const options: Array<string> = [
    "exact search",
    "General",
    "General",
    "General",
    "General",
    "General",
    "General",
    "General",
    "General",
    "General",
    "General",
    "General",
  ]

  return (
    <Container>
      {options.map((option, index) => {
        return (
          <OptionFlex key={`${option}-${index}`}>
            <p>{option}</p>
            <Icon src={`/square.svg`} dimension={dimensionIcon} />
          </OptionFlex>
        )
      })}
    </Container>
  )
}

export * from "./types"
export default AdvancedFilter
