const filterExact = 3403;
const detailMachine = 4309;
const sortHight = 5450;
const highLightFilter = 6489;

const urlBase =
	"https://docs.google.com/spreadsheets/d/1dzvaGlT_0xnT-PGO27Z_4prHgA8PHIpErmoWdlUrSoA/export?format=csv&id=1dzvaGlT_0xnT-PGO27Z_4prHgA8PHIpErmoWdlUrSoA";

const storagesKeys = {
	filterOption: "filters",
	paramSearchOption: "search",
};

const mapInfo = {
	htb: "HackTheBox",
	vuln: "VulnHub",
	swigger: "PortSwigger",
	challenge: "HTB-Challenge",
};

const mappingOfState: any = {
	fácil: "Easy",
	media: "Medium",
	difícil: "Hard",
	insane: "Insane",
};

const urlMachines = [
	/* {
		platform: mapInfo.challenge,
		url: `${urlBase}&gid=1875327501`,
	}, */
	{
		platform: mapInfo.swigger,
		url: `${urlBase}&gid=680381051`,
	},
	{
		platform: mapInfo.vuln,
		url: `${urlBase}&gid=810933541`,
	},
	{
		platform: mapInfo.htb,
		url: `${urlBase}`,
	},
];

const optionsFilters = [
	// { id: filterExact, title: "exact search" },
	{ id: highLightFilter, title: "highlight search phrase in skill" },
	{ id: detailMachine, title: "detail machine expand" },
	{ id: sortHight, title: "sort by most skills" },
];

export {
	optionsFilters,
	mapInfo,
	urlMachines,
	mappingOfState,
	sortHight,
	filterExact,
	detailMachine,
	highLightFilter,
	storagesKeys,
};
