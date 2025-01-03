import { storagesKeys } from "../../utils/definition";
import { randomId } from "../../utils/methods";
import { getStorage } from "../../utils/storage";
import { MachineCard } from "../MachineCard";
import type { IContainerMachines } from "./types";

const ContainerMachines: React.FC<IContainerMachines> = ({ machines }) => {
	const searchInputParam = getStorage(storagesKeys.paramSearchOption);

	const handlerNoMachines = () => {
		if (searchInputParam.length === 0) {
			return <></>;
		}

		return (
			<p className="p-2 w-[99.5%] text-left">
				Not machines found from: {searchInputParam.join(" ")}
			</p>
		);
	};

	return machines.length > 0 ? (
		<>
			<p className="p-2 w-[99.5%] text-left">
				Machines found {machines.length}
			</p>

			<div className="mb-4 mx-2 p-4 w-[99.5%] bg-[var(--colorGrayDark)]">
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
			</div>
		</>
	) : (
		<>{handlerNoMachines()}</>
	);
};

export { ContainerMachines };
