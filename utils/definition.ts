const mapInfo = {
  htb: "HackTheBox",
  vuln: "VulnHub",
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

const mappingOfState: any = {
  fácil: "Easy",
  media: "Medium",
  difícil: "Hard",
  insane: "Insane",
}

export { mapInfo, urlMachines, mappingOfState }
