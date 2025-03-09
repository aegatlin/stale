import { createContext, FocusEvent, useContext, useState } from 'react'

const DropdownContext = createContext(null)

function DropdownRoot({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const onBlur = (e: FocusEvent) => {
    const rootEl = e.currentTarget
    const newEl = e.relatedTarget
    const isFocused = rootEl != newEl && rootEl.contains(newEl)
    if (!isFocused) setIsOpen(false)
  }

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div tabIndex={-1} onBlur={onBlur} className="group relative">
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

function Input({ toggleOnClick = false, children }) {
  const { isOpen, setIsOpen } = useContext(DropdownContext)
  const handleClick = () =>
    toggleOnClick ? setIsOpen(!isOpen) : setIsOpen(true)

  return (
    <div tabIndex={-1} onClick={handleClick}>
      {children}
    </div>
  )
}

function Items({ children }) {
  const { isOpen } = useContext(DropdownContext)

  if (!isOpen) return null

  return (
    <div
      tabIndex={-1}
      className="absolute right-0 z-10 mt-4 hidden min-w-full rounded-2xl border bg-white p-4 hover:border-gray-300 group-focus-within:block"
    >
      {children}
    </div>
  )
}

export const Dropdown = Object.assign(DropdownRoot, { Input, Items })
