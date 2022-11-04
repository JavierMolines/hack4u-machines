const nameOptions = "filters"

const setLocalStorage = (data: Array<number>) => {
  localStorage.setItem(nameOptions, JSON.stringify(data))
}

const getLocalStorage = (): Array<number> => {
  try {
    const data: Array<number> = JSON.parse(
      localStorage.getItem(nameOptions) ?? ""
    )
    return data
  } catch (error) {
    return []
  }
}

export { getLocalStorage, setLocalStorage }
