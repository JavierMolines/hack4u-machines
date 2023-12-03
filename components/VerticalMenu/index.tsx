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

  const links = [
    {
      url: "/",
      title: "Machines",
    },
    {
      url: "/shortcuts",
      title: "Shortcuts",
    },
    {
      url: "https://hack4u.io/conocenos/",
      title: "About",
    },
  ]

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
        {links.map(({ url, title }) => (
          <a key={title} href={url}>
            <h2>{title}</h2>
          </a>
        ))}

        <Footer />
      </ContainerContent>
    </>
  )
}

export { VerticalMenu }
