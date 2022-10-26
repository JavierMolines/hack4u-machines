import { IMachineCard } from "./types"
import { CardLabel, Container, ContainerExpand } from "./styles"
import Image from "next/image"

const MachineCard: React.FC<IMachineCard> = ({
  name,
  ip,
  os,
  state,
  techniques,
  video,
  certification,
}) => {
  // const techCollection = techniques.split("\n")
  const dimension = 20
  return (
    <Container>
      <CardLabel>
        <p>{name}</p>
        <p>{ip}</p>
        <p>{os}</p>
        <p>{state}</p>
        <ContainerExpand>
          <Image
            src="/search.svg"
            width={dimension}
            height={dimension}
            alt="search"
          />
        </ContainerExpand>
      </CardLabel>
    </Container>
  )
}

/*

      <CardLabel>
        {techCollection.map((data, index) => {
          return <p key={data + " " + index}>{data}</p>
        })}
      </CardLabel>
*/

export { MachineCard }
