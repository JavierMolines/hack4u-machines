import type { IIcon } from "./types";

const Icon: React.FC<IIcon> = ({
	id,
	nameId,
	dimension,
	className,
	click = () => {},
}) => {
	switch (id) {
		case "veryeasy":
			return (
				<svg
					onClick={click}
					role="img"
					aria-label="arrowDown"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="none"
					stroke="#ff00ff"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
				</svg>
			);
		case "arrowDown":
			return (
				<svg
					onClick={click}
					role="img"
					aria-label="arrowDown"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="none"
					stroke="#ffffff"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="cursor-pointer select-none"
				>
					<path d="M12 5v13M5 12l7 7 7-7" />
				</svg>
			);
		case "arrowRight":
			return (
				<svg
					onClick={click}
					role="img"
					aria-label="arrowRight"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="none"
					stroke="#ffffff"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="cursor-pointer select-none"
				>
					<path d="M5 12h13M12 5l7 7-7 7" />
				</svg>
			);
		case "close":
			return (
				<svg
					onClick={click}
					role="img"
					aria-label="close"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="none"
					stroke="#ffffff"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="select-none"
				>
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			);
		case "easy":
			return (
				<svg
					onClick={click}
					role="img"
					aria-label="easy"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="none"
					stroke="#1aff1a"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="12" cy="12" r="10" />
					<line x1="12" y1="8" x2="12" y2="12" />
					<line x1="12" y1="16" x2="12.01" y2="16" />
				</svg>
			);
		case "favicon":
			return (
				<svg
					onClick={click}
					role="img"
					aria-label="favicon"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="none"
					stroke="#ff3333"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
					<rect x="9" y="9" width="6" height="6" />
					<line x1="9" y1="1" x2="9" y2="4" />
					<line x1="15" y1="1" x2="15" y2="4" />
					<line x1="9" y1="20" x2="9" y2="23" />
					<line x1="15" y1="20" x2="15" y2="23" />
					<line x1="20" y1="9" x2="23" y2="9" />
					<line x1="20" y1="14" x2="23" y2="14" />
					<line x1="1" y1="9" x2="4" y2="9" />
					<line x1="1" y1="14" x2="4" y2="14" />
				</svg>
			);
		case "filter":
			return (
				<svg
					onClick={click}
					role="img"
					aria-label="filter"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="none"
					stroke="#ffffff"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="select-none"
				>
					<line x1="4" y1="21" x2="4" y2="14" />
					<line x1="4" y1="10" x2="4" y2="3" />
					<line x1="12" y1="21" x2="12" y2="12" />
					<line x1="12" y1="8" x2="12" y2="3" />
					<line x1="20" y1="21" x2="20" y2="16" />
					<line x1="20" y1="12" x2="20" y2="3" />
					<line x1="1" y1="14" x2="7" y2="14" />
					<line x1="9" y1="8" x2="15" y2="8" />
					<line x1="17" y1="16" x2="23" y2="16" />
				</svg>
			);
		case "hard":
			return (
				<svg
					onClick={click}
					role="img"
					aria-label="hard"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="none"
					stroke="#ff1a1a"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
					<line x1="12" y1="8" x2="12" y2="12" />
					<line x1="12" y1="16" x2="12.01" y2="16" />
				</svg>
			);
		case "insane":
			return (
				<svg
					onClick={click}
					role="img"
					aria-label="insane"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="none"
					stroke="#ffd700"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="12" cy="12" r="10" />
					<line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
				</svg>
			);
		case "link":
			return (
				<svg
					onClick={click}
					role="img"
					aria-label="link"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="none"
					stroke="#f82668"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<g fill="none" fillRule="evenodd">
						<path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
					</g>
				</svg>
			);
		case "linux":
			return (
				<svg
					onClick={click}
					role="img"
					aria-label="linux"
					xmlns="http://www.w3.org/2000/svg"
					fill="white"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
				>
					<path d="M20.581 19.049c-.55-.446-.336-1.431-.907-1.917.553-3.365-.997-6.331-2.845-8.232-1.551-1.595-1.051-3.147-1.051-4.49 0-2.146-.881-4.41-3.55-4.41-2.853 0-3.635 2.38-3.663 3.738-.068 3.262.659 4.11-1.25 6.484-2.246 2.793-2.577 5.579-2.07 7.057-.237.276-.557.582-1.155.835-1.652.72-.441 1.925-.898 2.78-.13.243-.192.497-.192.74 0 .75.596 1.399 1.679 1.302 1.461-.13 2.809.905 3.681.905.77 0 1.402-.438 1.696-1.041 1.377-.339 3.077-.296 4.453.059.247.691.917 1.141 1.662 1.141 1.631 0 1.945-1.849 3.816-2.475.674-.225 1.013-.879 1.013-1.488 0-.39-.139-.761-.419-.988zm-9.147-10.465c-.319 0-.583-.258-1-.568-.528-.392-1.065-.618-1.059-1.03 0-.283.379-.37.869-.681.526-.333.731-.671 1.249-.671.53 0 .69.268 1.41.579.708.307 1.201.427 1.201.773 0 .355-.741.609-1.158.868-.613.378-.928.73-1.512.73zm1.665-5.215c.882.141.981 1.691.559 2.454l-.355-.145c.184-.543.181-1.437-.435-1.494-.391-.036-.643.48-.697.922-.153-.064-.32-.11-.523-.127.062-.923.658-1.737 1.451-1.61zm-3.403.331c.676-.168 1.075.618 1.078 1.435l-.31.19c-.042-.343-.195-.897-.579-.779-.411.128-.344 1.083-.115 1.279l-.306.17c-.42-.707-.419-2.133.232-2.295zm-2.115 19.243c-1.963-.893-2.63-.69-3.005-.69-.777 0-1.031-.579-.739-1.127.248-.465.171-.952.11-1.343-.094-.599-.111-.794.478-1.052.815-.346 1.177-.791 1.447-1.124.758-.937 1.523.537 2.15 1.85.407.851 1.208 1.282 1.455 2.225.227.871-.71 1.801-1.896 1.261zm6.987-1.874c-1.384.673-3.147.982-4.466.299-.195-.563-.507-.927-.843-1.293.539-.142.939-.814.46-1.489-.511-.721-1.555-1.224-2.61-2.04-.987-.763-1.299-2.644.045-4.746-.655 1.862-.272 3.578.057 4.069.068-.988.146-2.638 1.496-4.615.681-.998.691-2.316.706-3.14l.62.424c.456.337.838.708 1.386.708.81 0 1.258-.466 1.882-.853.244-.15.613-.302.923-.513.52 2.476 2.674 5.454 2.795 7.15.501-1.032-.142-3.514-.142-3.514.842 1.285.909 2.356.946 3.67.589.241 1.221.869 1.279 1.696l-.245-.028c-.126-.919-2.607-2.269-2.83-.539-1.19.181-.757 2.066-.997 3.288-.11.559-.314 1.001-.462 1.466zm4.846-.041c-.985.38-1.65 1.187-2.107 1.688-.88.966-2.044.503-2.168-.401-.131-.966.36-1.493.572-2.574.193-.987-.023-2.506.431-2.668.295 1.753 2.066 1.016 2.47.538.657 0 .712.222.859.837.092.385.219.709.578 1.09.418.447.29 1.133-.635 1.49zm-8-13.006c-.651 0-1.138-.433-1.534-.769-.203-.171.05-.487.253-.315.387.328.777.675 1.281.675.607 0 1.142-.519 1.867-.805.247-.097.388.285.143.382-.704.277-1.269.832-2.01.832z" />
				</svg>
			);
		case "love":
			return (
				<svg
					className={className}
					onClick={click}
					role="img"
					aria-label="love"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="#ff0000"
					stroke="#ff0000"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
				</svg>
			);
		case "medium":
			return (
				<svg
					onClick={click}
					role="img"
					aria-label="medium"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="none"
					stroke="#ffa500"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
					<line x1="12" y1="9" x2="12" y2="13" />
					<line x1="12" y1="17" x2="12.01" y2="17" />
				</svg>
			);
		case "menu":
			return (
				<svg
					onClick={click}
					role="img"
					aria-label="menu"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="none"
					stroke="#ffffff"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="select-none"
				>
					<line x1="3" y1="12" x2="21" y2="12" />
					<line x1="3" y1="6" x2="21" y2="6" />
					<line x1="3" y1="18" x2="21" y2="18" />
				</svg>
			);
		case "search":
			return (
				<svg
					onClick={click}
					role="img"
					aria-label="search"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="none"
					stroke="#fff"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="select-none"
				>
					<circle cx="11" cy="11" r="8" />
					<line x1="21" y1="21" x2="16.65" y2="16.65" />
				</svg>
			);
		case "settings":
			return (
				<svg
					onClick={click}
					role="img"
					aria-label="settings"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="none"
					stroke="#ffffff"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="12" cy="12" r="3" />
					<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
				</svg>
			);
		case "square":
			return (
				<svg
					id={nameId}
					onClick={click}
					role="img"
					aria-label="square"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="none"
					stroke="#b01214"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="cursor-pointer select-none"
				>
					<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
				</svg>
			);
		case "squareCheck":
			return (
				<svg
					id={nameId}
					onClick={click}
					role="img"
					aria-label="squareCheck"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					viewBox="0 0 24 24"
					fill="none"
					stroke="#f82668"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="cursor-pointer select-none"
				>
					<polyline points="9 11 12 14 22 4" />
					<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
				</svg>
			);
		case "windows":
			return (
				<svg
					onClick={click}
					role="img"
					aria-label="windows"
					xmlns="http://www.w3.org/2000/svg"
					width={dimension}
					height={dimension}
					fill="#ffffff"
					viewBox="0 0 24 24"
				>
					<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6.834l6-.834v6h-6v-5.166zm-1 .165l-5 .678v4.323h5v-5.001zm0 6.001h-5v3.323l5 .678v-4.001zm1 0v4.166l6 .834v-5h-6z" />
				</svg>
			);
	}
};

export { Icon };
