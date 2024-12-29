import type { NextPage } from "next";
import { BlogPost } from "../components/BlogPost";

const Shortcuts: NextPage = () => {
	return (
		<BlogPost title="Machines - Shortcuts">
			<>
				<div className="text-center">
					<h1 className="text-3xl py-4">Integrated keyboard shortcuts</h1>
					<p>For those who always love to have their hands on the keyboard.</p>
					<h2 className="text-2xl py-4">NOT CASE SENSITIVE</h2>
				</div>

				<h2 className="text-2xl py-4">Navigation</h2>

				<div className="pl-6 flex flex-col gap-4">
					<h3>CTRL + s</h3>
					<p>Moves you to the machine search bar.</p>

					<h3>CTRL + ,</h3>
					<p>Select an item down in the list of machines.</p>

					<h3>CTRL + .</h3>
					<p>Select an item up in the list of machines.</p>

					<h3>CTRL + y</h3>
					<p>Open the youtube hyperlink of the selected item.</p>

					<h3>CTRL + Enter</h3>
					<p>Folds or unfolds the currently selected item.</p>
				</div>

				<h2 className="text-2xl py-4">Filter</h2>

				<div className="pl-6 flex flex-col gap-4">
					<h3>CTRL + d</h3>
					<p>Fold and unfold the advanced filter.</p>

					<h3>IF ADVANCED FILTER IS OPEN</h3>

					<div className="pl-6 flex flex-col gap-4">
						<h3>CTRL + 1</h3>
						<p>Select the `Clear` option.</p>

						<h3>CTRL + 2</h3>
						<p>Select the `MarkAll` option.</p>

						<h3>CTRL + 3</h3>
						<p>Select the `Apply` option.</p>

						<h3>SHIFT + q</h3>
						<p>Select the first option box</p>

						<h3>SHIFT + w</h3>
						<p>Select the second option box</p>

						<h3>SHIFT + e</h3>
						<p>Select the third option box</p>
					</div>
				</div>
			</>
		</BlogPost>
	);
};

export default Shortcuts;
