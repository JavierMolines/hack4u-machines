// Types for Header

interface IMapTotalMachines {
	htb: number;
	vuln: number;
	swigger: number;
	challenge: number;
}

export interface IHeader {
	totalMachines: IMapTotalMachines;
}
