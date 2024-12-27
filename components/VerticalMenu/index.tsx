import { useState } from "react";
import { handlerOverflowVertical } from "../../utils/domMethods";
import { Footer } from "../Footer";
import { Icon } from "../Icon";
import type { IVerticalMenu } from "./types";
import { LINKS_VERTICAL_MENU } from "./data";

const VerticalMenu: React.FC<IVerticalMenu> = () => {
	const [icon, setIcon] = useState<any>({
		svg: "menu",
		display: "hidden",
	});

	const handlerClick = () => {
		const isSvgMenu = icon.svg === "menu";
		setIcon({
			svg: isSvgMenu ? "close" : "menu",
			display: isSvgMenu ? "visible" : "hidden",
		});
		handlerOverflowVertical(isSvgMenu);
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
				className="z-11 fixed w-full h-full flex flex-col justify-center items-center bg-[#b01215df]"
				style={{
					visibility: icon.display,
				}}
			>
				{LINKS_VERTICAL_MENU.map(({ url, title }) => (
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
