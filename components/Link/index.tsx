import { CustomLink } from "./styles";
import type { ILink } from "./types";

const Link: React.FC<ILink> = ({ target, children, color, id }) => {
	return (
		<CustomLink
			href={target}
			target="_blank"
			rel="noreferrer"
			id={id}
			style={{ color }}
		>
			{children}
		</CustomLink>
	);
};

export { Link };
