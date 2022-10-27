import Image from "next/image"
import { IMachineCard } from "./types"
import { useState } from "react"
import {
  CardLabel,
  CertificationsContainer,
  Container,
  TextWithIcon,
  ContainerExpand,
  TechniquesContainer,
} from "./styles"

const MachineCard: React.FC<IMachineCard> = ({
  name,
  ip,
  os,
  state,
  platform = "HackTheBox",
  techniques,
  video,
  certification,
}) => {
  const dimension = 20
  const dimensionIcon = 15
  const [compress, setCompress] = useState(true)
  const certCollection = certification.split("\n")
  const techCollection = techniques.split("\n")
  const handlerClick = () => setCompress(!compress)
  const iconArrowName = `/${compress ? "arrowDown" : "arrowRight"}.svg`
  const iconByState = (stateMachine: string) => {
    switch (stateMachine) {
      case "Fácil":
        return "easy"
      case "Media":
        return "medium"
      case "Difícil":
        return "hard"
      default:
        return "insane"
    }
  }

  return (
    <Container>
      <CardLabel onClick={handlerClick}>
        <p>{name}</p>
        <p>{platform}</p>

        <TextWithIcon>
          <Image
            src="/settings.svg"
            width={dimensionIcon}
            height={dimensionIcon}
            alt="arrow"
          />
          <p>{os}</p>
        </TextWithIcon>

        <TextWithIcon>
          <Image
            src={`/${iconByState(state)}.svg`}
            width={dimensionIcon}
            height={dimensionIcon}
            alt="arrow"
          />
          <p>{state}</p>
        </TextWithIcon>

        <p>Skill used {techCollection.length}</p>
        <p>Certify apply {certCollection.length}</p>

        <ContainerExpand>
          <Image
            src={iconArrowName}
            width={dimension}
            height={dimension}
            alt="arrow"
          />
        </ContainerExpand>
      </CardLabel>

      {!compress ? (
        <>
          <p>Skills:</p>
          <TechniquesContainer>
            {techCollection.map((technique, index) => {
              return <li key={technique + " " + index}>{technique}</li>
            })}
          </TechniquesContainer>
          <CertificationsContainer>
            {certCollection.map((cert, index) => {
              return <p key={cert + " " + index}>{cert}</p>
            })}
          </CertificationsContainer>
        </>
      ) : (
        <></>
      )}
    </Container>
  )
}

export { MachineCard }
