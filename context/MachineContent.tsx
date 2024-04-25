import React, { useState } from "react";
import type { IMachineCard } from "../components/MachineCard/types";

interface IMachineContext {
	machines: Array<IMachineCard>;
	setMachines: Function;
}

const MachinesContext = React.createContext<IMachineContext>({
	machines: [],
	setMachines: () => {},
});

const MachinesProvider = ({ children }: any) => {
	const [machines, setMachines] = useState<Array<IMachineCard>>([]);

	return (
		<MachinesContext.Provider value={{ machines, setMachines }}>
			{children}
		</MachinesContext.Provider>
	);
};

export { MachinesContext, MachinesProvider };
