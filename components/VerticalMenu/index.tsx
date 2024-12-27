/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from "react";
import { handlerOverflowVertical } from "../../utils/domMethods";
import { Footer } from "../Footer";
import { Icon } from "../Icon";
import type { IVerticalMenu } from "./types";

const VerticalMenu: React.FC<IVerticalMenu> = () => {
	const [icon, setIcon] = useState<any>({
		svg: "menu",
		display: "hidden",
	});

	const links = [
		{
			url: "/",
			title: "Machines",
		},
		{
			url: "/shortcuts",
			title: "Shortcuts",
		},
		{
			url: "/releases",
			title: "Releases",
		},
		{
			url: "https://hack4u.io/conocenos/",
			title: "About",
		},
	];

	const handlerClick = () => {
		setIcon(
			icon.svg === "menu"
				? {
						svg: "close",
						display: "visible",
					}
				: {
						svg: "menu",
						display: "hidden",
					},
		);

		handlerOverflowVertical(icon.svg === "menu");
	};

	return (
		<>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				className="z-10 cursor-pointer fixed top-4 right-4"
				onClick={handlerClick}
			>
				<Icon src={`/${icon.svg}.svg`} dimension={30} />
			</div>

			<div
				className="z-20 fixed w-full h-full flex flex-col justify-center items-center bg-[#b01215df]"
				style={{
					visibility: icon.display,
				}}
			>
				{links.map(({ url, title }) => (
					<a key={title} href={url}>
						<h2>{title}</h2>
					</a>
				))}

				<Footer />
			</div>
		</>
	);
};

export { VerticalMenu };
