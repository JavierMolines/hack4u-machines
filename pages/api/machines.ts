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
  const newData: any = []
  const childNodesRequire = 10
  const regExpIp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/i
  const regExpVideo = /https:\/\/www.youtube.com/i

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
          } else {
            continue
          }
        } else {
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
