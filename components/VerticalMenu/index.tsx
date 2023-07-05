/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link"
import { useState } from "react"
import { IVerticalMenu } from "./types"
import { ContainerContent, FixedContainer } from "./styles"
import { Icon } from "../Icon"
import { Footer } from "../Footer"
import { handlerOverflowVertical } from "../../utils/domMethods"

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

    handlerOverflowVertical(icon.svg === "menu")
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
        <a href="/">
          <h2>Machines</h2>
        </a>

        <a href="/shortcuts">
          <h2>Shortcuts</h2>
        </a>

        <Link href="https://hack4u.io/conocenos/">
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
