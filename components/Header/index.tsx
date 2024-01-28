import { Container, PlatformContainer } from "./styles";
import { IHeader } from "./types";

const Header: React.FC<IHeader> = ({ totalMachines }) => {
	return (
		<Container>
			<h1>S4vitar Machine&apos;s Resolutions</h1>
			<h2>Loaded Machines</h2>
			<PlatformContainer>
				<p>HackTheBox: {totalMachines.htb ?? 0}</p>
				<p>VulnHub: {totalMachines.vuln ?? 0}</p>
				<p>PortSwigger: {totalMachines.swigger ?? 0}</p>
			</PlatformContainer>
		</Container>
	);
};

export { Header };
