// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import parse from "node-html-parser"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const newData: any = []
  const childNodesRequire = 10
  const regExpIp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/i
  const regExpVideo = /https:\/\/www.youtube.com/i
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

  for (const machine of urlMachines) {
    const response = await axios.get(machine.url)
    const data = parse(response.data)
    const table = data.querySelector("table")
    const textParseTrim = (node: any) => node?.textContent?.trim()
    const generate = (totalMachines: Array<any>) => {
      let innerData = []

      for (const iterator of totalMachines) {
        if (iterator !== "") {
          innerData.push(iterator)
        }
      }

      return innerData.join("\n")
    }

    if (table && table?.childNodes) {
      for (const info of table.childNodes) {
        const total = info.childNodes.length ?? 0
        const dataMachine = {
          platform: "",
          name: "",
          os: "",
          state: "",
          techniques: "",
          certification: "",
          ip: "",
          video: "",
        }

        if (total !== childNodesRequire) continue

        if (machine.platform === mapInfo.htb) {
          const machineIp = textParseTrim(info.childNodes[2])
          const machineVideo = textParseTrim(info.childNodes[7])

          if (regExpIp.test(machineIp) && regExpVideo.test(machineVideo)) {
            dataMachine.platform = machine.platform
            dataMachine.name = textParseTrim(info.childNodes[1])
            dataMachine.os = textParseTrim(info.childNodes[3])
            dataMachine.state = textParseTrim(info.childNodes[4])
            dataMachine.techniques = textParseTrim(info.childNodes[5])
            dataMachine.certification = textParseTrim(info.childNodes[6])
            dataMachine.ip = machineIp
            dataMachine.video = machineVideo
          } else {
            continue
          }
        } else {
          const techniques = generate(info.childNodes[4].childNodes)
          const certification = generate(info.childNodes[5].childNodes)
          const video = textParseTrim(info.childNodes[7])

          if (regExpVideo.test(video)) {
            dataMachine.platform = machine.platform
            dataMachine.name = textParseTrim(info.childNodes[1])
            dataMachine.os = textParseTrim(info.childNodes[2])
            dataMachine.state = textParseTrim(info.childNodes[3])
            dataMachine.techniques = techniques
            dataMachine.certification = certification
            dataMachine.ip = textParseTrim(info.childNodes[6])
            dataMachine.video = video
          } else {
            continue
          }
        }

        newData.push(dataMachine)
      }
    }
  }

  res.status(200).json({
    newData,
  })
}
