// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import parse from "node-html-parser"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const newData: Array<any> = []
  const childNodesRequire = 10
  const regExpIp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/i
  const regExpVideo = /https:\/\/www.youtube.com/i

  // CALL SERVICE
  const response = await axios.get(
    "https://spreadsheets.google.com/tq?tqx=out:html&tq=&key=1dzvaGlT_0xnT-PGO27Z_4prHgA8PHIpErmoWdlUrSoA&gid=1"
  )

  const data = parse(response.data)
  const tbody = data.querySelector("table")

  if (!tbody?.childNodes) return console.log("Not found")

  for (const info of tbody.childNodes) {
    const total = info.childNodes.length ?? 0

    if (total !== childNodesRequire) continue

    const machineIp = info.childNodes[2].innerText.trim()
    const machineVideo = info.childNodes[7].innerText.trim()

    if (regExpIp.test(machineIp) && regExpVideo.test(machineVideo)) {
      newData.push({
        name: info.childNodes[1].innerText.trim(),
        ip: machineIp,
        os: info.childNodes[3].innerText.trim(),
        state: info.childNodes[4].innerText.trim(),
        techniques: info.childNodes[5].innerText.trim(),
        certification: info.childNodes[6].innerText.trim(),
        video: machineVideo,
      })
    }
  }

  res.status(200).json({
    newData,
  })
}
