import Document, {
	type DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from "next/document";
import { Fragment } from "react";

export default class MyDocument extends Document {
	static async getInitialProps(context: DocumentContext) {
		try {
			const initialProps = await Document.getInitialProps(context);
			return {
				...initialProps,
				styles: [<Fragment key="1">{initialProps.styles}</Fragment>],
			};
		} finally {
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" href="/favicon.svg" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
