import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { MachinesProvider } from "../context/MachineContent";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MachinesProvider>
			<Component {...pageProps} />
			<Analytics />
		</MachinesProvider>
	);
}

export default MyApp;
