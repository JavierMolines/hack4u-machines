// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import parse from "node-html-parser"
import { generate, getParseState, textParseTrim } from "../../utils/methods"
import { mapInfo, urlMachines } from "../../utils/definition"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let currentVulnerability = ""
  const mapping: any = {}
  const newData: any = []
  const regExpIp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/i
  const regExpVideo = /https:\/\/www.youtube.com/i
  const totalMachines = {
    htb: 0,
    vuln: 0,
    swigger: 0,
  }

  for (const machine of urlMachines) {
    const response = await axios.get(machine.url)
    const data = parse(response.data)
    const table = data.querySelector("table")

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

        const childNodesRequire = machine.platform === mapInfo.swigger ? 7 : 10
        if (total !== childNodesRequire) continue

        if (machine.platform === mapInfo.htb) {
          const ip = textParseTrim(info.childNodes[2])
          const video = textParseTrim(info.childNodes[7])
          const state = getParseState(info.childNodes[4])

          if (regExpIp.test(ip) && regExpVideo.test(video)) {
            dataMachine.platform = machine.platform
            dataMachine.name = textParseTrim(info.childNodes[1])
            dataMachine.os = textParseTrim(info.childNodes[3])
            dataMachine.state = state
            dataMachine.techniques = textParseTrim(info.childNodes[5])
            dataMachine.certification = textParseTrim(info.childNodes[6])
            dataMachine.ip = ip
            dataMachine.video = video
            totalMachines.htb++
            newData.push(dataMachine)
          }
        } else if (machine.platform === mapInfo.vuln) {
          const techniques = generate(info.childNodes[4].childNodes)
          const certification = generate(info.childNodes[5].childNodes)
          const video = textParseTrim(info.childNodes[7])
          const state = getParseState(info.childNodes[3])

          if (regExpVideo.test(video)) {
            dataMachine.platform = machine.platform
            dataMachine.name = textParseTrim(info.childNodes[1])
            dataMachine.os = textParseTrim(info.childNodes[2])
            dataMachine.state = state
            dataMachine.techniques = techniques
            dataMachine.certification = certification
            dataMachine.ip = textParseTrim(info.childNodes[6])
            dataMachine.video = video
            totalMachines.vuln++
            newData.push(dataMachine)
          }
        } else if (machine.platform === mapInfo.swigger) {
          const vulnerability = info.childNodes[1].textContent.trim()

          if (vulnerability !== "" && vulnerability !== "Vulnerabilidad") {
            mapping[vulnerability] = {
              platform: mapInfo.swigger,
              skills: [],
              writeUp: info.childNodes[3].textContent.trim(),
              certs: info.childNodes[4].textContent.trim(),
            }
            currentVulnerability = vulnerability
          }

          if (currentVulnerability !== "") {
            mapping[currentVulnerability]["skills"].push(
              info.childNodes[2].textContent.trim()
            )
          }
        }
      }
    }
  }

  for (const relation in mapping) {
    const { skills, certs, writeUp, platform } = mapping[relation]
    if (regExpVideo.test(writeUp)) {
      newData.push({
        platform,
        name: relation,
        techniques: skills.join("\n"),
        certification: certs,
        video: writeUp,
        ip: "",
        os: "",
        state: "",
      })
      totalMachines.swigger++
    }
  }

  res.status(200).json({
    newData,
    totalMachines,
  })
}
