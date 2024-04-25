import { storagesKeys } from "../../utils/definition";
import { randomId } from "../../utils/methods";
import { getStorage } from "../../utils/storage";
import { MachineCard } from "../MachineCard";
import { Container, LabelFound } from "./styles";
import type { IContainerMachines } from "./types";

const ContainerMachines: React.FC<IContainerMachines> = ({ machines }) => {
	const searchInputParam = getStorage(storagesKeys.paramSearchOption);

	const handlerNoMachines = () => {
		if (searchInputParam.length === 0) {
			return <></>;
		}

		return (
			<LabelFound>
				Not machines found from: {searchInputParam.join(" ")}
			</LabelFound>
		);
	};

	return machines.length > 0 ? (
		<>
			<LabelFound>Machines found {machines.length}</LabelFound>
			<Container>
				{machines.map((data, index: number) => {
					return (
						<MachineCard
							platform={data.platform}
							name={data.name}
							os={data.os}
							certification={data.certification}
							techniques={data.techniques}
							video={data.video}
							ip={data.ip}
							state={data.state}
							key={randomId() + data.name}
						/>
					);
				})}
			</Container>
		</>
	) : (
		<>{handlerNoMachines()}</>
	);
};

export { ContainerMachines };
