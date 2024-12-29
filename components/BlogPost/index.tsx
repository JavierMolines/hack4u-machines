import { PageLayout } from "../PageLayout";
import type { IBlogPost } from "./types";

const BlogPost: React.FC<IBlogPost> = ({
	children,
	maxWidth = "85ch",
	padding = "0rem 3rem",
	title,
}) => {
	return (
		<PageLayout title={title}>
			<main
				style={{
					maxWidth,
					padding,
				}}
				className="my-12 mx-0 border border-[#4d4d4d]"
			>
				{children}
			</main>
		</PageLayout>
	);
};

export { BlogPost };
