const nameOptions = "filters"

const setStorage = (data: Array<number>) => {
  localStorage.setItem(nameOptions, JSON.stringify(data))
}

const getStorage = (): Array<number> => {
  try {
    const data: Array<number> = JSON.parse(
      localStorage.getItem(nameOptions) ?? ""
    )
    return data
  } catch (error) {
    return []
  }
}

export { getStorage, setStorage }
