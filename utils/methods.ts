import { mappingOfState } from "./definition"

const textParseTrim = (node: any) => node?.textContent?.trim()
const iconByPlatform = (inPlatform: string) =>
  inPlatform === "Windows" ? "windows" : "linux"

const generate = (totalMachines: Array<any>) => {
  let innerData = []

  for (const iterator of totalMachines) {
    const textFormat = textParseTrim(iterator)
    if (textFormat !== "") {
      innerData.push(textFormat)
    }
  }

  return innerData.join("\n")
}

const randomId = (): string => {
  const data: Array<number> = []
  for (let index = 0; index < 3; index++) {
    const generate = Math.floor(Math.random() * 11)
    data.push(generate)
  }
  return data.join(",")
}

const iconByState = (stateMachine: string) => {
  switch (stateMachine) {
    case "Easy":
      return "easy"
    case "Medium":
      return "medium"
    case "Hard":
      return "hard"
    default:
      return "insane"
  }
}

const getParseState = (info: any) => {
  const format: string = textParseTrim(info).toLowerCase()

  for (const key in mappingOfState) {
    if (key === format) {
      return mappingOfState[key]
    }
  }

  return format
}

export {
  generate,
  textParseTrim,
  getParseState,
  iconByPlatform,
  iconByState,
  randomId,
}
