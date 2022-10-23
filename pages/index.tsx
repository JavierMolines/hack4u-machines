import type { NextPage } from "next"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { PageLayout } from "../components/PageLayout"

const Home: NextPage = () => {
  return (
    <PageLayout title="Machines filter - X">
      <Header />
      <Footer />
    </PageLayout>
  )
}

export default Home
