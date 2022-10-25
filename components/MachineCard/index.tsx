import { IMachineCard } from "./types"
import { CardLabel, Container } from "./styles"

const MachineCard: React.FC<IMachineCard> = ({
  name,
  ip,
  os,
  state,
  techniques,
  video,
  certification,
}) => {
  const techCollection = techniques.split("\n")

  return (
    <Container>
      <CardLabel>
        <p>{name}</p>
        <p>{ip}</p>
        <p>{os}</p>
        <p>{state}</p>
      </CardLabel>
      <CardLabel>
        {techCollection.map((data, index) => {
          return <p key={data + " " + index}>{data}</p>
        })}
      </CardLabel>
    </Container>
  )
}

export { MachineCard }
