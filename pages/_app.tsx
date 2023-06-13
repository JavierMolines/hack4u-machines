import "../styles/globals.css"
import type { AppProps } from "next/app"
import { MachinesProvider } from "../context/MachineContent"
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MachinesProvider>
      <Component {...pageProps} />
      <Analytics />
    </MachinesProvider>
  )
}

export default MyApp
