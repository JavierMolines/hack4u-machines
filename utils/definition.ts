const filterExact = 3403
const detailMachine = 4309
const sortHight = 5450
const highLightFilter = 6489

const storagesKeys = {
  filterOption: "filters",
  paramSearchOption: "search",
}

const mapInfo = {
  htb: "HackTheBox",
  vuln: "VulnHub",
}

const mappingOfState: any = {
  fácil: "Easy",
  media: "Medium",
  difícil: "Hard",
  insane: "Insane",
}

const urlMachines = [
  {
    platform: mapInfo.vuln,
    url: "https://docs.google.com/spreadsheets/u/0/d/1dzvaGlT_0xnT-PGO27Z_4prHgA8PHIpErmoWdlUrSoA/gviz/tq?tqx=out:html&gid=810933541",
  },
  {
    platform: mapInfo.htb,
    url: "https://docs.google.com/spreadsheets/u/0/d/1dzvaGlT_0xnT-PGO27Z_4prHgA8PHIpErmoWdlUrSoA/gviz/tq?tqx=out:html",
  },
]

const optionsFilters = [
  // { id: filterExact, title: "exact search" },
  { id: highLightFilter, title: "highlight search phrase in skill" },
  { id: detailMachine, title: "detail machine expand" },
  { id: sortHight, title: "sort by most skills" },
]

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
}
