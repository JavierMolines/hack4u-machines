import { useEffect } from "react";
import { storagesKeys } from "../../utils/definition";
import { removeStorage } from "../../utils/storage";
import type { ILoading } from "./types";

const Loading: React.FC<ILoading> = () => {
	useEffect(() => {
		removeStorage(storagesKeys.paramSearchOption);
	}, []);

	return (
		<section className="flex justify-center items-center h-[50vh]">
			<main className="relative w-[300px] h-[300px]">
				<div
					className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[55px] h-[55px] animate-spin"
					style={{
						border: "3px solid",
						borderRadius: "50%",
						borderColor:
							"var(--colorRedDark) var(--colorRedDark) transparent transparent",
					}}
				/>
				<div
					className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[67px] h-[67px] animate-spin-reverse"
					style={{
						border: "3px solid",
						borderRadius: "50%",
						borderColor: "transparent transparent white white",
					}}
				/>
			</main>
		</section>
	);
};

export { Loading };
