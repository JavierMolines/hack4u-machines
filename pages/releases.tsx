import type { NextPage } from "next";
import { BlogPost } from "../components/BlogPost";
import { PROJECT_VERSIONS } from "../utils/releases";

const Releases: NextPage = () => {
	return (
		<BlogPost title="Machines - Releases">
			<h1 className="text-center text-3xl py-4">Releases</h1>

			{PROJECT_VERSIONS.map(({ version, changes, date }, _) => (
				<section key={version + date + 1}>
					<h1 className="text-2xl py-3" id={version}>
						{version} - [{date}]
					</h1>

					<ul className="py-2 pl-2 list-disc">
						{changes.map((change, _) => (
							<li
								className="py-1 text-base list-item text-left"
								key={`${change}`}
							>
								{change}.
							</li>
						))}
					</ul>
				</section>
			))}
		</BlogPost>
	);
};

export default Releases;
