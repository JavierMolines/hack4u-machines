import type { IBlogPost } from "./types";

const BlogPost: React.FC<IBlogPost> = ({
	children,
	$maxWidth = "75ch",
	$padding = "0rem 3rem",
}) => {
	return (
		<main
			style={{
				maxWidth: $maxWidth,
				padding: $padding,
			}}
			className="my-12 mx-0 border border-[#4d4d4d]"
		>
			{children}
		</main>
	);
};

export { BlogPost };
