import type { NextPage } from "next"
import { ContainerMachines } from "../components/ContainerMachines"
import { Filter } from "../components/Filter"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Loading } from "../components/Loading"
import { PageLayout } from "../components/PageLayout"
import { useMachines } from "../hooks/useMachines"

const Home: NextPage = () => {
  const { machines } = useMachines()

  return (
    <PageLayout title="HTB Machines - Search engine">
      <Header totalMachines={machines.length} />
      {machines.length === 0 ? (
        <Loading />
      ) : (
        <>
          <Filter />
          <ContainerMachines machines={machines} />
        </>
      )}
      <Footer />
    </PageLayout>
  )
}

export default Home
