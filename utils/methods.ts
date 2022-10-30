import { mappingOfState } from "./definition"

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

const getParseState = (info: any) => {
  const format: string = textParseTrim(info).toLowerCase()

  for (const key in mappingOfState) {
    if (key === format) {
      return mappingOfState[key]
    }
  }

  return format
}

export { generate, textParseTrim, getParseState }
