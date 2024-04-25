// Types for Link
import type { ReactNode } from "react";

export interface ILink {
	children: ReactNode;
	target: string;
	color: string;
	id?: string;
}
