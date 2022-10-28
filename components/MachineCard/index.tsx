import { useState } from "react"
import { IMachineCard } from "./types"
import { Link } from "../Link"
import { Icon } from "../Icon"
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
  const iconByPlatform = (inPlatform: string) =>
    inPlatform === "Windows" ? "windows" : "linux"
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

  const platformRender = () => {
    if (platform === "HackTheBox") {
      return <p>{platform}</p>
    } else {
      return (
        <Link target={ip} color="#66ccff">
          {platform}
        </Link>
      )
    }
  }

  return (
    <Container>
      <CardLabel>
        <TextWithIcon>
          <Link target={video} color="var(--colorRedLight)">
            <p
              style={{
                fontSize: "1.2rem",
              }}
            >
              {name}
            </p>
          </Link>
        </TextWithIcon>

        <TextWithIcon>{platformRender()}</TextWithIcon>

        <TextWithIcon>
          <Icon src={`/${iconByPlatform(os)}.svg`} dimension={dimensionIcon} />
          <p>{os}</p>
        </TextWithIcon>

        <TextWithIcon>
          <Icon src={`/${iconByState(state)}.svg`} dimension={dimensionIcon} />
          <p>{state}</p>
        </TextWithIcon>

        <TextWithIcon>
          <p>Certify apply {certCollection.length}</p>
        </TextWithIcon>

        <TextWithIcon>
          <p>Skill used {techCollection.length}</p>
        </TextWithIcon>

        <ContainerExpand style={{ cursor: "pointer" }} onClick={handlerClick}>
          <Icon src={iconArrowName} dimension={dimension} />
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
