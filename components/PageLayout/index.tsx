import Head from "next/head";
import { VerticalMenu } from "../VerticalMenu";
import type { IPageLayout } from "./types";

const PageLayout: React.FC<IPageLayout> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Machines website Hack4u" />
			</Head>

			<main className="flex flex-col items-center mx-auto px-4 sm:px-0 md:w-[750px] lg:w-[970px] xl:w-[1170px]">
				{children}
			</main>

			<VerticalMenu />
		</>
	);
};

export { PageLayout };
