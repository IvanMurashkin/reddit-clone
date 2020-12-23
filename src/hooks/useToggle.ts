import { useState } from "react"

export const useToggle = (): [boolean, () => void, () => void] => {
  const [isOpen, setIsOpen] = useState(false)

  const hide = (): void => {
    setIsOpen(false)
  }

  const show = (): void => {
    setIsOpen(true)
  }

  return [isOpen, show, hide]
}
