export const PROJECT_VERSIONS = [
	{
		version: "1.1.2",
		changes: [
			"The NextJS version was updated (14.2.4 -> 14.2.22)",
			"Replace the framework for styles from styled-component to TailwindCSS",
			"Update .nvmrc (lts/iron -> lts/jod)",
		],
		date: "28/12/2024",
	},
	{
		version: "1.1.1",
		changes: [
			"The NextJS version was updated (14.1.0 -> 14.2.4)",
			"Five main and development libraries have been updated in the package.json",
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
