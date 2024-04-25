import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { MachinesProvider } from "../context/MachineContent";
import "../styles/globals.css";

const inter = Roboto({
	subsets: ["latin"],
	weight: "300",
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MachinesProvider>
			<main className={inter.className}>
				<Component {...pageProps} />
			</main>
			<Analytics />
		</MachinesProvider>
	);
}

export default MyApp;
