import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { MachinesProvider } from "../context/MachineContent";
import "../styles/globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MachinesProvider>
			<main className={roboto.className}>
				<Component {...pageProps} />
			</main>
			<Analytics />
		</MachinesProvider>
	);
}

export default MyApp;
