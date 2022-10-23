import type { NextPage } from "next"
import { Filter } from "../components/Filter"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { PageLayout } from "../components/PageLayout"

const Home: NextPage = () => {
  return (
    <PageLayout title="HTB Machines - Search engine">
      <Header />
      <Filter />
      <Footer />
    </PageLayout>
  )
}

export default Home
