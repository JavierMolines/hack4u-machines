import type { NextPage } from "next";
import { BlogPost } from "../components/BlogPost";
import { PageLayout } from "../components/PageLayout";
import { PROJECT_VERSIONS } from "../utils/releases";

const Shortcuts: NextPage = () => {
	return (
		<PageLayout title="Machines - Releases">
			<BlogPost $maxWidth="85ch">
				<h1 className="text-center">Releases - Changelog</h1>

				{PROJECT_VERSIONS.map(({ version, changes, date }, _) => (
					<section key={version + date + 1}>
						<h1 id={version}>
							{version} - [{date}]
						</h1>

						<ul className="pl-2">
							{changes.map((change, _) => (
								<li
									className="py-2 text-base list-item text-left"
									key={`${change}`}
								>
									{change}.
								</li>
							))}
						</ul>
					</section>
				))}
			</BlogPost>
		</PageLayout>
	);
};

export default Shortcuts;
