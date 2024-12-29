// Types for Icon

type IconName =
	| "arrowDown"
	| "arrowRight"
	| "close"
	| "easy"
	| "favicon"
	| "filter"
	| "hard"
	| "insane"
	| "link"
	| "linux"
	| "love"
	| "medium"
	| "menu"
	| "search"
	| "settings"
	| "square"
	| "squareCheck"
	| "windows";

export interface IIcon {
	id: IconName;
	dimension: number;
	click?: any;
	className?: string;
	nameId?: string;
}
