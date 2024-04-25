import Head from "next/head";
import { VerticalMenu } from "../VerticalMenu";
import { Container } from "./styles";
import type { IPageLayout } from "./types";

const PageLayout: React.FC<IPageLayout> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Machines website Hack4u" />
			</Head>

			<VerticalMenu />
			<Container>{children}</Container>
		</>
	);
};

export { PageLayout };
