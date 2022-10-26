import "../styles/globals.css"
import type { AppProps } from "next/app"
import { MachinesProvider } from "../context/MachineContent"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MachinesProvider>
      <Component {...pageProps} />
    </MachinesProvider>
  )
}

export default MyApp
