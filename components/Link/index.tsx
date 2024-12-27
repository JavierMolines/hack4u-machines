import type { ILink } from "./types";

const Link: React.FC<ILink> = ({ target, children, color, id }) => {
	return (
		<a href={target} target="_blank" rel="noreferrer" id={id} style={{ color }}>
			{children}
		</a>
	);
};

export { Link };
