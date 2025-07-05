export const PROJECT_VERSIONS = [
	{
		version: "1.1.4",
		changes: [
			"The NextJS version was updated (15.2.4 -> 15.3.5)",
			"Many packages in the package.json were updated along with the Next.js update",
			"A bug was resolved related to a change in the way Google grouped content via HTML when retrieving data from the Excel file. The solution? Switch to .csv format",
			"Add HTB - Challenge.. comming soon",
		],
		date: "05/07/2025",
	},
	{
		version: "1.1.3",
		changes: [
			"The NextJS version was updated (14.2.22 -> 15.2.4)",
			"Many packages in the package.json were updated along with the Next.js update",
		],
		date: "01/04/2025",
	},
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
