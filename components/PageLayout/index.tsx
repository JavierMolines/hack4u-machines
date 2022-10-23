import { IPageLayout } from "./types"
import { Container } from "./styles"
import Head from "next/head"

const PageLayout: React.FC<IPageLayout> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Machines website Hack4u" />
      </Head>

      <Container>{children}</Container>
    </>
  )
}

export { PageLayout }
