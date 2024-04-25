import { Container } from "./styles";
import type { IBlogPost } from "./types";

const BlogPost: React.FC<IBlogPost> = ({
	children,
	$maxWidth = "75ch",
	$padding = "0rem 3rem",
}) => {
	return (
		<Container $maxWidth={$maxWidth} $padding={$padding}>
			{children}
		</Container>
	);
};

export { BlogPost };
