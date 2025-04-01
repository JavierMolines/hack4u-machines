import { Icon } from "../Icon";
import type { IFooter } from "./types";

const Footer: React.FC<IFooter> = () => {
	return (
		<div className="text-xs w-full bg-[var(--colorGrayLight)] text-center fixed bottom-0 p-2 flex flex-col items-center gap-2 text-balance">
			<span className="p-0 m-0">
				Made by
				<a
					target="_blank"
					href="https://github.com/JavierMolines/"
					className="text-[var(--colorRedLight)] px-1 hover:text-[var(--colorRedDark)]"
					rel="noreferrer"
				>
					<span>JavierVoid</span>
				</a>
				with more
				<Icon id="love" className="inline-block mx-1" dimension={15} />
				to the Hack4u community.
			</span>
			<p className="p-0 m-0">
				Special thanks to
				<a
					target="_blank"
					href="https://twitter.com/cheatmodes4/"
					className="text-[var(--colorRedLight)] px-1 hover:text-[var(--colorRedDark)]"
					rel="noreferrer"
				>
					@CheatMode4
				</a>
				because this page is based on their website.
			</p>
		</div>
	);
};

export { Footer };
