import { useContext, useEffect, useState } from "react";
import { MachinesContext } from "../context/MachineContent";
import { setStorage } from "../utils/storage";

const useMachines = () => {
	const { machines, setMachines } = useContext(MachinesContext);
	const [mapTotalMachines, setMapTotalMachines] = useState<any>({});

	const callApi = async () => {
		try {
			const nowDate = new Date().toLocaleDateString();
			const response = await fetch("http://localhost:8080");
			const data = await response.json();

			setStorage("cacheTiming", [nowDate]);
			setStorage("cacheMachinesData", data.newData);
			setStorage("cacheMachinesTotals", data.totalMachines);
			setMachines(data.newData);
			setMapTotalMachines(data.totalMachines);
		} catch (error) {}
	};

	useEffect(() => {
		callApi();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { machines, mapTotalMachines };
};

export { useMachines };
