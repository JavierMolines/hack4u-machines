// Types for BlogPost

import type { ReactNode } from "react";

export interface IBlogPost {
	$maxWidth?: string;
	$padding?: string;
	children: ReactNode;
}
