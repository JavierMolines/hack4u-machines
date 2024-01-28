import type { NextPage } from "next";
import { BlogPost } from "../components/BlogPost";
import { PageLayout } from "../components/PageLayout";
import { LineItem } from "../components/BlogPost/styles";

const Shortcuts: NextPage = () => {
	const versions = [
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
			date: "01/28/2024",
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
					<section>
						<h1 id={version}>
							{version} - [{date}]
						</h1>

						<ul
							style={{
								paddingLeft: "10px",
							}}
						>
							{changes.map((change, count) => (
								<LineItem key={`${change}${count + 1}`}>{change}.</LineItem>
							))}
						</ul>
					</section>
				))}
			</BlogPost>
		</PageLayout>
	);
};

export default Shortcuts;
