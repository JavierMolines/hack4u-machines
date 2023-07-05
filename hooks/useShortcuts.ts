/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"

const useShortcuts = () => {
  const handlerFocus = (currentValue: number) => {
    const blocks = document.querySelectorAll(".machineItem")
    const getSS = sessionStorage.getItem("shortcutTarget")
    const targetStorage = Number(getSS)
    let newTarget = targetStorage + currentValue

    if (newTarget > blocks.length - 1) {
      newTarget = blocks.length - 1
    }

    if (newTarget <= 0) {
      newTarget = 0
    }

    const targets = {
      current: newTarget,
      prev: targetStorage,
    }

    const prevBlock = document.getElementById(blocks[targets.prev]?.id)
    prevBlock?.style.setProperty("border-top", "1px solid transparent")
    prevBlock?.style.setProperty("border-bottom", "1px solid #808080")
    prevBlock?.style.setProperty("border-right", "1px solid transparent")
    prevBlock?.style.setProperty("border-left", "1px solid transparent")
    const currentBlock = document.getElementById(blocks[targets.current]?.id)
    currentBlock?.style.setProperty("border", "1px solid gold")
    currentBlock?.scrollIntoView()
    sessionStorage.setItem("shortcutTarget", targets.current.toString())
  }

  const mappingOptions: any = {
    y: () => {
      const blocks = document.querySelectorAll(".machineItem")
      const getSS = sessionStorage.getItem("shortcutTarget")
      const currentTarget = blocks[Number(getSS)]?.id + "youtube"
      const block = document.getElementById(currentTarget)
      block?.click()
    },
    s: () => {
      window.scrollTo(0, 0)
      document.getElementById("machinesButtonSearch")?.focus()
    },
    d: () => {
      window.scrollTo(0, 0)
      document.getElementById("machinesButtonFilter")?.click()
    },
    "1": () => document.getElementById("advancedFilterOption1")?.click(),
    "2": () => document.getElementById("advancedFilterOption2")?.click(),
    "3": () => document.getElementById("advancedFilterOption3")?.click(),
    ",": () => handlerFocus(1),
    ".": () => handlerFocus(-1),
    Enter: () => {
      const blocks = document.querySelectorAll(".machineItem")
      const getSS = sessionStorage.getItem("shortcutTarget")
      const currentTarget = blocks[Number(getSS)]?.id + "button"
      const block = document.getElementById(currentTarget)
      block?.click()
      block?.scrollIntoView()
    },
  }

  const handleKeyPress = (event: any) => {
    const isCtrlKey = event.ctrlKey || event.metaKey // 'metaKey' para macOS
    const mappingValidOptions = Object.keys(mappingOptions)
    const { key } = event

    if (!isCtrlKey || !mappingValidOptions.includes(key)) return

    event.preventDefault()
    mappingOptions[key]()
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
    sessionStorage.setItem("shortcutTarget", "-1")
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  return {}
}

export { useShortcuts }
