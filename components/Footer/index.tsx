import type { IFooter } from "./types";

const Footer: React.FC<IFooter> = () => {
	const dimension = 15;
	return (
		<div className="text-base w-full bg-[var(--colorGrayLight)] text-center fixed bottom-0 p-2 flex flex-col items-center gap-2">
			<p className="p-0 m-0">
				Made by
				<a
					target="_blank"
					href="https://github.com/JavierMolines/"
					className="text-[var(--colorRedLight)] px-1 hover:text-[var(--colorRedDark)]"
					rel="noreferrer"
				>
					JavierVoid
				</a>
				with more
				<img
					src="/love.svg"
					height={dimension}
					width={dimension}
					alt="love"
					className="mx-1"
				/>
				to the Hack4u community.
			</p>
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
