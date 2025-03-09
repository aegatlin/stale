import { MouseEvent, ReactNode } from 'react'

interface DrawerProps {
  side: 'left' | 'right'
  onBackdropClick: (e: MouseEvent) => void
  children: ReactNode
}

export function Drawer({ onBackdropClick, children, side }: DrawerProps) {
  const handleClick = (e: MouseEvent) => {
    const backdropEl = e.currentTarget
    const clickedEl = e.target
    const isBackdropClicked = backdropEl == clickedEl
    if (isBackdropClicked) onBackdropClick(e)
  }

  const justification = side === 'left' ? 'justify-start' : 'justify-end'

  return (
    <div
      tabIndex={-1}
      onClick={handleClick}
      className={`fixed top-0 bottom-0 left-0 right-0 z-20 flex items-stretch bg-black/30 ${justification}`}
    >
      <div className="bg-white p-4 drop-shadow-2xl">{children}</div>
    </div>
  )
}
