import Link from "next/link";
import { useState } from "react";
import { handlerOverflowVertical } from "../../utils/domMethods";
import { Footer } from "../Footer";
import { Icon } from "../Icon";
import { LINKS_VERTICAL_MENU } from "./data";
import type { IVerticalMenu } from "./types";

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
			<div
				className="z-10 cursor-pointer fixed top-4 right-4"
				onClick={handlerClick}
			>
				<Icon id={icon.svg} dimension={30} />
			</div>

			<section
				className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[var(--colorRedDark)]"
				style={{
					visibility: icon.display,
				}}
			>
				{LINKS_VERTICAL_MENU.map(({ url, title, useLink }) => {
					if (useLink) {
						return (
							<Link
								onClick={handlerClick}
								className="text-2xl my-6 p-2"
								key={title}
								href={url}
							>
								<span>{title}</span>
							</Link>
						);
					}

					return (
						<a className="text-2xl my-6 p-2" key={title} href={url}>
							<span>{title}</span>
						</a>
					);
				})}

				<Footer />
			</section>
		</>
	);
};

export { VerticalMenu };
