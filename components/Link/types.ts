// Types for Link
import type { ReactNode } from "react";

export interface ILink {
	children: ReactNode;
	target: string;
	className: string;
	id?: string;
}
