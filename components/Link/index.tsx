import type { ILink } from "./types";

const Link: React.FC<ILink> = ({ target, children, className, id }) => {
	return (
		<a
			href={target}
			target="_blank"
			rel="noreferrer"
			id={id}
			className={className}
		>
			{children}
		</a>
	);
};

export { Link };
