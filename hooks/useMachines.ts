import { useContext, useEffect, useState } from "react";
import { MachinesContext } from "../context/MachineContent";
import { getStorage, setStorage } from "../utils/storage";

const useMachines = () => {
	const { machines, setMachines } = useContext(MachinesContext);
	const [mapTotalMachines, setMapTotalMachines] = useState<any>({});

	const callApi = async () => {
		try {
			const nowDate = new Date().toLocaleDateString();

			// CACHE SYSTEM
			const cacheMachines = {
				machines: getStorage("cacheMachinesData"),
				totals: getStorage("cacheMachinesTotals"),
				time: getStorage("cacheTiming")[0] ?? "",
			};

			// CACHE TIME ( ONE DAY )
			if (cacheMachines.machines.length > 0 && nowDate === cacheMachines.time) {
				setMachines(cacheMachines.machines);
				setMapTotalMachines(cacheMachines.totals);
				return;
			}

			// NORMAL FLOW
			const response = await fetch("/api/machines");
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
