const setStorage = (nameOption: string, data: Array<any>) => {
  localStorage.setItem(nameOption, JSON.stringify(data))
}

const getStorage = (nameOption: string): Array<any> => {
  try {
    const data = JSON.parse(localStorage.getItem(nameOption) ?? "")
    return data
  } catch (error) {
    return []
  }
}

export { getStorage, setStorage }
