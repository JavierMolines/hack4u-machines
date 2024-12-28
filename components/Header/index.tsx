import type { IHeader } from "./types";

const Header: React.FC<IHeader> = ({ totalMachines }) => {
	return (
		<main className="py-6 flex flex-col justify-center items-center gap-4">
			<h1
				className="text-shadow-sm text-center text-3xl"
				style={{
					textShadow: "0px 0px 10px #000000",
					color: "var(--colorRedLight)",
				}}
			>
				S4vitar Machine&apos;s Resolutions
			</h1>

			<h2 className="p-0 m-0 text-2xl">Loaded Machines</h2>

			<div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-center">
				<p>HackTheBox: {totalMachines.htb ?? 0}</p>
				<p>VulnHub: {totalMachines.vuln ?? 0}</p>
				<p className="col-span-2 lg:col-span-1">
					PortSwigger: {totalMachines.swigger ?? 0}
				</p>
			</div>
		</main>
	);
};

export { Header };
