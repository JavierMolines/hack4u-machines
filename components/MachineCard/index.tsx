import { useEffect, useState } from "react"
import { IMachineCard } from "./types"
import { iconByPlatform, iconByState } from "../../utils/methods"
import { Link } from "../Link"
import { Icon } from "../Icon"
import { detailMachine } from "../../utils/definition"
import { getStorage } from "../../utils/storage"
import { useDevice } from "../../hooks/useDevice"

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
  const { isMobile } = useDevice()
  const [compress, setCompress] = useState(true)
  const certCollection = certification.split("\n")
  const techCollection = techniques.split("\n")
  const totalTechCollection =
    techCollection.length % 2 === 0
      ? techCollection.length / 2
      : (techCollection.length + 1) / 2
  const handlerClick = () => setCompress(!compress)
  const iconArrowName = `/${compress ? "arrowDown" : "arrowRight"}.svg`
  const dataTech = {
    left: techCollection.slice(0, totalTechCollection),
    right: techCollection.slice(totalTechCollection),
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

  const tabContentExpand = () => {
    if (compress) return <></>

    return (
      <>
        <p>Skills:</p>
        {isMobile ? (
          <ul>
            {[...dataTech.right, ...dataTech.left].map((technique, index) => (
              <li key={technique + " " + index}>
                <span>{technique}</span>
              </li>
            ))}
          </ul>
        ) : (
          <TechniquesContainer>
            <ul>
              {dataTech.left.map((technique, index) => (
                <li key={technique + " " + index}>
                  <span>{technique}</span>
                </li>
              ))}
            </ul>
            <ul>
              {dataTech.right.map((technique, index) => (
                <li key={technique + " " + index}>
                  <span>{technique}</span>
                </li>
              ))}
            </ul>
          </TechniquesContainer>
        )}

        <CertificationsContainer>
          <span>{certCollection.join(" ")}</span>
        </CertificationsContainer>
      </>
    )
  }

  useEffect(() => {
    const filterOption = getStorage()
    if (filterOption.includes(detailMachine)) {
      setCompress(false)
    }
  }, [])

  return (
    <Container>
      <CardLabel>
        <Link target={video} color="var(--colorRedLight)">
          <TextWithIcon>
            {!isMobile && <Icon src={`/link.svg`} dimension={dimensionIcon} />}
            <p>{name}</p>
          </TextWithIcon>
        </Link>

        <TextWithIcon>{platformRender()}</TextWithIcon>

        <TextWithIcon>
          <Icon src={`/${iconByState(state)}.svg`} dimension={dimensionIcon} />
          <p>{state}</p>
        </TextWithIcon>

        <TextWithIcon>
          <Icon src={`/${iconByPlatform(os)}.svg`} dimension={dimensionIcon} />
          <p>{os}</p>
        </TextWithIcon>

        {!isMobile && (
          <TextWithIcon>
            <p>Certify apply {certCollection.length}</p>
          </TextWithIcon>
        )}

        <TextWithIcon>
          <p>Skill used {techCollection.length}</p>
        </TextWithIcon>

        <ContainerExpand style={{ cursor: "pointer" }} onClick={handlerClick}>
          <Icon src={iconArrowName} dimension={dimension} />
        </ContainerExpand>
      </CardLabel>

      {tabContentExpand()}
    </Container>
  )
}

export { MachineCard }
