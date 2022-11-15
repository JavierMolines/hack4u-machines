import { useState } from "react"
import { IVerticalMenu } from "./types"
import { ContainerContent, FixedContainer } from "./styles"
import { Icon } from "../Icon"
import { Footer } from "../Footer"
import Link from "next/link"

const VerticalMenu: React.FC<IVerticalMenu> = () => {
  const [icon, setIcon] = useState<any>({
    svg: "menu",
    display: "hidden",
  })

  const handlerClick = () => {
    setIcon(
      icon.svg === "menu"
        ? {
            svg: "close",
            display: "visible",
          }
        : {
            svg: "menu",
            display: "hidden",
          }
    )

    document.body.style.overflowY = icon.svg === "menu" ? "hidden" : "visible"
  }

  return (
    <>
      <FixedContainer onClick={handlerClick}>
        <Icon src={`/${icon.svg}.svg`} dimension={30} />
      </FixedContainer>

      <ContainerContent
        style={{
          visibility: icon.display,
        }}
      >
        <Link href="/">
          <a>
            <h2>Machines</h2>
          </a>
        </Link>

        <Link href="/about">
          <a>
            <h2>About</h2>
          </a>
        </Link>

        <Footer />
      </ContainerContent>
    </>
  )
}

export { VerticalMenu }
