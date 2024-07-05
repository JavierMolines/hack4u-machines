import type { NextPage } from "next";
import { BlogPost } from "../components/BlogPost";
import { LineItem } from "../components/BlogPost/styles";
import { PageLayout } from "../components/PageLayout";

const Shortcuts: NextPage = () => {
	const versions = [
		{
			version: "1.1.1",
			changes: [
				"The NextJS version was updated (14.1.0 -> 14.2.4)",
				"Five main and development libraries have been updated in the package.json.",
				"The .nvmrc file is added with the version supported by the project",
			],
			date: "05/07/2024",
		},
		{
			version: "1.1.0",
			changes: [
				"The CHANGELOG has been added to the page",
				"A caching system has been implemented to store machines for 24 hours",
				"The NextJS version was updated (14.0.3 -> 14.1.0)",
				"ESlint and Prettier were removed from the repository to provide support exclusively for Biome",
				"The `CONTRIBUTING.md` file has been added",
				"The `PULL_REQUEST_TEMPLATE.md` file has been added",
			],
			date: "02/02/2024",
		},
	];

	return (
		<PageLayout title="Machines - Releases">
			<BlogPost $maxWidth="85ch">
				<h1
					style={{
						textAlign: "center",
					}}
				>
					Releases - Changelog
				</h1>

				{versions.map(({ version, changes, date }, _) => (
					<section key={version + date + 1}>
						<h1 id={version}>
							{version} - [{date}]
						</h1>

						<ul
							style={{
								paddingLeft: "10px",
							}}
						>
							{changes.map((change, _) => (
								<LineItem key={`${change}`}>{change}.</LineItem>
							))}
						</ul>
					</section>
				))}
			</BlogPost>
		</PageLayout>
	);
};

export default Shortcuts;
