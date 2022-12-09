import type { NextPage } from "next"
import { useState } from "react"
import { ContainerMachines } from "../components/ContainerMachines"
import { Filter } from "../components/Filter"
import { Header } from "../components/Header"
import { Loading } from "../components/Loading"
import { PageLayout } from "../components/PageLayout"
import { useMachines } from "../hooks/useMachines"

const Home: NextPage = () => {
  const { machines, mapTotalMachines } = useMachines()
  const [machinesInView, setMachinesInView] = useState<Array<any>>([])

  return (
    <PageLayout title="Machines - Search engine">
      <Header totalMachines={mapTotalMachines} />
      {machines.length === 0 ? (
        <Loading />
      ) : (
        <>
          <Filter callbackShowMachines={setMachinesInView} />
          <ContainerMachines machines={machinesInView} />
        </>
      )}
    </PageLayout>
  )
}

export default Home
