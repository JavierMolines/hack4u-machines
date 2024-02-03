import type { NextPage } from "next";
import { BlogPost } from "../components/BlogPost";
import { PageLayout } from "../components/PageLayout";

const Shortcuts: NextPage = () => {
	return (
		<PageLayout title="Machines - Shortcuts">
			<BlogPost>
				<>
					<div
						style={{
							textAlign: "center",
						}}
					>
						<h1 style={{}}>Integrated keyboard shortcuts</h1>
						<p>
							For those who always love to have their hands on the keyboard.
						</p>
						<h2>NOT CASE SENSITIVE</h2>
					</div>

					<h2>Navigation</h2>

					<div
						style={{
							paddingLeft: "2rem",
						}}
					>
						<h3>Ctrl + s</h3>
						<p>Moves you to the machine search bar.</p>

						<h3>Ctrl + ,</h3>
						<p>Select an item down in the list of machines.</p>

						<h3>Ctrl + .</h3>
						<p>Select an item up in the list of machines.</p>

						<h3>Ctrl + y</h3>
						<p>Open the youtube hyperlink of the selected item.</p>

						<h3>Ctrl + Enter</h3>
						<p>Folds or unfolds the currently selected item.</p>
					</div>

					<h2>Filter</h2>

					<div
						style={{
							paddingLeft: "2rem",
						}}
					>
						<h3>Ctrl + d</h3>
						<p>Fold and unfold the advanced filter.</p>

						<h3>IF ADVANCED FILTER IS OPEN</h3>

						<div
							style={{
								paddingLeft: "2rem",
							}}
						>
							<h3>Ctrl + 1</h3>
							<p>Select the `Clear` option.</p>

							<h3>Ctrl + 2</h3>
							<p>Select the `MarkAll` option.</p>

							<h3>Ctrl + 3</h3>
							<p>Select the `Apply` option.</p>

							<h3>Shift + q</h3>
							<p>Select the first option box</p>

							<h3>Shift + w</h3>
							<p>Select the second option box</p>

							<h3>Shift + e</h3>
							<p>Select the third option box</p>
						</div>
					</div>
				</>
			</BlogPost>
		</PageLayout>
	);
};

export default Shortcuts;
