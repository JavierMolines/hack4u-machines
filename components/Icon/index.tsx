import Image from "next/image";
import type { IIcon } from "./types";

const Icon: React.FC<IIcon> = ({ id, src, dimension, click = () => {} }) => {
	return (
		<Image
			onClick={click}
			src={src}
			alt={src}
			width={dimension}
			height={dimension}
			id={id}
		/>
	);
};

export { Icon };
